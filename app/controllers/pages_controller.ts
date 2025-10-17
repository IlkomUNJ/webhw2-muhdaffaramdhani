import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
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
}
