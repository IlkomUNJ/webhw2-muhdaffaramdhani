import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class GuestMiddleware {
  async handle({ auth, response }: HttpContext, next: NextFn) {
    if (auth.isAuthenticated) {
      if (auth.user?.role === 'seller') {
        return response.redirect().toRoute('seller.dashboard')
      }
      return response.redirect().toRoute('buyer.dashboard')
    }
    return next()
  }
}
