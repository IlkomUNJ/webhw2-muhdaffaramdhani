import type { HttpContext } from '@adonisjs/core/http'

/**
 * Controller untuk mengelola tampilan dasar (pages) di aplikasi.
 * (Menggantikan PagesController)
 */
export default class ViewController {
  /**
   * Menampilkan halaman utama.
   */
  public async home({ view }: HttpContext) {
    return view.render('pages/home')
  }

  /**
   * Menampilkan halaman produk.
   */
  public async products({ view }: HttpContext) {
    return view.render('pages/products')
  }

  /**
   * Menampilkan halaman tentang kami.
   */
  public async about({ view }: HttpContext) {
    return view.render('pages/about')
  }

  /**
   * Menampilkan halaman checkout.
   */
  public async checkout({ view }: HttpContext) {
    return view.render('pages/checkout')
  }

  /**
   * Menampilkan halaman Login Buyer. (Simulasi)
   */
  public async login({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  /**
   * Menampilkan halaman Register Buyer. (Simulasi)
   */
  public async register({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  /**
   * Menampilkan halaman Admin Dashboard (untuk Seller). (Simulasi)
   */
  public async admin({ view }: HttpContext) {
    return view.render('pages/admin/dashboard')
  }
}
