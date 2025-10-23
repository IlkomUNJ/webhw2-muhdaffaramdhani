import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class CartController {
  /**
   * Display cart contents
   */
  public async index({ session, view }: HttpContext) {
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

    return view.render('pages/cart', { cartItems })
  }

  /**
   * Add a product to the cart (stores a new cart item).
   */
  public async store({ params, session, response }: HttpContext) {
    const productId = params.productId
    const quantity = 1 // Default to 1 for a GET request

    const cart = session.get('cart', []) || []
    const existingItem = cart.find((item: any) => item.productId === Number(productId))

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({ productId: Number(productId), quantity })
    }

    session.put('cart', cart)
    session.flash('success', 'Produk berhasil ditambahkan ke keranjang!')

    // Redirect back to the previous page
    return response.redirect().back()
  }
}
