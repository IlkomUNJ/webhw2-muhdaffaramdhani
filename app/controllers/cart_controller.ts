import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class CartController {
  /**
   * Display cart contents
   */
  public async index(ctx: HttpContext) {
    const cart = await ctx.session.get('cart', [])
    const productIds = cart.map((item: any) => item.productId)
    const products = await Product.query().whereIn('id', productIds)

    const cartItems = cart.map((item: any) => {
      const product = products.find((p) => p.id === item.productId)
      return {
        ...product?.toJSON(),
        quantity: item.quantity,
      }
    })

    return ctx.view.render('pages/cart', { cartItems })
  }

  /**
   * Add item to cart
   */
  public async addToCart(ctx: HttpContext) {
    const productId = ctx.params.productId
    const quantity = ctx.request.input('quantity', 1)

    const cart = await ctx.session.get('cart', [])
    const existingItem = cart.find((item: any) => item.productId === productId)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({ productId, quantity })
    }

    await ctx.session.put('cart', cart)
    return ctx.response.redirect().back()
  }

  /**
   * Remove item from cart
   */
  public async removeFromCart(ctx: HttpContext) {
    const productId = ctx.params.productId
    let cart = await ctx.session.get('cart', [])

    cart = cart.filter((item: any) => item.productId !== productId)

    await ctx.session.put('cart', cart)
    return ctx.response.redirect().back()
  }

  /**
   * Checkout cart items
   */
  public async checkout(ctx: HttpContext) {
    // TODO: Process order with cart items
    // const cart = await ctx.session.get('cart', [])

    // Clear cart after successful checkout
    await ctx.session.forget('cart')

    ctx.session.flash('success', 'Order placed successfully')
    return ctx.response.redirect().toRoute('buyer.dashboard')
  }
}
