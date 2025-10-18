import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import type { HttpContext } from '@adonisjs/core/http'

// Public routes
router
  .get('/', ({ view }: HttpContext) => {
    return view.render('pages/home')
  })
  .as('home')

router
  .get('/about', ({ view }: HttpContext) => {
    return view.render('pages/about')
  })
  .as('about')

// Products routes
router
  .get('/products', async (ctx: HttpContext) => {
    const { default: ProductController } = await import('#controllers/product_controller')
    const controller = new ProductController()
    return controller.index(ctx)
  })
  .as('products.index')

router
  .get('/products/:id', async (ctx: HttpContext) => {
    const { default: ProductController } = await import('#controllers/product_controller')
    const controller = new ProductController()
    return controller.show(ctx)
  })
  .as('products.show')

// Auth routes
router
  .get('/login', async (ctx: HttpContext) => {
    const { default: AuthController } = await import('#controllers/auth_controller')
    const controller = new AuthController()
    return controller.showLogin(ctx)
  })
  .as('auth.login')
  .use(middleware.guest())

router
  .post('/login', async (ctx: HttpContext) => {
    const { default: AuthController } = await import('#controllers/auth_controller')
    const controller = new AuthController()
    return controller.login(ctx)
  })
  .as('auth.login.submit')
  .use(middleware.guest())

router
  .get('/register', async (ctx: HttpContext) => {
    const { default: AuthController } = await import('#controllers/auth_controller')
    const controller = new AuthController()
    return controller.showRegister(ctx)
  })
  .as('auth.register')
  .use(middleware.guest())

router
  .post('/register', async (ctx: HttpContext) => {
    const { default: AuthController } = await import('#controllers/auth_controller')
    const controller = new AuthController()
    return controller.register(ctx)
  })
  .as('auth.register.submit')
  .use(middleware.guest())

router
  .post('/logout', async (ctx: HttpContext) => {
    const { default: AuthController } = await import('#controllers/auth_controller')
    const controller = new AuthController()
    return controller.logout(ctx)
  })
  .as('auth.logout')
  .use(middleware.auth())

// Protected routes
router
  .group(() => {
    // Buyer routes
    router
      .get('/buyer/dashboard', async (ctx: HttpContext) => {
        const { default: DashboardController } = await import('#controllers/dashboard_controller')
        const controller = new DashboardController()
        return controller.buyerDashboard(ctx)
      })
      .as('buyer.dashboard')

    router
      .get('/cart', async (ctx: HttpContext) => {
        const { default: CartController } = await import('#controllers/cart_controller')
        const controller = new CartController()
        return controller.index(ctx)
      })
      .as('cart.index')

    router
      .post('/cart/add/:productId', async (ctx: HttpContext) => {
        const { default: CartController } = await import('#controllers/cart_controller')
        const controller = new CartController()
        return controller.addToCart(ctx)
      })
      .as('cart.add')

    router
      .delete('/cart/remove/:productId', async (ctx: HttpContext) => {
        const { default: CartController } = await import('#controllers/cart_controller')
        const controller = new CartController()
        return controller.removeFromCart(ctx)
      })
      .as('cart.remove')

    router
      .post('/cart/checkout', async (ctx: HttpContext) => {
        const { default: CartController } = await import('#controllers/cart_controller')
        const controller = new CartController()
        return controller.checkout(ctx)
      })
      .as('cart.checkout')

    // Seller routes
    router
      .get('/seller/dashboard', async (ctx: HttpContext) => {
        const { default: DashboardController } = await import('#controllers/dashboard_controller')
        const controller = new DashboardController()
        return controller.sellerDashboard(ctx)
      })
      .as('seller.dashboard')

    router
      .get('/seller/products', async (ctx: HttpContext) => {
        const { default: ProductController } = await import('#controllers/product_controller')
        const controller = new ProductController()
        return controller.sellerProducts(ctx)
      })
      .as('seller.products')

    router
      .get('/seller/products/create', async (ctx: HttpContext) => {
        const { default: ProductController } = await import('#controllers/product_controller')
        const controller = new ProductController()
        return controller.create(ctx)
      })
      .as('seller.products.create')

    router
      .post('/seller/products', async (ctx: HttpContext) => {
        const { default: ProductController } = await import('#controllers/product_controller')
        const controller = new ProductController()
        return controller.store(ctx)
      })
      .as('seller.products.store')

    router
      .get('/seller/products/:id/edit', async (ctx: HttpContext) => {
        const { default: ProductController } = await import('#controllers/product_controller')
        const controller = new ProductController()
        return controller.edit(ctx)
      })
      .as('seller.products.edit')

    router
      .put('/seller/products/:id', async (ctx: HttpContext) => {
        const { default: ProductController } = await import('#controllers/product_controller')
        const controller = new ProductController()
        return controller.update(ctx)
      })
      .as('seller.products.update')

    router
      .delete('/seller/products/:id', async (ctx: HttpContext) => {
        const { default: ProductController } = await import('#controllers/product_controller')
        const controller = new ProductController()
        return controller.destroy(ctx)
      })
      .as('seller.products.destroy')
  })
  .use(middleware.auth())
