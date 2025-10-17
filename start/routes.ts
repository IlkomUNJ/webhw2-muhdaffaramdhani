import router from '@adonisjs/core/services/router'
const ViewController = () => import('#controllers/view_controller') // Menggunakan ViewController baru

// Rute untuk halaman-halaman umum
router.get('/', [ViewController, 'home']).as('home')
router.get('/products', [ViewController, 'products']).as('products')
router.get('/about', [ViewController, 'about']).as('about')
router.get('/checkout', [ViewController, 'checkout']).as('checkout')

// Rute untuk Authentication (Simulasi)
router.get('/login', [ViewController, 'login']).as('login')
router.get('/register', [ViewController, 'register']).as('register')

// Rute untuk Admin (Simulasi)
router.get('/admin', [ViewController, 'admin']).as('admin')
