import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { registerValidator, loginValidator } from '#validators/auth'

export default class AuthController {
  public async showRegister({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  public async register({ request, response, auth, session }: HttpContext) {
    // Validasi hanya field yang diperlukan (tanpa role)
    const { username, email, password } = await request.validateUsing(registerValidator)

    // Buat pengguna baru dengan role 'buyer' secara hardcode
    const user = await User.create({
      username,
      email,
      password,
      role: 'buyer', // Selalu daftarkan sebagai 'buyer'
    })

    await auth.use('web').login(user)

    session.flash('success', `Akun berhasil dibuat! Selamat datang, ${user.username}!`)

    // Langsung arahkan ke dashboard buyer
    // (Seller akan login melalui rute yang sama tetapi harus sudah ada di database)
    const intendedUrl = session.get('intended_url')
    if (intendedUrl) {
      session.forget('intended_url')
      return response.redirect(intendedUrl)
    }

    return response.redirect().toRoute('buyer.dashboard')
  }

  public async showLogin({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  public async login({ request, response, auth, session }: HttpContext) {
    const { username, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(username, password)

    await auth.use('web').login(user)
    session.flash('success', `Selamat datang kembali, ${user.username}!`)

    // If user is a seller, always redirect to seller dashboard
    if (user.role === 'seller') {
      return response.redirect().toRoute('seller.dashboard')
    }

    // For buyers, check for an intended URL
    const intendedUrl = session.get('intended_url')
    if (intendedUrl) {
      session.forget('intended_url')
      return response.redirect(intendedUrl)
    }

    // If no intended URL, redirect buyer to their dashboard
    return response.redirect().toRoute('buyer.dashboard')
  }

  public async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.flash('success', 'Anda berhasil logout.')
    return response.redirect().toRoute('home')
  }
}
