document.addEventListener('DOMContentLoaded', () => {
    if (!window.sweetbox) {
        console.error('SweetBox core script not loaded.');
        return;
    }

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
        const searchTerm = searchBox ? searchBox.value.toLowerCase() : '';
        const selectedCity = cityFilter ? cityFilter.value : 'all';
        const min = minPrice ? (parseFloat(minPrice.value) || 0) : 0;
        const max = maxPrice ? (parseFloat(maxPrice.value) || Infinity) : Infinity;
        const sortValue = sortFilter ? sortFilter.value : 'default';

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
                processedProducts.sort((a, b) => b.calories - a.calories);
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
    
    // Event Listeners
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

    // Initialization
    handleInitialSearch();
    populateCityFilter();
    applyFiltersAndSort();
});

