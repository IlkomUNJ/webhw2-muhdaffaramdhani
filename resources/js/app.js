// --- DATA FROM products-data.js ---
const allProducts = [
    {
        id: 1,
        name: 'Bolu Meranti',
        city: 'Medan',
        price: 95000,
        rating: 5,
        calories: 350,
        description: 'Bolu gulung lembut dengan isian melimpah khas Medan yang legendaris.',
        image: '/images/bolu-meranti.jpg'
    },
    {
        id: 2,
        name: 'Lapis Legit',
        city: 'Pontianak',
        price: 120000,
        rating: 5,
        calories: 420,
        description: 'Kue lapis berlapis-lapis harum rempah dan mentega khas Pontianak.',
        image: '/images/lapis-legit.jpg'
    },
    {
        id: 3,
        name: 'Wingko Babat',
        city: 'Semarang',
        price: 30000,
        rating: 4,
        calories: 250,
        description: 'Kue berbahan kelapa parut dan ketan yang manis gurih khas Semarang.',
        image: '/images/wingko-babat.jpg'
    },
    {
        id: 4,
        name: 'Bakpia Pathok',
        city: 'Yogyakarta',
        price: 45000,
        rating: 5,
        calories: 200,
        description: 'Kue isi kacang hijau manis gurih dengan kulit tipis lembut khas Jogja.',
        image: '/images/bakpia-pathok.jpg'
    },
    {
        id: 5,
        name: 'Lapis Surabaya',
        city: 'Surabaya',
        price: 110000,
        rating: 5,
        calories: 380,
        description: 'Kue tiga lapis lembut dengan perpaduan cokelat dan vanila khas Surabaya.',
        image: '/images/lapis-surabaya.jpg'
    },
    {
        id: 6,
        name: 'Kue Putu',
        city: 'Malang',
        price: 15000,
        rating: 4,
        calories: 180,
        description: 'Kue tradisional kukus isi gula merah dengan taburan kelapa parut segar.',
        image: '/images/kue-putu.jpg'
    },
    {
        id: 7,
        name: 'Dodol Garut',
        city: 'Garut',
        price: 40000,
        rating: 5,
        calories: 300,
        description: 'Manisan kenyal manis dari ketan dan gula merah khas Garut.',
        image: '/images/dodol-garut.jpg'
    },
    {
        id: 8,
        name: 'Kue Ape Betawi',
        city: 'Jakarta Pusat',
        price: 10000,
        rating: 4,
        calories: 150,
        description: 'Kue dengan bagian tengah empuk dan pinggiran renyah, khas Betawi.',
        image: '/images/kue-ape-betawi.jpg'
    },
    {
        id: 9,
        name: 'Es Pisang Ijo',
        city: 'Makassar',
        price: 20000,
        rating: 5,
        calories: 280,
        description: 'Pisang dibungkus adonan hijau dengan kuah santan manis segar khas Makassar.',
        image: '/images/es-pisang-ijo.jpg'
    },
    {
        id: 10,
        name: 'Bika Ambon',
        city: 'Ambon',
        price: 60000,
        rating: 5,
        calories: 320,
        description: 'Kue berserat legit dengan rasa manis gurih khas Ambon.',
        image: '/images/bika-ambon.jpg'
    },
    {
        id: 11,
        name: 'Klappertaart',
        city: 'Manado',
        price: 55000,
        rating: 5,
        calories: 340,
        description: 'Puding kelapa muda dengan rasa manis gurih khas Manado.',
        image: '/images/klappertaart.jpg'
    },
    {
        id: 12,
        name: 'Kue Barongko',
        city: 'Parepare',
        price: 18000,
        rating: 4,
        calories: 250,
        description: 'Pisang kukus dengan santan manis gurih khas Bugis.',
        image: '/images/kue-barongko.jpg'
    },
    {
        id: 13,
        name: 'Kue Delapan Jam',
        city: 'Palembang',
        price: 150000,
        rating: 5,
        calories: 500,
        description: 'Kue manis legit yang dimasak delapan jam khas Palembang.',
        image: '/images/kue-delapan-jam.jpg'
    },
    {
        id: 14,
        name: 'Es Selendang Mayang',
        city: 'Jakarta Selatan',
        price: 12000,
        rating: 4,
        calories: 200,
        description: 'Es dengan potongan kue berwarna-warni khas Betawi.',
        image: '/images/es-selendang-mayang.jpg'
    },
    {
        id: 15,
        name: 'Kue Bagea',
        city: 'Ternate',
        price: 25000,
        rating: 4,
        calories: 280,
        description: 'Kue keras manis berbahan sagu khas Maluku Utara.',
        image: '/images/kue-bagea.jpg'
    },
    {
        id: 16,
        name: 'Es Dawet Ayu',
        city: 'Banjarnegara',
        price: 15000,
        rating: 5,
        calories: 210,
        description: 'Minuman segar dengan cendol hijau khas Banjarnegara.',
        image: '/images/es-dawet-ayu.jpg'
    },
    {
        id: 17,
        name: 'Kue Sagon',
        city: 'Klaten',
        price: 18000,
        rating: 4,
        calories: 220,
        description: 'Kue kering berbahan kelapa parut khas Jawa Tengah.',
        image: '/images/kue-sagon.jpg'
    },
    {
        id: 18,
        name: 'Kue Lupis',
        city: 'Kediri',
        price: 10000,
        rating: 4,
        calories: 190,
        description: 'Ketan berbalut parutan kelapa dan gula merah cair khas Kediri.',
        image: '/images/kue-lupis.jpg'
    },
    {
        id: 19,
        name: 'Kue Rintak',
        city: 'Bangka',
        price: 30000,
        rating: 4,
        calories: 260,
        description: 'Kue kering dari sagu khas Bangka Belitung.',
        image: '/images/kue-rintak.jpg'
    },
    {
        id: 20,
        name: 'Kue Cucur',
        city: 'Cirebon',
        price: 12000,
        rating: 4,
        calories: 230,
        description: 'Kue goreng manis gurih khas Cirebon.',
        image: '/images/kue-cucur.jpg'
    },
    {
        id: 21,
        name: 'Es Cendol',
        city: 'Bandung',
        price: 15000,
        rating: 5,
        calories: 200,
        description: 'Es manis segar dengan cendol hijau khas Bandung.',
        image: '/images/es-cendol.jpg'
    },
    {
        id: 22,
        name: 'Kue Bugis',
        city: 'Banjarmasin',
        price: 12000,
        rating: 4,
        calories: 210,
        description: 'Kue ketan isi unti kelapa khas Kalimantan Selatan.',
        image: '/images/kue-bugis.jpg'
    },
    {
        id: 23,
        name: 'Kue Bangket Durian',
        city: 'Riau',
        price: 35000,
        rating: 4,
        calories: 240,
        description: 'Kue kering manis gurih dengan aroma durian khas Riau.',
        image: '/images/kue-bangket-durian.jpg'
    },
    {
        id: 24,
        name: 'Kue Karawo',
        city: 'Gorontalo',
        price: 40000,
        rating: 4,
        calories: 270,
        description: 'Kue tradisional dengan cita rasa manis khas Gorontalo.',
        image: '/images/kue-karawo.jpg'
    },
    {
        id: 25,
        name: 'Kue Gegicok',
        city: 'Bogor',
        price: 12000,
        rating: 4,
        calories: 180,
        description: 'Ketan dengan parutan kelapa manis gurih khas Bogor.',
        image: '/images/kue-gegicok.jpg'
    }
];

// --- LOGIC UTAMA (MAIN.JS + PRODUCTS.JS + CHECKOUT.JS) ---

window.sweetbox = {
    // --- AUTENTIKASI (SIMULASI) ---
    isLoggedIn: () => localStorage.getItem('sweetbox_is_logged_in') === 'true',
    isAdmin: () => localStorage.getItem('sweetbox_user_role') === 'admin',
    getUserName: () => localStorage.getItem('sweetbox_user_name') || 'Guest',

    login: function(name, role) {
        localStorage.setItem('sweetbox_is_logged_in', 'true');
        localStorage.setItem('sweetbox_user_role', role);
        localStorage.setItem('sweetbox_user_name', name);
        this.showNotification(`Selamat datang, ${name}!`);
        this.updateAuthUI();
    },

    loginAsAdmin: function() {
        this.login('Seller Admin', 'admin');
        window.location.href = '/admin'; // Redirect ke admin dashboard
    },

    logout: function() {
        localStorage.removeItem('sweetbox_is_logged_in');
        localStorage.removeItem('sweetbox_user_role');
        localStorage.removeItem('sweetbox_user_name');
        this.showNotification("Anda telah logout.");
        this.updateAuthUI();
        window.location.href = '/';
    },

    updateAuthUI: function() {
        const isLoggedIn = this.isLoggedIn();
        const isAdmin = this.isAdmin();
        const name = this.getUserName();

        // Elemen Desktop
        const loginBtn = document.getElementById('login-button');
        const registerBtn = document.getElementById('register-button');
        const logoutBtn = document.getElementById('logout-button');
        const userInfo = document.getElementById('user-info');
        const adminLinkD = document.getElementById('admin-link-desktop');

        // Elemen Mobile
        const loginBtnM = document.getElementById('login-button-mobile');
        const registerBtnM = document.getElementById('register-button-mobile');
        const logoutBtnM = document.getElementById('logout-button-mobile');
        const userInfoM = document.getElementById('user-info-mobile');
        const adminLinkM = document.getElementById('mobile-admin-link');
        
        const updateVisibility = (el, show) => {
            if (el) el.classList.toggle('hidden', !show);
        };

        if (isLoggedIn) {
            // Sembunyikan Login/Register, Tampilkan Logout/Info
            updateVisibility(loginBtn, false);
            updateVisibility(registerBtn, false);
            updateVisibility(logoutBtn, true);
            updateVisibility(userInfo, true);
            
            updateVisibility(loginBtnM, false);
            updateVisibility(registerBtnM, false);
            updateVisibility(logoutBtnM, true);
            updateVisibility(userInfoM, true);
            
            if (userInfo) userInfo.textContent = `Hai, ${name}`;
            if (userInfoM) userInfoM.textContent = `Hai, ${name}`;

            // Admin Link
            updateVisibility(adminLinkD, isAdmin);
            updateVisibility(adminLinkM, isAdmin);

            // Admin Dashboard Specific UI
            if (window.location.pathname === '/admin') {
                updateVisibility(document.getElementById('admin-not-authorized'), !isAdmin);
                updateVisibility(document.getElementById('admin-content'), isAdmin);
                if (isAdmin) this.renderAdminProducts();
            }

        } else {
            // Tampilkan Login/Register, Sembunyikan Logout/Info
            updateVisibility(loginBtn, true);
            updateVisibility(registerBtn, true);
            updateVisibility(logoutBtn, false);
            updateVisibility(userInfo, false);

            updateVisibility(loginBtnM, true);
            updateVisibility(registerBtnM, true);
            updateVisibility(logoutBtnM, false);
            updateVisibility(userInfoM, false);
            
            updateVisibility(adminLinkD, false);
            updateVisibility(adminLinkM, false);

            if (window.location.pathname === '/admin') {
                updateVisibility(document.getElementById('admin-not-authorized'), true);
                updateVisibility(document.getElementById('admin-content'), false);
            }
        }
    },
    
    // --- ADMIN SIMULASI ---
    renderAdminProducts: function() {
        const list = document.getElementById('admin-product-list');
        const users = JSON.parse(localStorage.getItem('sweetbox_users') || '[]');
        const totalUsersEl = document.getElementById('total-users');
        if(totalUsersEl) totalUsersEl.textContent = users.length.toString();

        if (!list) return;

        list.innerHTML = this.getAllProducts().map(p => `
            <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg border">
                <div class="flex items-center gap-3">
                    <img src="${p.image}" alt="${p.name}" class="w-10 h-10 object-cover rounded-md">
                    <div>
                        <h4 class="font-semibold text-gray-800">${p.name}</h4>
                        <p class="text-sm text-purple-600">Rp ${p.price.toLocaleString('id-ID')}</p>
                    </div>
                </div>
                <div class="space-x-2">
                    <button class="text-blue-500 hover:text-blue-700 text-sm font-medium" onclick="window.sweetbox.editProductAdmin(${p.id})">Edit</button>
                    <button class="text-red-500 hover:text-red-700 text-sm font-medium" onclick="window.sweetbox.deleteProductAdmin(${p.id})">Hapus</button>
                </div>
            </div>
        `).join('');
    },
    addProductAdmin: function() {
        this.showNotification("Simulasi: Tambah produk baru berhasil!");
        // Di aplikasi nyata, ini akan membuka modal/form tambah produk
    },
    editProductAdmin: function(id) {
        this.showNotification(`Simulasi: Edit produk ID ${id}.`);
        // Di aplikasi nyata, ini akan membuka modal/form edit
    },
    deleteProductAdmin: function(id) {
        this.showNotification(`Simulasi: Hapus produk ID ${id}.`);
        // Di aplikasi nyata, ini akan menghapus produk
    },


    // --- KERANJANG & WISHLIST ---
    getCart: () => JSON.parse(localStorage.getItem('sweetbox_cart')) || [],
    saveCart: function(cart) {
        // Tambahkan properti 'selected' ke item baru jika belum ada
        const currentCart = this.getCart();
        cart = cart.map(item => ({
            ...item,
            selected: currentCart.find(c => c.id === item.id)?.selected || true // Default selected true
        }));

        localStorage.setItem('sweetbox_cart', JSON.stringify(cart));
        this.updateCartBadge();
        if (window.location.pathname === '/checkout') {
            window.renderCartItems();
        }
    },
    addToCart: function(productId) {
        let cart = this.getCart();
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1, selected: true });
        }
        this.saveCart(cart);
        this.showNotification("Produk ditambahkan ke keranjang!");
    },
    removeFromCart: function(productId) {
        let cart = this.getCart().filter(item => item.id !== productId);
        this.saveCart(cart);
    },
    updateQuantity: function(productId, newQuantity) {
        let cart = this.getCart();
        const product = cart.find(item => item.id === productId);
        if (product) {
            if (newQuantity > 0) {
                product.quantity = newQuantity;
            } else {
                cart = cart.filter(item => item.id !== productId);
            }
        }
        this.saveCart(cart);
    },
    toggleSelectItem: function(productId, selected) {
        let cart = this.getCart();
        const product = cart.find(item => item.id === productId);
        if (product) {
            product.selected = selected;
        }
        this.saveCart(cart);
    },
    selectAllItems: function(selected) {
        let cart = this.getCart().map(item => ({ ...item, selected }));
        this.saveCart(cart);
    },
    deleteSelectedItems: function() {
        let cart = this.getCart().filter(item => !item.selected);
        this.saveCart(cart);
    },
    clearCart: function() {
        this.saveCart([]);
    },

    // --- Wishlist / Saved Items ---
    getWishlist: () => JSON.parse(localStorage.getItem('sweetbox_wishlist')) || [],
    saveWishlist: function(wishlist) {
        localStorage.setItem('sweetbox_wishlist', JSON.stringify(wishlist));
        this.updateLikeButtons();
        if (window.location.pathname === '/products') {
            window.applyFiltersAndSort(); // Re-render products to update wishlist filter
        }
        if (window.location.pathname === '/checkout') {
            window.renderCartItems(); // Re-render cart to update wishlist button
        }
    },
    toggleWishlist: function(productId) {
        let wishlist = this.getWishlist();
        if (wishlist.includes(productId)) {
            wishlist = wishlist.filter(id => id !== productId);
            this.showNotification("Produk dihapus dari wishlist.");
        } else {
            wishlist.push(productId);
            this.showNotification("Produk disimpan ke wishlist!");
        }
        this.saveWishlist(wishlist);
    },
    updateLikeButtons: function() {
        const wishlist = this.getWishlist();
        document.querySelectorAll('.like-btn').forEach(btn => {
            const productId = parseInt(btn.dataset.id, 10);
            const isLiked = wishlist.includes(productId);
            btn.classList.toggle('liked', isLiked);
            btn.innerHTML = `<i class="${isLiked ? 'fas' : 'far'} fa-heart text-xl"></i>`;
        });
    },
    
    // --- DATA PRODUK & UI UTILITY ---
    getProductDetails: (productId) => allProducts.find(p => p.id === productId),
    getAllProducts: () => allProducts,
    getOfficeLocation: () => ({ lat: -6.1999109, lon: 106.9361121 }), // Jl. Rambutan, Jakarta Timur
    
    updateCartBadge: function() {
        const cart = this.getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('.cart-badge').forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        });
    },
    showNotification: (message) => {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.textContent = message;
            notification.classList.add('show', 'opacity-100');
            setTimeout(() => notification.classList.remove('show', 'opacity-100'), 2500);
        }
    },
};


// --- FUNGSI HALAMAN HOME ---
window.createPopularMenu = () => {
    const products = window.sweetbox.getAllProducts();
    const popularProducts = products.filter(p => p.rating >= 4);
    const menuSliders = document.querySelectorAll('.menu-slider');
    
    if (menuSliders.length === 0) return;
    
    const sliderContentHTML = popularProducts.map(product => `
        <a href="/products?search=${encodeURIComponent(product.name)}" class="popular-card-link block w-72 flex-shrink-0">
            <div class="popular-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-48 object-cover">
                <div class="popular-card-info p-4">
                    <h4 class="font-semibold text-lg truncate text-gray-800">${product.name}</h4>
                    <p class="city text-gray-500 text-sm mb-2">${product.city}</p>
                    <div class="details flex justify-between items-center text-sm">
                       <span class="rating text-yellow-400">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</span>
                       <span class="calories text-gray-600">~${product.calories} Cal</span>
                    </div>
                </div>
            </div>
        </a>
    `).join('');

    menuSliders.forEach(slider => {
        slider.innerHTML = sliderContentHTML;
    });
};


// --- FUNGSI HALAMAN PRODUCTS ---
window.selectedRating = 0;
window.isWishlistFilterActive = false;

window.renderProducts = (productsToRender) => {
    const productGrid = document.getElementById('product-grid');
    const noResults = document.getElementById('no-results');
    if (!productGrid || !noResults) return;

    const wishlist = window.sweetbox.getWishlist();
    productGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    productsToRender.forEach(product => {
        const isLiked = wishlist.includes(product.id);
        const productCard = document.createElement('div');
        productCard.className = 'bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col';

        productCard.innerHTML = `
            <div class="relative">
                <button class="like-btn absolute top-3 right-3 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors z-10" data-id="${product.id}" aria-label="Save to wishlist">
                    <i class="${isLiked ? 'fas' : 'far'} fa-heart text-xl"></i>
                </button>
                <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-48 object-cover">
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h4 class="text-lg font-semibold text-gray-900 truncate">${product.name}</h4>
                <p class="text-sm text-gray-500">${product.city}</p>
                <p class="text-xs text-gray-500 mb-3 italic">~${product.calories} Kalori</p>
                <div class="mt-auto flex justify-between items-center">
                    <div>
                        <p class="text-lg font-bold text-purple-600">Rp ${product.price.toLocaleString('id-ID')}</p>
                        <div class="text-yellow-400 text-sm">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
                    </div>
                    <button class="add-to-cart-btn bg-purple-600 text-white w-10 h-10 rounded-full text-2xl font-bold flex items-center justify-center transition-transform hover:scale-110 hover:bg-purple-700" data-id="${product.id}" aria-label="Add to cart">+</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    window.sweetbox.updateLikeButtons();
};

window.applyFiltersAndSort = () => {
    const products = window.sweetbox.getAllProducts();
    const searchBox = document.getElementById('search-box');
    const cityFilter = document.getElementById('city-filter');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    const sortFilter = document.getElementById('sort-filter');
    const wishlistFilterBtn = document.getElementById('wishlist-filter-btn');

    let processedProducts = [...products];
    const searchTerm = searchBox ? searchBox.value.toLowerCase() : '';
    const selectedCity = cityFilter ? cityFilter.value : 'all';
    const min = minPrice ? (parseFloat(minPrice.value) || 0) : 0;
    const max = maxPrice ? (parseFloat(maxPrice.value) || Infinity) : Infinity;
    const sortValue = sortFilter ? sortFilter.value : 'default';

    // Filter Wishlist (New)
    if (window.isWishlistFilterActive) {
        const wishlistIds = window.sweetbox.getWishlist();
        processedProducts = processedProducts.filter(p => wishlistIds.includes(p.id));
        if (wishlistFilterBtn) {
            wishlistFilterBtn.classList.add('bg-purple-600', 'text-white', 'border-purple-600');
            wishlistFilterBtn.classList.remove('bg-purple-50', 'text-gray-700', 'border-gray-300');
            wishlistFilterBtn.querySelector('i').classList.replace('far', 'fas');
        }
    } else {
         if (wishlistFilterBtn) {
            wishlistFilterBtn.classList.remove('bg-purple-600', 'text-white', 'border-purple-600');
            wishlistFilterBtn.classList.add('bg-white', 'text-gray-700', 'border-gray-300');
            wishlistFilterBtn.querySelector('i').classList.replace('fas', 'far');
        }
    }

    if (searchTerm) {
        processedProducts = processedProducts.filter(p => p.name.toLowerCase().includes(searchTerm) || p.city.toLowerCase().includes(searchTerm));
    }
    if (selectedCity && selectedCity !== 'all') {
        processedProducts = processedProducts.filter(p => p.city === selectedCity);
    }
    processedProducts = processedProducts.filter(p => p.price >= min && p.price <= max);
    if (window.selectedRating > 0) {
         processedProducts = processedProducts.filter(p => p.rating >= window.selectedRating);
    }

    switch (sortValue) {
        case 'price-asc':
            processedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            processedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'calories-asc':
            processedProducts.sort((a, b) => a.calories - b.calories);
            break;
        case 'calories-desc':
            processedProducts.sort((a, b) => b.calories - a.calories);
            break;
        case 'rating-desc':
            processedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'default':
            // Sort by ID to maintain initial order
            processedProducts.sort((a, b) => a.id - b.id);
            break;
    }

    window.renderProducts(processedProducts);
};

window.populateCityFilter = (products) => {
    const cityFilter = document.getElementById('city-filter');
    if (!cityFilter) return;
    const cities = [...new Set(products.map(p => p.city))];
    cities.sort().forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
    if (typeof jQuery !== 'undefined' && jQuery.fn.select2) {
        $('.city-select').select2({
            placeholder: "Pilih Kota",
            allowClear: true
        });
    }
};

window.handleInitialSearch = (searchBox) => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    if (searchTerm && searchBox) {
        searchBox.value = decodeURIComponent(searchTerm);
    }
};


// --- FUNGSI HALAMAN CHECKOUT ---
window.currentSubtotal = 0;
window.userLocation = null;

window.renderCartItems = () => {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const emptyCartMessage = document.getElementById('empty-cart-message-centered');
    const orderSummary = document.getElementById('order-summary');
    const suggestedContainer = document.getElementById('suggested-products');
    const cartHeader = document.getElementById('cart-header');
    
    if (!cartItemsContainer || !emptyCartMessage || !orderSummary || !suggestedContainer || !cartHeader) return;

    let cart = window.sweetbox.getCart();
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessage.classList.remove('hidden');
        orderSummary.classList.add('hidden');
        suggestedContainer.classList.add('hidden');
        cartHeader.classList.add('hidden');
        return;
    }

    emptyCartMessage.classList.add('hidden');
    orderSummary.classList.remove('hidden');
    suggestedContainer.classList.remove('hidden');
    cartHeader.classList.remove('hidden');

    let subtotal = 0;
    let selectedItemCount = 0;

    cart.forEach(item => {
        const product = window.sweetbox.getProductDetails(item.id);
        const isLiked = window.sweetbox.getWishlist().includes(item.id);
        
        if (product) {
            subtotal += product.price * item.quantity;
            if (item.selected) selectedItemCount++;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4 transition-all duration-200 hover:shadow-md';
            cartItemElement.innerHTML = `
                <input type="checkbox" class="item-select-checkbox h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" data-id="${item.id}" ${item.selected ? 'checked' : ''}>
                
                <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-20 h-20 object-cover rounded-lg flex-shrink-0">
                
                <div class="flex-grow min-w-0">
                    <h4 class="font-semibold text-gray-800 truncate">${product.name}</h4>
                    <p class="text-purple-600 font-bold">Rp ${(product.price * item.quantity).toLocaleString('id-ID')}</p>
                    <p class="text-sm text-gray-500">@ Rp ${product.price.toLocaleString('id-ID')}</p>
                </div>
                
                <div class="flex flex-col items-end space-y-2 flex-shrink-0">
                    <div class="flex items-center space-x-3">
                        <button class="like-btn-cart text-lg ${isLiked ? 'text-red-500' : 'text-gray-400'} hover:text-red-600 transition-colors" data-id="${item.id}" aria-label="Toggle wishlist">
                            <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                        <button class="remove-item-btn-cart text-red-500 hover:text-red-700 text-xl" data-id="${item.id}" aria-label="Remove item">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                    <div class="flex items-center border border-gray-300 rounded-full">
                        <button class="quantity-decrease w-8 h-8 text-lg text-gray-600 hover:bg-gray-100 rounded-l-full" data-id="${item.id}">-</button>
                        <span class="px-3 text-gray-800">${item.quantity}</span>
                        <button class="quantity-increase w-8 h-8 text-lg text-gray-600 hover:bg-gray-100 rounded-r-full" data-id="${item.id}">+</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        }
    });

    window.currentSubtotal = subtotal;
    window.updateSummary();
    window.renderSuggestedProducts();

    // Update Select All Checkbox/Count/Delete Button
    const selectAllCheckbox = document.getElementById('select-all-items');
    const deleteSelectedBtn = document.getElementById('delete-selected-btn');
    const selectAllCount = document.getElementById('select-all-count');

    if (selectAllCheckbox) selectAllCheckbox.checked = cart.length > 0 && selectedItemCount === cart.length;
    if (deleteSelectedBtn) deleteSelectedBtn.disabled = selectedItemCount === 0;
    if (selectAllCount) selectAllCount.textContent = `(${selectedItemCount}/${cart.length})`;
};

window.updateSummary = () => {
    const deliveryOptionEl = document.querySelector('input[name="delivery"]:checked');
    const distanceInfo = document.getElementById('distance-info');
    if (!deliveryOptionEl || !distanceInfo) return;
    
    const deliveryOption = deliveryOptionEl.value;
    let shippingCost = 0;
    const officeLocation = window.sweetbox.getOfficeLocation();
    
    if (deliveryOption === 'delivery' && window.userLocation) {
        const distance = window.calculateDistance(window.userLocation.lat, window.userLocation.lon, officeLocation.lat, officeLocation.lon);
        shippingCost = Math.min(Math.max(10000, Math.round(distance) * 2500), 50000); // Rp 2.500/km, min 10k, max 50k
        distanceInfo.textContent = `Jarak: ${distance.toFixed(2)} km`;
    } else if (deliveryOption === 'pickup') {
        distanceInfo.textContent = `Ambil di toko.`;
        shippingCost = 0;
    } else {
        distanceInfo.textContent = `Mohon aktifkan lokasi untuk menghitung biaya.`;
        shippingCost = 15000; // Default shipping cost
    }

    const cart = window.sweetbox.getCart();
    // Hitung subtotal hanya untuk item yang selected
    const selectedSubtotal = cart.filter(item => item.selected).reduce((sum, item) => {
        const product = window.sweetbox.getProductDetails(item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const tax = selectedSubtotal * 0.11;
    const total = selectedSubtotal + shippingCost + tax;
    
    document.getElementById('summary-subtotal').textContent = `Rp ${selectedSubtotal.toLocaleString('id-ID')}`;
    document.getElementById('summary-shipping').textContent = `Rp ${shippingCost.toLocaleString('id-ID')}`;
    document.getElementById('summary-tax').textContent = `Rp ${tax.toLocaleString('id-ID')}`;
    document.getElementById('summary-total').textContent = `Rp ${total.toLocaleString('id-ID')}`;
};

window.renderSuggestedProducts = () => {
    const suggestedGrid = document.getElementById('suggested-grid');
    if(!suggestedGrid) return;
    const all = window.sweetbox.getAllProducts();
    const cartIds = window.sweetbox.getCart().map(i => i.id);
    const suggestions = all.filter(p => !cartIds.includes(p.id)).sort(() => 0.5 - Math.random()).slice(0, 4);
    
    suggestedGrid.innerHTML = suggestions.map(p => `
        <a href="#" class="add-to-cart-btn text-center block" data-id="${p.id}">
            <img src="${p.image}" alt="${p.name}" loading="lazy" class="w-full h-24 object-cover rounded-md mb-2 shadow-sm border border-gray-100">
            <h5 class="text-sm font-medium text-gray-700">${p.name}</h5>
        </a>
    `).join('');
};

window.calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Auth Forms ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            // Simple validation simulation
            if (email.endsWith('@admin.com')) {
                window.sweetbox.login('Seller Admin', 'admin');
                window.location.href = '/admin';
            } else {
                 window.sweetbox.login('Buyer User', 'buyer');
                 window.location.href = '/';
            }
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            // In a real app, you would register the user here.
            // For simulation, we log them in directly as a new buyer.
            window.sweetbox.login(name, 'buyer');
            window.location.href = '/';
        });
    }
    
    // Navigasi Mobile
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open');
        });
    }

    // Event listener global untuk Add to Cart & Wishlist (Product/Suggest)
    document.body.addEventListener('click', (e) => {
        const addToCartBtn = e.target.closest('.add-to-cart-btn');
        const likeBtn = e.target.closest('.like-btn'); // for products page
        
        if (addToCartBtn) {
            e.preventDefault();
            const productId = parseInt(addToCartBtn.dataset.id, 10);
            window.sweetbox.addToCart(productId);
        }
        
        if (likeBtn) {
            const productId = parseInt(likeBtn.dataset.id, 10);
            window.sweetbox.toggleWishlist(productId);
        }
    });
    
    window.sweetbox.updateAuthUI();
    window.sweetbox.updateCartBadge();
    
    // --- HOME PAGE INIT ---
    if (document.getElementById('popular-menu')) {
        window.createPopularMenu();
    }
    
    // --- PRODUCTS PAGE INIT ---
    if (document.getElementById('product-page')) {
        const products = window.sweetbox.getAllProducts();
        const searchBox = document.getElementById('search-box');
        const minPrice = document.getElementById('min-price');
        const maxPrice = document.getElementById('max-price');
        const sortFilter = document.getElementById('sort-filter');
        const cityFilter = document.getElementById('city-filter');
        const ratingFilter = document.getElementById('rating-filter');
        const wishlistFilterBtn = document.getElementById('wishlist-filter-btn');
        
        window.populateCityFilter(products);
        window.handleInitialSearch(searchBox);

        // Event Listeners for Products Page
        [searchBox, minPrice, maxPrice].forEach(el => el && el.addEventListener('input', window.applyFiltersAndSort));
        [sortFilter, cityFilter].forEach(el => el && el.addEventListener('change', window.applyFiltersAndSort));

        if (cityFilter && typeof jQuery !== 'undefined' && jQuery.fn.select2) {
            $(cityFilter).on('change', window.applyFiltersAndSort);
        }

        if (ratingFilter) {
            ratingFilter.addEventListener('click', (e) => {
                if (e.target.tagName === 'SPAN') {
                    const rating = parseInt(e.target.dataset.rating, 10);
                    window.selectedRating = (window.selectedRating === rating) ? 0 : rating;
                    
                    ratingFilter.querySelectorAll('span').forEach(star => {
                        const starRating = parseInt(star.dataset.rating, 10);
                        star.classList.toggle('text-yellow-400', starRating <= window.selectedRating);
                        star.classList.toggle('text-gray-300', starRating > window.selectedRating);
                    });
                    window.applyFiltersAndSort();
                }
            });
        }
        
        if (wishlistFilterBtn) {
            wishlistFilterBtn.addEventListener('click', () => {
                window.isWishlistFilterActive = !window.isWishlistFilterActive;
                window.applyFiltersAndSort();
            });
        }
        
        window.applyFiltersAndSort();
    }
    
    // --- CHECKOUT PAGE INIT ---
    if (document.getElementById('checkout-page')) {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const modalConfirmBtn = document.getElementById('modal-confirm-btn');
        const modalCancelBtn = document.getElementById('modal-cancel-btn');
        const useGpsBtn = document.getElementById('use-gps-btn');
        const addressInput = document.getElementById('address');
        const checkoutForm = document.getElementById('checkout-form');
        const successModal = document.getElementById('order-success-modal');
        const closeReceiptBtn = document.getElementById('close-receipt-btn');
        const downloadReceiptBtn = document.getElementById('download-receipt-btn');
        const selectAllCheckbox = document.getElementById('select-all-items');
        const deleteSelectedBtn = document.getElementById('delete-selected-btn');

        let itemToRemoveId = null; // Used for single item delete modal

        // Cart Item Controls
        if (cartItemsContainer) {
            cartItemsContainer.addEventListener('click', (e) => {
                const target = e.target.closest('button, input');
                if (!target) return;
                
                const id = parseInt(target.dataset.id, 10);
                const item = window.sweetbox.getCart().find(i => i.id === id);

                if (target.classList.contains('quantity-increase')) {
                    if(item) window.sweetbox.updateQuantity(id, item.quantity + 1);
                }
                if (target.classList.contains('quantity-decrease')) {
                    if(item) window.sweetbox.updateQuantity(id, item.quantity - 1);
                }
                if (target.classList.contains('remove-item-btn-cart')) {
                    itemToRemoveId = id; // Set ID for modal
                    document.getElementById('confirm-modal').classList.remove('hidden');
                }
                if (target.classList.contains('like-btn-cart')) {
                    if(item) window.sweetbox.toggleWishlist(id);
                }
                if (target.classList.contains('item-select-checkbox')) {
                    window.sweetbox.toggleSelectItem(id, target.checked);
                    // No need to call renderCartItems, saveCart handles UI update
                    window.updateSummary(); // Update summary based on selected items
                    
                    const cart = window.sweetbox.getCart();
                    const selectedCount = cart.filter(i => i.selected).length;
                    document.getElementById('select-all-items').checked = selectedCount === cart.length && cart.length > 0;
                    document.getElementById('select-all-count').textContent = `(${selectedCount}/${cart.length})`;
                    document.getElementById('delete-selected-btn').disabled = selectedCount === 0;
                }
            });
        }
        
        // Select All / Delete Selected Logic
        if (selectAllCheckbox) {
            selectAllCheckbox.addEventListener('change', (e) => {
                window.sweetbox.selectAllItems(e.target.checked);
            });
        }

        if (deleteSelectedBtn) {
            deleteSelectedBtn.addEventListener('click', () => {
                // Konfirmasi Hapus Semua
                const cart = window.sweetbox.getCart();
                const selectedCount = cart.filter(i => i.selected).length;
                if (selectedCount > 0) {
                     // Menggunakan modal yang sudah ada untuk konfirmasi
                    document.getElementById('modal-message').textContent = `Apakah Anda yakin ingin menghapus ${selectedCount} item yang dipilih?`;
                    itemToRemoveId = 'SELECTED'; // Flag khusus untuk menghapus yang terpilih
                    document.getElementById('confirm-modal').classList.remove('hidden');
                }
            });
        }

        // Modal Confirmation
        if(modalConfirmBtn) modalConfirmBtn.addEventListener('click', () => {
            if (itemToRemoveId === 'SELECTED') {
                 window.sweetbox.deleteSelectedItems();
            } else if (itemToRemoveId !== null) {
                window.sweetbox.removeFromCart(itemToRemoveId);
            }
            document.getElementById('confirm-modal').classList.add('hidden');
            itemToRemoveId = null;
            document.getElementById('modal-message').textContent = 'Apakah Anda yakin ingin menghapus item ini?'; // Reset message
        });

        if(modalCancelBtn) modalCancelBtn.addEventListener('click', () => {
             document.getElementById('confirm-modal').classList.add('hidden');
             itemToRemoveId = null;
             document.getElementById('modal-message').textContent = 'Apakah Anda yakin ingin menghapus item ini?'; // Reset message
        });
        
        // Delivery Options & GPS
        document.querySelectorAll('input[name="delivery"]').forEach(radio => {
            radio.addEventListener('change', window.updateSummary);
        });

        if(useGpsBtn) useGpsBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    window.userLocation = { lat: position.coords.latitude, lon: position.coords.longitude };
                    addressInput.value = `Lat: ${window.userLocation.lat.toFixed(5)}, Lon: ${window.userLocation.lon.toFixed(5)}`;
                    window.updateSummary();
                }, () => {
                    window.sweetbox.showNotification('Tidak bisa mendapatkan lokasi. Mohon izinkan akses lokasi.', 'error');
                });
            } else {
                window.sweetbox.showNotification("Geolocation tidak didukung oleh browser ini.", 'error');
            }
        });

        // Checkout Form Submit (using only selected items in simulation)
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const selectedCart = window.sweetbox.getCart().filter(i => i.selected);
                if (selectedCart.length === 0) {
                    window.sweetbox.showNotification('Pilih setidaknya satu item di keranjang untuk dipesan!', 'error');
                    return;
                }
                
                // Simulasikan pembuatan receipt untuk item yang dipilih
                const receiptItems = selectedCart.map(item => {
                    const product = window.sweetbox.getProductDetails(item.id);
                    return { id: item.id, quantity: item.quantity, name: product.name, price: product.price };
                });
                
                // Hapus item yang dipilih dari keranjang
                window.sweetbox.deleteSelectedItems(); 
                
                // Tampilkan modal sukses
                window.showSuccessModal(receiptItems);
            });
        }
        
        window.showSuccessModal = (items) => {
            document.getElementById('receipt-id').textContent = `SWB-${Date.now()}`;
            document.getElementById('receipt-date').textContent = new Date().toLocaleDateString('id-ID');

            const itemsHtml = items.map(item => {
                return `<div class="flex justify-between"><span>${item.quantity}x ${item.name}</span><span>Rp ${(item.quantity * item.price).toLocaleString('id-ID')}</span></div>`;
            }).join('');
            document.getElementById('receipt-items').innerHTML = itemsHtml;
            
            // Re-run summary calculation for the receipt since we just deleted the items
            const finalSubtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const deliveryOptionEl = document.querySelector('input[name="delivery"]:checked');
            const deliveryOption = deliveryOptionEl ? deliveryOptionEl.value : 'delivery';

            let shippingCost = 15000;
            if (deliveryOption === 'pickup') shippingCost = 0;
            
            const tax = finalSubtotal * 0.11;
            const total = finalSubtotal + shippingCost + tax;
            
            document.getElementById('receipt-summary').innerHTML = `
                <p class="flex justify-between"><span>Subtotal</span> <span>Rp ${finalSubtotal.toLocaleString('id-ID')}</span></p>
                <p class="flex justify-between"><span>Biaya Pengiriman</span> <span>Rp ${shippingCost.toLocaleString('id-ID')}</span></p>
                <p class="flex justify-between"><span>Pajak (11%)</span> <span>Rp ${tax.toLocaleString('id-ID')}</span></p>
                <hr class="my-2 border-dashed">
                <p class="summary-total flex justify-between font-bold text-lg"><span>Total</span> <span>Rp ${total.toLocaleString('id-ID')}</span></p>
            `;

            if(successModal) successModal.classList.remove('hidden');
        }

        if(closeReceiptBtn) closeReceiptBtn.addEventListener('click', () => {
            if(successModal) successModal.classList.add('hidden');
            window.renderCartItems();
        });

        if(downloadReceiptBtn) downloadReceiptBtn.addEventListener('click', () => {
            const receiptContent = document.getElementById('receipt-content');
            if(!receiptContent) return;

            const options = {
                backgroundColor: 'white',
                onclone: (document) => {
                    const content = document.getElementById('receipt-content');
                    if (content) {
                        content.style.padding = '30px';
                    }
                }
            };

            html2canvas(receiptContent, options).then(canvas => {
                const link = document.createElement('a');
                link.download = `receipt-sweetbox-${document.getElementById('receipt-id').textContent}.png`;
                link.href = canvas.toDataURL();
                link.click();
            });
        });

        window.renderCartItems();
    }
});
