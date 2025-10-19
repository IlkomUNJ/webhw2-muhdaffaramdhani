import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class CartController {
  /**
   * Display cart contents
   */
  public async index({ session, view }: HttpContext) {
    const cart = session.get('cart', [])
    if (!cart || cart.length === 0) {
      return view.render('pages/cart', { cartItems: [] })
    }

    const productIds = cart.map((item: any) => item.productId)
    const products = await Product.query().whereIn('id', productIds)

    const cartItems = cart.map((item: any) => {
      const product = products.find((p) => p.id === item.productId)
      return {
        ...product?.toJSON(),
        quantity: item.quantity,
      }
    })

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

  /**
   * Remove item from cart
   */
  public async removeFromCart({ params, session, response }: HttpContext) {
    const productId = params.productId
    let cart = session.get('cart', []) || []

    cart = cart.filter((item: any) => item.productId !== Number(productId))

    session.put('cart', cart)
    return response.redirect().back()
  }

  /**
   * Checkout cart items
   */
  public async checkout({ session, response }: HttpContext) {
    // Clear cart after successful checkout
    await session.forget('cart')

    session.flash('success', 'Order placed successfully')
    return response.redirect().toRoute('buyer.dashboard')
  }
}
