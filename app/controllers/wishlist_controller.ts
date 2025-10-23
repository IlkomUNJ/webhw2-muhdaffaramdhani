import type { HttpContext } from '@adonisjs/core/http'
import Wishlist from '#models/wishlist'

export default class WishlistController {
  /**
   * Add or remove a product from the user's wishlist.
   */
  public async toggle({ auth, params, response }: HttpContext) {
    await auth.check()
    if (!auth.user) {
      return response.unauthorized({ status: 'error', message: 'Authentication required' })
    }

    const userId = auth.user.id
    const productId = params.productId

    const wishlistItem = await Wishlist.query()
      .where('user_id', userId)
      .andWhere('product_id', productId)
      .first()

    if (wishlistItem) {
      // Item exists, so remove it
      await wishlistItem.delete()
      return response.json({ status: 'success', action: 'removed' })
    } else {
      // Item does not exist, so add it
      await Wishlist.create({ userId, productId })
      return response.json({ status: 'success', action: 'added' })
    }
  }
}
