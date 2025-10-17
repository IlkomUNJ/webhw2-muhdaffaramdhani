import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  public async buyer({ view, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    return view.render('pages/buyer/dashboard', { user })
  }

  public async seller({ view, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    return view.render('pages/seller/dashboard', { user })
  }
}
