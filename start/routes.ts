import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

// Lazy load controllers
const AuthController = () => import('#controllers/auth_controller')
const CartController = () => import('#controllers/cart_controller')
const DashboardController = () => import('#controllers/dashboard_controller')
const ProductController = () => import('#controllers/product_controller')
const ViewController = () => import('#controllers/view_controller')
const WishlistController = () => import('#controllers/wishlist_controller')

// --- PUBLIC ROUTES ---
router.get('/', [ViewController, 'home']).as('home')
router.get('/about', [ViewController, 'about']).as('about')
router.get('/products', [ProductController, 'index']).as('products.index')
// PERBAIKAN: Rute detail produk sekarang berfungsi
router.get('/products/:id', [ProductController, 'show']).as('products.show')

// --- AUTH ROUTES (For guests only) ---
router
  .group(() => {
    router.get('/login', [AuthController, 'showLogin']).as('auth.login')
    router.post('/login', [AuthController, 'login']).as('auth.login.submit')
    router.get('/register', [AuthController, 'showRegister']).as('auth.register')
    router.post('/register', [AuthController, 'register']).as('auth.register.submit')
  })
  .use(middleware.guest())

// --- PROTECTED ROUTES (Must be logged in) ---
router
  .group(() => {
    // Logout
    router.post('/logout', [AuthController, 'logout']).as('auth.logout')

    // Cart
    router.get('/cart', [CartController, 'index']).as('cart.index')
    router.get('/cart/add/:productId', [CartController, 'store']).as('cart.add')

    // PERBAIKAN: Rute untuk wishlist
    router.post('/wishlist/toggle/:productId', [WishlistController, 'toggle']).as('wishlist.toggle')

    // Buyer Dashboard
    router.get('/buyer/dashboard', [DashboardController, 'buyerDashboard']).as('buyer.dashboard')

    // Seller Routes
    router
      .group(() => {
        router.get('/dashboard', [DashboardController, 'sellerDashboard']).as('seller.dashboard')
        router.get('/wishlists', [DashboardController, 'showWishlists']).as('seller.wishlists')
      })
      .prefix('/seller')
  })
  .use(middleware.auth())
