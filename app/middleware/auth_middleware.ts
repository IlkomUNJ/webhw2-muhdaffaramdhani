import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import type { Authenticators } from '@adonisjs/auth/types'

/**
 * Auth middleware is used to verify user login status. It redirects
 * unauthorized users to the login page.
 */
export default class AuthMiddleware {
  /**
   * The URL to redirect to, when authentication fails
   * PERBAIKAN: Mengarahkan ke halaman login, bukan register.
   */
  redirectTo = '/login'

  async handle(
    ctx: HttpContext,
    next: NextFn,
    options: {
      guards?: (keyof Authenticators)[]
    } = {}
  ) {
    /**
     * Store the URL the user was trying to access so that we can redirect them
     * back to that URL after login.
     */
    if (!ctx.auth.isAuthenticated) {
      // PERBAIKAN: Menggunakan 'intended_url' agar konsisten dengan AuthController
      ctx.session.put('intended_url', ctx.request.url())
      ctx.session.flash('info', 'Anda harus login terlebih dahulu untuk mengakses halaman ini.')
    }

    await ctx.auth.authenticateUsing(options.guards, {
      loginRoute: this.redirectTo,
    })
    return next()
  }
}
