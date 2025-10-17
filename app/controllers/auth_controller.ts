import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { registerValidator, loginValidator } from '#validators/auth'

export default class AuthController {
  // Show registration page
  async showRegister({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  // Handle registration
  async register({ request, response, auth }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)
    const user = await User.create(payload)
    await auth.use('web').login(user)

    if (user.role === 'seller') {
      return response.redirect().toRoute('seller.dashboard')
    }
    return response.redirect().toRoute('buyer.dashboard')
  }

  // Show login page
  async showLogin({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  // Handle login
  async login({ request, response, auth, session }: HttpContext) {
    const { username, password } = await request.validateUsing(loginValidator)

    try {
      await auth.use('web').attempt(username, password)
      const user = auth.getUserOrFail()

      if (user.role === 'seller') {
        return response.redirect().toRoute('seller.dashboard')
      }
      return response.redirect().toRoute('buyer.dashboard')
    } catch (error) {
      session.flash('error', 'Username atau password salah.')
      session.flash('username', username)
      return response.redirect().back()
    }
  }

  // Handle logout
  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('home')
  }
}
