import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  public async buyerDashboard(ctx: HttpContext) {
    await ctx.auth.check()
    return ctx.view.render('pages/buyer/dashboard', { user: ctx.auth.user })
  }

  public async sellerDashboard(ctx: HttpContext) {
    await ctx.auth.check()
    return ctx.view.render('pages/seller/dashboard', { user: ctx.auth.user })
  }
}
