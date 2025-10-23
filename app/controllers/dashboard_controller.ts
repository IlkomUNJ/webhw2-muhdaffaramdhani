import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class DashboardController {
  public async buyerDashboard(ctx: HttpContext) {
    await ctx.auth.check()
    return ctx.view.render('pages/buyer/dashboard', { user: ctx.auth.user })
  }

  public async sellerDashboard(ctx: HttpContext) {
    await ctx.auth.check()
    return ctx.view.render('pages/seller/dashboard', { user: ctx.auth.user })
  }

  public async showWishlists({ view, auth }: HttpContext) {
    const sellerId = auth.user!.id

    // Ambil produk milik seller
    // yang memiliki setidaknya satu wishlist
    // dan preload data wishlist serta data user (buyer)
    const products = await Product.query()
      .where('sellerId', sellerId)
      .preload('wishlists', (wishlistQuery) => {
        // Preload data pembeli (user) dari wishlist
        wishlistQuery.preload('user', (userQuery) => {
          userQuery.where('role', 'buyer') // Pastikan hanya role buyer
        })
      })
      // Hanya tampilkan produk yang ada di wishlist
      .whereHas('wishlists', (q) => {
        // Pastikan wishlist tersebut milik seorang buyer
        q.whereHas('user', (uq) => {
          uq.where('role', 'buyer')
        })
      })
      .orderBy('name', 'asc')

    // Filter manual untuk memastikan wishlists tidak kosong setelah preload
    const wishlistedProducts = products.filter((p) => p.wishlists.length > 0)

    return view.render('pages/seller/wishlists', {
      products: wishlistedProducts,
    })
  }
}
