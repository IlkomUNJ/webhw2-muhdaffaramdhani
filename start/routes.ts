import router from '@adonisjs/core/services/router'
const PagesController = () => import('#controllers/pages_controller')

// Rute untuk halaman-halaman utama
router.get('/', [PagesController, 'home']).as('home')
router.get('/products', [PagesController, 'products']).as('products')
router.get('/about', [PagesController, 'about']).as('about')
router.get('/checkout', [PagesController, 'checkout']).as('checkout')
