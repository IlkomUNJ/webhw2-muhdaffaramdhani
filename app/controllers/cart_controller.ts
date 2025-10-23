import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class CartController {
  /**
   * Display cart contents
   */
  public async index({ session, view, auth }: HttpContext) {
    const cart = session.get('cart', []) || []
    let cartItems: any[] = []

    if (cart.length > 0) {
      const productIds = cart.map((item: { productId: number }) => item.productId)
      const products = await Product.query().whereIn('id', productIds)

      cartItems = cart
        .map((item: { productId: number; quantity: number }) => {
          const product = products.find((p) => p.id === item.productId)
          if (product) {
            return {
              ...product.toJSON(),
              quantity: item.quantity,
            }
          }
          return null
        })
        .filter((item: any) => item !== null)
    }

    // Kirim status autentikasi ke view keranjang
    return view.render('pages/cart', { cartItems, isAuthenticated: auth.isAuthenticated })
  }

  /**
   * Add a product to the cart (stores a new cart item).
   */
  public async store({ params, session, response, auth }: HttpContext) {
    // PERBAIKAN BUG 1: Tambahkan pengecekan autentikasi eksplisit di controller
    // Meskipun route sudah diproteksi middleware, ini sebagai lapisan tambahan
    if (!auth.isAuthenticated) {
      session.flash('error', 'Anda harus login untuk menambahkan item ke keranjang.')
      return response.redirect().toRoute('auth.login') // Redirect ke login jika belum
    }

    const productId = params.productId
    const quantity = 1 // Default to 1

    // Validasi apakah produk ada (opsional tapi bagus)
    const product = await Product.find(productId)
    if (!product) {
      session.flash('error', 'Produk tidak ditemukan.')
      return response.redirect().back()
    }

    const cart = session.get('cart', []) || []
    const existingItemIndex = cart.findIndex((item: any) => item.productId === Number(productId))

    if (existingItemIndex > -1) {
      // Jika item sudah ada, tambahkan quantity
      cart[existingItemIndex].quantity += quantity
    } else {
      // Jika item baru, tambahkan ke cart
      cart.push({ productId: Number(productId), quantity })
    }

    session.put('cart', cart)
    session.flash('success', 'Produk berhasil ditambahkan ke keranjang!')

    // Redirect back to the previous page
    return response.redirect().back()
  }

  // Metode lain (update, destroy) bisa ditambahkan di sini
}
