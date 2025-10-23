import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import Wishlist from '#models/wishlist'

export default class ProductController {
  /**
   * Get popular products for home page
   */
  public async getPopularProducts() {
    return await Product.query().where('rating', '>=', 4).orderBy('orderCount', 'desc').limit(8)
  }

  /**
   * Display a list of resource
   */
  public async index({ view, auth, request }: HttpContext) {
    // PERBAIKAN: Mengubah nama variabel menjadi camelCase
    const { search, city, minPrice, maxPrice, sort } = request.qs()
    let userWishlist: number[] = []

    // Ambil wishlist user jika sudah login
    if (auth.isAuthenticated) {
      const wishlistItems = await Wishlist.query().where('user_id', auth.user!.id)
      userWishlist = wishlistItems.map((item) => item.productId)
    }

    const query = Product.query()

    if (search) query.where('name', 'like', `%${search}%`)
    if (city) query.where('city', city)
    // PERBAIKAN: Menggunakan variabel camelCase
    if (minPrice) query.where('price', '>=', minPrice)
    // PERBAIKAN: Menggunakan variabel camelCase
    if (maxPrice) query.where('price', '<=', maxPrice)

    if (sort && sort !== 'default') {
      const [column, direction] = sort.split('-')
      if (['price', 'calories', 'rating'].includes(column) && ['asc', 'desc'].includes(direction)) {
        query.orderBy(column, direction as 'asc' | 'desc')
      }
    } else {
      query.orderBy('id', 'asc')
    }

    const products = await query
    const cities = await Product.query().distinct('city').orderBy('city', 'asc')

    return view.render('pages/products', {
      products,
      cities: cities.map((c) => c.city),
      userWishlist, // Kirim data wishlist ke view
    })
  }

  /**
   * Display product details
   */
  public async show({ params, view }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    // PERBAIKAN: Menggunakan view product_detail yang baru
    return view.render('pages/product_detail', { product })
  }
}
