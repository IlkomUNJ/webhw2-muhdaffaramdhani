import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { validateRegistration, loginValidator } from '#validators/auth'

export default class AuthController {
  // Menampilkan halaman registrasi
  async showRegister({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  // Menangani proses registrasi
  async register({ request, response, auth, session }: HttpContext) {
    try {
      const payload = await validateRegistration(await request.all())
      const user = await User.create(payload)
      await auth.use('web').login(user)

      if (user.role === 'seller') {
        return response.redirect().toRoute('seller.dashboard')
      }
      return response.redirect().toRoute('buyer.dashboard')
    } catch (error) {
      session.flash('error', error.message)
      session.flash('username', request.input('username'))
      session.flash('email', request.input('email'))
      return response.redirect().back()
    }
  }

  // Menampilkan halaman login
  async showLogin({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  // Menangani proses login
  async login({ request, response, auth, session }: HttpContext) {
    try {
      const { username, password } = await request.validateUsing(loginValidator)
      const user = await User.verifyCredentials(username, password)

      // Clear any existing session data
      session.clear()

      // Login user
      await auth.use('web').login(user)

      // Set welcome message
      session.flash('success', 'Selamat datang kembali!')

      if (user.role === 'seller') {
        return response.redirect().toRoute('seller.dashboard')
      }
      return response.redirect().toRoute('buyer.dashboard')
    } catch (error) {
      session.flash('error', 'Username atau password salah.')
      session.flash('username', request.input('username'))
      return response.redirect().back()
    }
  }

  // Menangani proses logout
  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('home')
  }
}
