import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import type { Authenticators } from '@adonisjs/auth/types'

export default class AuthMiddleware {
  redirectTo = '/register'

  async handle(
    ctx: HttpContext,
    next: NextFn,
    options: {
      guards?: (keyof Authenticators)[]
    } = {}
  ) {
    if (!(await ctx.auth.check())) {
      // Store the intended URL before redirecting
      ctx.session.put('auth_redirect', ctx.request.url())
      ctx.session.flash('info', 'Anda harus membuat akun atau login terlebih dahulu.')
    }

    await ctx.auth.authenticateUsing(options.guards, {
      loginRoute: this.redirectTo,
    })

    return next()
  }
}
