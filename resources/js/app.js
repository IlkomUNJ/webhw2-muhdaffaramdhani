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

// --- LOGIC FROM main.js ---
window.sweetbox = {
    getCart: () => JSON.parse(localStorage.getItem('sweetbox_cart')) || [],
    saveCart: function(cart) {
        localStorage.setItem('sweetbox_cart', JSON.stringify(cart));
        this.updateCartBadge();
    },
    addToCart: function(productId) {
        let cart = this.getCart();
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        this.saveCart(cart);
        this.showNotification("Produk ditambahkan ke keranjang!");
    },
    removeFromCart: function(productId) {
        let cart = this.getCart().filter(item => item.id !== productId);
        this.saveCart(cart);
        if (typeof window.renderCartItems === 'function') {
            window.renderCartItems();
        }
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
        if (typeof window.renderCartItems === 'function') {
            window.renderCartItems();
        }
    },
    clearCart: function() {
        this.saveCart([]);
    },
    getWishlist: () => JSON.parse(localStorage.getItem('sweetbox_wishlist')) || [],
    saveWishlist: function(wishlist) {
        localStorage.setItem('sweetbox_wishlist', JSON.stringify(wishlist));
        this.updateLikeButtons();
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
            if (wishlist.includes(productId)) {
                btn.classList.add('liked');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
            } else {
                btn.classList.remove('liked');
                btn.innerHTML = '<i class="far fa-heart"></i>';
            }
        });
    },
    getProductDetails: (productId) => allProducts.find(p => p.id === productId),
    getAllProducts: () => allProducts,
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
    getOfficeLocation: () => ({ lat: -6.1999109, lon: 106.9361121 })
};


document.addEventListener('DOMContentLoaded', () => {

    // --- MAIN.JS LOGIC ---
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open');
        });
    }

    document.body.addEventListener('click', (e) => {
        const addToCartBtn = e.target.closest('.add-to-cart-btn');
        const likeBtn = e.target.closest('.like-btn');

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

    window.sweetbox.updateCartBadge();

    // --- HOME.JS LOGIC ---
    if (document.getElementById('popular-menu')) {
        const products = window.sweetbox.getAllProducts();
        const popularProducts = products.filter(p => p.rating >= 4);
        const menuSliders = document.querySelectorAll('.menu-slider');

        const createPopularMenu = () => {
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
        createPopularMenu();
    }

    // --- PRODUCTS.JS LOGIC ---
    if (document.getElementById('product-page')) {
        const products = window.sweetbox.getAllProducts();

        const productGrid = document.getElementById('product-grid');
        const cityFilter = document.getElementById('city-filter');
        const searchBox = document.getElementById('search-box');
        const minPrice = document.getElementById('min-price');
        const maxPrice = document.getElementById('max-price');
        const ratingFilter = document.getElementById('rating-filter');
        const sortFilter = document.getElementById('sort-filter');
        const noResults = document.getElementById('no-results');

        let selectedRating = 0;

        const renderProducts = (productsToRender) => {
            if (!productGrid) return;

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
                productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col';

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

        const populateCityFilter = () => {
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

        const applyFiltersAndSort = () => {
            let processedProducts = [...products];
            const searchTerm = searchBox.value.toLowerCase();
            const selectedCity = cityFilter.value;
            const min = parseFloat(minPrice.value) || 0;
            const max = parseFloat(maxPrice.value) || Infinity;
            const sortValue = sortFilter.value;

            if (searchTerm) {
                processedProducts = processedProducts.filter(p => p.name.toLowerCase().includes(searchTerm) || p.city.toLowerCase().includes(searchTerm));
            }
            if (selectedCity && selectedCity !== 'all') {
                processedProducts = processedProducts.filter(p => p.city === selectedCity);
            }
            processedProducts = processedProducts.filter(p => p.price >= min && p.price <= max);
            if (selectedRating > 0) {
                 processedProducts = processedProducts.filter(p => p.rating >= selectedRating);
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
                    processedProducts.sort((a, b) => b.calories - b.calories);
                    break;
                case 'rating-desc':
                    processedProducts.sort((a, b) => b.rating - b.rating);
                    break;
            }

            renderProducts(processedProducts);
        };

        const handleInitialSearch = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const searchTerm = urlParams.get('search');
            if (searchTerm && searchBox) {
                searchBox.value = decodeURIComponent(searchTerm);
            }
        };

        if(searchBox) searchBox.addEventListener('input', applyFiltersAndSort);
        if(minPrice) minPrice.addEventListener('input', applyFiltersAndSort);
        if(maxPrice) maxPrice.addEventListener('input', applyFiltersAndSort);
        if(sortFilter) sortFilter.addEventListener('change', applyFiltersAndSort);

        if (cityFilter && typeof jQuery !== 'undefined' && jQuery.fn.select2) {
            $(cityFilter).on('change', applyFiltersAndSort);
        } else if (cityFilter) {
            cityFilter.addEventListener('change', applyFiltersAndSort);
        }

        if (ratingFilter) {
            ratingFilter.addEventListener('click', (e) => {
                if (e.target.tagName === 'SPAN') {
                    const rating = parseInt(e.target.dataset.rating, 10);
                    selectedRating = (selectedRating === rating) ? 0 : rating;

                    ratingFilter.querySelectorAll('span').forEach(star => {
                        const starRating = parseInt(star.dataset.rating, 10);
                        if (starRating <= selectedRating) {
                            star.classList.add('text-yellow-400');
                            star.classList.remove('text-gray-300');
                        } else {
                            star.classList.remove('text-yellow-400');
                            star.classList.add('text-gray-300');
                        }
                    });

                    applyFiltersAndSort();
                }
            });
        }

        handleInitialSearch();
        populateCityFilter();
        applyFiltersAndSort();
    }

    // --- CHECKOUT.JS LOGIC ---
    if (document.getElementById('checkout-page')) {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        const orderSummary = document.getElementById('order-summary');
        const checkoutForm = document.getElementById('checkout-form');
        const useGpsBtn = document.getElementById('use-gps-btn');
        const addressInput = document.getElementById('address');
        const distanceInfo = document.getElementById('distance-info');

        const confirmModal = document.getElementById('confirm-modal');
        const modalConfirmBtn = document.getElementById('modal-confirm-btn');
        const modalCancelBtn = document.getElementById('modal-cancel-btn');

        const successModal = document.getElementById('order-success-modal');
        const closeReceiptBtn = document.getElementById('close-receipt-btn');
        const downloadReceiptBtn = document.getElementById('download-receipt-btn');

        let itemToRemoveId = null;
        let userLocation = null;
        let currentSubtotal = 0;

        const officeLocation = window.sweetbox.getOfficeLocation();

        window.renderCartItems = () => {
            if (!cartItemsContainer) return;

            const cart = window.sweetbox.getCart();
            cartItemsContainer.innerHTML = '';

            if (cart.length === 0) {
                emptyCartMessage.classList.remove('hidden');
                orderSummary.classList.add('hidden');
                document.getElementById('suggested-products').style.display = 'none';
                return;
            }

            emptyCartMessage.classList.add('hidden');
            orderSummary.classList.remove('hidden');
            document.getElementById('suggested-products').style.display = 'block';

            let subtotal = 0;

            cart.forEach(item => {
                const product = window.sweetbox.getProductDetails(item.id);
                if (product) {
                    subtotal += product.price * item.quantity;
                    const cartItemElement = document.createElement('div');
                    cartItemElement.className = 'cart-item';
                    cartItemElement.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <div class="item-info">
                            <h4>${product.name}</h4>
                            <p class="item-price">Rp ${product.price.toLocaleString('id-ID')}</p>
                            <div class="item-controls">
                                <div class="quantity-control">
                                    <button class="quantity-decrease" data-id="${item.id}">-</button>
                                    <span>${item.quantity}</span>
                                    <button class="quantity-increase" data-id="${item.id}">+</button>
                                </div>
                            </div>
                        </div>
                        <button class="remove-item-btn" data-id="${item.id}" aria-label="Remove item">&times;</button>
                    `;
                    cartItemsContainer.appendChild(cartItemElement);
                }
            });

            currentSubtotal = subtotal;
            updateSummary();
            renderSuggestedProducts();
        };

        const updateSummary = () => {
            const deliveryOption = document.querySelector('input[name="delivery"]:checked').value;
            let shippingCost = 0;

            if (deliveryOption === 'delivery' && userLocation) {
                const distance = calculateDistance(userLocation.lat, userLocation.lon, officeLocation.lat, officeLocation.lon);
                shippingCost = Math.min(Math.max(10000, Math.round(distance) * 2500), 50000);
                distanceInfo.textContent = `Jarak: ${distance.toFixed(2)} km`;
            } else if (deliveryOption === 'pickup') {
                distanceInfo.textContent = `Ambil di toko.`;
                shippingCost = 0;
            } else {
                distanceInfo.textContent = `Mohon aktifkan lokasi untuk menghitung biaya.`;
                shippingCost = 15000;
            }

            const tax = currentSubtotal * 0.11;
            const total = currentSubtotal + shippingCost + tax;

            document.getElementById('summary-subtotal').textContent = `Rp ${currentSubtotal.toLocaleString('id-ID')}`;
            document.getElementById('summary-shipping').textContent = `Rp ${shippingCost.toLocaleString('id-ID')}`;
            document.getElementById('summary-tax').textContent = `Rp ${tax.toLocaleString('id-ID')}`;
            document.getElementById('summary-total').textContent = `Rp ${total.toLocaleString('id-ID')}`;
        };

        const renderSuggestedProducts = () => {
            const suggestedGrid = document.getElementById('suggested-grid');
            if(!suggestedGrid) return;
            const all = window.sweetbox.getAllProducts();
            const cartIds = window.sweetbox.getCart().map(i => i.id);
            const suggestions = all.filter(p => !cartIds.includes(p.id)).sort(() => 0.5 - Math.random()).slice(0, 4);

            suggestedGrid.innerHTML = suggestions.map(p => `
                <a href="#" class="suggested-item add-to-cart-btn" data-id="${p.id}">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                    <h5>${p.name}</h5>
                </a>
            `).join('');
        };

        const showConfirmModal = (id) => {
            itemToRemoveId = id;
            confirmModal.classList.remove('hidden');
        };

        const hideConfirmModal = () => {
            itemToRemoveId = null;
            confirmModal.classList.add('hidden');
        };

        const calculateDistance = (lat1, lon1, lat2, lon2) => {
            const R = 6371;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        };

        if (cartItemsContainer) {
            cartItemsContainer.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id, 10);
                if (e.target.classList.contains('quantity-increase')) {
                    const item = window.sweetbox.getCart().find(i => i.id === id);
                    window.sweetbox.updateQuantity(id, item.quantity + 1);
                }
                if (e.target.classList.contains('quantity-decrease')) {
                    const item = window.sweetbox.getCart().find(i => i.id === id);
                    window.sweetbox.updateQuantity(id, item.quantity - 1);
                }
                if (e.target.classList.contains('remove-item-btn')) {
                    showConfirmModal(id);
                }
            });
        }

        const suggestedProductsContainer = document.getElementById('suggested-products');
        if (suggestedProductsContainer) {
            suggestedProductsContainer.addEventListener('click', (e) => {
                const suggestedItem = e.target.closest('.suggested-item.add-to-cart-btn');
                if (suggestedItem) {
                    e.preventDefault();
                    const id = parseInt(suggestedItem.dataset.id, 10);
                    window.sweetbox.addToCart(id);
                    renderCartItems();
                }
            });
        }

        if(modalConfirmBtn) modalConfirmBtn.addEventListener('click', () => {
            if (itemToRemoveId !== null) window.sweetbox.removeFromCart(itemToRemoveId);
            hideConfirmModal();
        });
        if(modalCancelBtn) modalCancelBtn.addEventListener('click', hideConfirmModal);

        if(useGpsBtn) useGpsBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    userLocation = { lat: position.coords.latitude, lon: position.coords.longitude };
                    addressInput.value = `Lat: ${userLocation.lat.toFixed(5)}, Lon: ${userLocation.lon.toFixed(5)}`;
                    updateSummary();
                }, () => {
                    alert('Tidak bisa mendapatkan lokasi. Mohon izinkan akses lokasi.');
                });
            } else {
                alert("Geolocation tidak didukung oleh browser ini.");
            }
        });

        document.querySelectorAll('input[name="delivery"]').forEach(radio => {
            radio.addEventListener('change', updateSummary);
        });

        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (window.sweetbox.getCart().length === 0) {
                    alert('Keranjang Anda kosong!');
                    return;
                }
                showSuccessModal();
                window.sweetbox.clearCart();
            });
        }

        const showSuccessModal = () => {
            const cart = window.sweetbox.getCart();
            document.getElementById('receipt-id').textContent = `SWB-${Date.now()}`;
            document.getElementById('receipt-date').textContent = new Date().toLocaleDateString('id-ID');

            const itemsHtml = cart.map(item => {
                const product = window.sweetbox.getProductDetails(item.id);
                return `<div class="receipt-item"><span>${item.quantity}x ${product.name}</span><span>Rp ${(item.quantity * product.price).toLocaleString('id-ID')}</span></div>`;
            }).join('');
            document.getElementById('receipt-items').innerHTML = itemsHtml;

            document.getElementById('receipt-summary').innerHTML = document.querySelector('.summary-details').innerHTML;

            successModal.classList.remove('hidden');
        }

        if(closeReceiptBtn) closeReceiptBtn.addEventListener('click', () => {
            successModal.classList.add('hidden');
            renderCartItems();
        });

        if(downloadReceiptBtn) downloadReceiptBtn.addEventListener('click', () => {
            const receiptContent = document.getElementById('receipt-content');

            const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--card-bg').trim() || '#ffffff';

            const options = {
                backgroundColor: bgColor,
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

        renderCartItems();
    }
});

