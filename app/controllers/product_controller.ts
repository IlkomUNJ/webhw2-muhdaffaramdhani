import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import Wishlist from '#models/wishlist'

export default class ProductController {
  /**
   * Get popular products for home page
   */
  public async getPopularProducts() {
    // Ambil 10 produk, lalu acak dan ambil 8 untuk variasi
    const products = await Product.query()
      .where('rating', '>=', 4)
      .orderBy('orderCount', 'desc')
      .limit(10)
    // Simple shuffle
    products.sort(() => Math.random() - 0.5)
    return products.slice(0, 8)
  }

  /**
   * Display a list of resource
   */
  public async index({ view, auth, request }: HttpContext) {
    const { search, city, minPrice, maxPrice, sort } = request.qs()
    let userWishlist: number[] = []

    // Cek auth.user sebelum akses properti
    if (auth.isAuthenticated && auth.user) {
      const wishlistItems = await Wishlist.query()
        .where('user_id', auth.user.id)
        .select('product_id') // Lebih efisien
      userWishlist = wishlistItems.map((item) => item.productId)
    }

    const query = Product.query()

    if (search) query.where('name', 'like', `%${search}%`)
    if (city) query.where('city', city)
    if (minPrice) query.where('price', '>=', minPrice)
    if (maxPrice) query.where('price', '<=', maxPrice)

    if (sort && sort !== 'default') {
      const [column, direction] = sort.split('-')
      if (['price', 'calories', 'rating'].includes(column) && ['asc', 'desc'].includes(direction)) {
        query.orderBy(column, direction as 'asc' | 'desc')
      }
    } else {
      query.orderBy('id', 'asc') // Default sort
    }

    const products = await query
    const citiesResult = await Product.query().distinct('city').orderBy('city', 'asc')

    // Middleware 'initialize_auth_middleware' sudah membuat
    // auth.isAuthenticated dan auth.user tersedia di view secara global.
    // Tidak perlu mengirim 'isAuthenticated' lagi secara manual.
    return view.render('pages/products', {
      products,
      cities: citiesResult.map((c) => c.city),
      userWishlist, // Tetap kirim wishlist spesifik user ini
    })
  }

  /**
   * Display product details
   */
  public async show({ params, view, auth }: HttpContext) {
    let userWishlist: number[] = []
    // Cek auth.user sebelum akses properti
    if (auth.isAuthenticated && auth.user) {
      const wishlistItems = await Wishlist.query()
        .where('user_id', auth.user.id)
        .select('product_id')
      userWishlist = wishlistItems.map((item) => item.productId)
    }

    // findOrFail akan otomatis error 404 jika produk tidak ditemukan
    const product = await Product.findOrFail(params.id)

    // Middleware 'initialize_auth_middleware' sudah membuat
    // auth.isAuthenticated dan auth.user tersedia di view secara global.
    return view.render('pages/product_detail', {
      product, // Kirim satu objek produk
      userWishlist, // Tetap kirim wishlist spesifik user ini
      // isAuthenticated: auth.isAuthenticated, // Hapus ini
    })
  }
}
