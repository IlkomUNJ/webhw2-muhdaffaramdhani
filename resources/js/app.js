/**
 * Menampilkan notifikasi popup.
 * @param {string} message - Pesan yang akan ditampilkan.
 * @param {('success'|'error')} type - Jenis notifikasi.
 */
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  if (notification) {
    notification.textContent = message;
    notification.classList.toggle('bg-red-600', type === 'error');
    notification.classList.toggle('bg-gray-900', type === 'success');
    notification.classList.add('show', 'opacity-100');
    setTimeout(() => {
      notification.classList.remove('show', 'opacity-100');
    }, 3000);
  }
}

/**
 * Mengupdate badge jumlah item di ikon keranjang.
 * @param {number} totalItems - Jumlah total item.
 */
function updateCartBadge(totalItems) {
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  });
}

/**
 * Menangani klik pada tombol "Add to Cart".
 * Mengirim request ke backend untuk menambahkan item ke session.
 * @param {number} productId - ID produk yang akan ditambahkan.
 */
async function handleAddToCart(productId) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

  try {
    const response = await fetch('/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
      body: JSON.stringify({ productId: productId }),
    });

    const result = await response.json();

    if (response.ok) {
      showNotification('Produk berhasil ditambahkan ke keranjang!');
      updateCartBadge(result.totalItems);
    } else {
      throw new Error(result.message || 'Gagal menambahkan produk.');
    }
  } catch (error) {
    console.error('Add to cart error:', error);
    showNotification(error.message, 'error');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  // Navigasi Mobile
  const hamburger = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
  }

  // Event listener global untuk tombol "Add to Cart"
  document.body.addEventListener('click', (e) => {
    const addToCartBtn = e.target.closest('.add-to-cart-btn');
    if (addToCartBtn) {
      e.preventDefault();
      const productId = parseInt(addToCartBtn.dataset.id, 10);
      handleAddToCart(productId);
    }
  });
  
  // Inisialisasi Select2 untuk filter kota jika ada di halaman
  if (typeof jQuery !== 'undefined' && jQuery.fn.select2) {
      $('.city-select').select2({
          placeholder: "Pilih Kota",
          allowClear: true
      });
  }
});
