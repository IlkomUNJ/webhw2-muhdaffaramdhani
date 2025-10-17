document.addEventListener('DOMContentLoaded', () => {
    if (!window.sweetbox) {
        console.error('SweetBox core script not loaded.');
        return;
    }

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

    // Fungsi render global
    window.renderCartItems = () => {
        if (!cartItemsContainer) return;

        const cart = window.sweetbox.getCart();
        cartItemsContainer.innerHTML = '';
        const suggestedContainer = document.getElementById('suggested-products');

        if (cart.length === 0) {
            emptyCartMessage.classList.remove('hidden');
            orderSummary.classList.add('hidden');
            if(suggestedContainer) suggestedContainer.style.display = 'none';
            return;
        }

        emptyCartMessage.classList.add('hidden');
        orderSummary.classList.remove('hidden');
        if(suggestedContainer) suggestedContainer.style.display = 'block';
        
        let subtotal = 0;

        cart.forEach(item => {
            const product = window.sweetbox.getProductDetails(item.id);
            if (product) {
                subtotal += product.price * item.quantity;
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'flex gap-4 mb-4 pb-4 border-b border-gray-200';
                cartItemElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-24 h-24 object-cover rounded-md">
                    <div class="flex-grow">
                        <h4 class="font-semibold text-gray-800">${product.name}</h4>
                        <p class="text-purple-600 font-semibold">Rp ${product.price.toLocaleString('id-ID')}</p>
                        <div class="flex items-center mt-2">
                            <div class="flex items-center border border-gray-300 rounded-md">
                                <button class="quantity-decrease w-8 h-8 text-lg text-gray-600 hover:bg-gray-100" data-id="${item.id}">-</button>
                                <span class="px-4 text-gray-800">${item.quantity}</span>
                                <button class="quantity-increase w-8 h-8 text-lg text-gray-600 hover:bg-gray-100" data-id="${item.id}">+</button>
                            </div>
                        </div>
                    </div>
                    <button class="remove-item-btn text-red-500 hover:text-red-700 text-2xl font-bold" data-id="${item.id}" aria-label="Remove item">&times;</button>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            }
        });

        currentSubtotal = subtotal;
        updateSummary();
        renderSuggestedProducts();
    };

    const updateSummary = () => {
        const deliveryOptionEl = document.querySelector('input[name="delivery"]:checked');
        if (!deliveryOptionEl) return;
        
        const deliveryOption = deliveryOptionEl.value;
        let shippingCost = 0;
        
        if (deliveryOption === 'delivery' && userLocation) {
            const distance = calculateDistance(userLocation.lat, userLocation.lon, officeLocation.lat, officeLocation.lon);
            shippingCost = Math.min(Math.max(10000, Math.round(distance) * 2500), 50000); // Rp 2.500/km, min 10k, max 50k
            distanceInfo.textContent = `Jarak: ${distance.toFixed(2)} km`;
        } else if (deliveryOption === 'pickup') {
            distanceInfo.textContent = `Ambil di toko.`;
            shippingCost = 0;
        } else {
            distanceInfo.textContent = `Mohon aktifkan lokasi untuk menghitung biaya.`;
            shippingCost = 15000; // Default shipping cost
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
            <a href="#" class="add-to-cart-btn text-center block" data-id="${p.id}">
                <img src="${p.image}" alt="${p.name}" loading="lazy" class="w-full h-24 object-cover rounded-md mb-2">
                <h5 class="text-sm font-medium text-gray-700">${p.name}</h5>
            </a>
        `).join('');
    };

    const showConfirmModal = (id) => {
        itemToRemoveId = id;
        if(confirmModal) confirmModal.classList.remove('hidden');
    };

    const hideConfirmModal = () => {
        itemToRemoveId = null;
        if(confirmModal) confirmModal.classList.add('hidden');
    };
    
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    // Event Listeners
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            const target = e.target;
            const id = parseInt(target.dataset.id, 10);
            const item = window.sweetbox.getCart().find(i => i.id === id);

            if (target.classList.contains('quantity-increase')) {
                if(item) window.sweetbox.updateQuantity(id, item.quantity + 1);
            }
            if (target.classList.contains('quantity-decrease')) {
                if(item) window.sweetbox.updateQuantity(id, item.quantity - 1);
            }
            if (target.closest('.remove-item-btn')) {
                showConfirmModal(parseInt(target.closest('.remove-item-btn').dataset.id, 10));
            }
        });
    }
    
    const suggestedProductsContainer = document.getElementById('suggested-products');
    if (suggestedProductsContainer) {
        suggestedProductsContainer.addEventListener('click', (e) => {
            const suggestedItem = e.target.closest('.add-to-cart-btn');
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
            return `<div class="flex justify-between"><span>${item.quantity}x ${product.name}</span><span>Rp ${(item.quantity * product.price).toLocaleString('id-ID')}</span></div>`;
        }).join('');
        document.getElementById('receipt-items').innerHTML = itemsHtml;
        
        document.getElementById('receipt-summary').innerHTML = document.querySelector('.summary-details').innerHTML;
        
        if(successModal) successModal.classList.remove('hidden');
    }

    if(closeReceiptBtn) closeReceiptBtn.addEventListener('click', () => {
        if(successModal) successModal.classList.add('hidden');
        renderCartItems();
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

    // Inisialisasi Halaman
    renderCartItems();
});
