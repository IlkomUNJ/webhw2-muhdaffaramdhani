document.addEventListener('DOMContentLoaded', () => {
    // Pastikan window.sweetbox dan datanya sudah ada sebelum melanjutkan
    if (!window.sweetbox || !window.sweetbox.getAllProducts) {
        console.error('SweetBox core script or product data not loaded.');
        return;
    }

    const products = window.sweetbox.getAllProducts();
    
    // Filter produk dengan rating 4 atau 5
    const popularProducts = products.filter(p => p.rating >= 4);

    // Pilih SEMUA elemen slider
    const menuSliders = document.querySelectorAll('.menu-slider');
    
    const createPopularMenu = () => {
        if (menuSliders.length === 0) return;
        
        // Buat konten HTML sekali saja
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

        // Isi setiap slider dengan konten yang sama untuk efek infinite scroll
        menuSliders.forEach(slider => {
            slider.innerHTML = sliderContentHTML;
        });
    };

    createPopularMenu();
});
