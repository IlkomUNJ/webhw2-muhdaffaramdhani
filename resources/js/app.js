/**
 * Menampilkan notifikasi popup.
 * @param {string} message - Pesan yang akan ditampilkan.
 * @param {('success'|'error'|'info')} type - Jenis notifikasi.
 */
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification')
  if (notification && message) {
    notification.textContent = message
    notification.classList.remove('bg-red-600', 'bg-gray-900', 'bg-blue-500')
    
    if (type === 'error') notification.classList.add('bg-red-600')
    else if (type === 'info') notification.classList.add('bg-blue-500')
    else notification.classList.add('bg-gray-900')
    
    notification.classList.add('show', 'opacity-100')
    setTimeout(() => {
      notification.classList.remove('show', 'opacity-100')
    }, 3000)
  }
}

/**
 * Handles clicks on "Add to Cart" buttons.
 * @param {number} productId - The ID of the product to add.
 */
function handleAddToCart(productId) {
  window.location.href = `/cart/add/${productId}`
}

/**
 * PERBAIKAN: Handles clicks on "Wishlist/Like" buttons.
 * @param {Event} e The click event.
 */
async function handleWishlistToggle(e) {
  const button = e.target.closest('.like-btn')
  if (!button) return

  e.preventDefault()
  const productId = button.dataset.id
  const icon = button.querySelector('i')
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  try {
    const response = await fetch(`/wishlist/toggle/${productId}`, {
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Accept': 'application/json',
      },
    });

    if (response.status === 401) {
      // Jika pengguna belum login, arahkan ke halaman login
      window.location.href = '/login';
      return;
    }

    const data = await response.json();

    if (data.status === 'success') {
      if (data.action === 'added') {
        icon.classList.remove('far')
        icon.classList.add('fas', 'text-red-500')
        showNotification('Ditambahkan ke wishlist!', 'success');
      } else {
        icon.classList.remove('fas', 'text-red-500')
        icon.classList.add('far')
        showNotification('Dihapus dari wishlist.', 'info');
      }
    } else {
       showNotification(data.message || 'Gagal memperbarui wishlist.', 'error');
    }
  } catch (error) {
    showNotification('Terjadi kesalahan. Coba lagi.', 'error');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation
  const hamburger = document.getElementById('hamburger-menu')
  const mobileNav = document.getElementById('mobile-nav')
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open')
      mobileNav.classList.toggle('open')
    })
  }

  // Global event listener for interactive buttons
  document.body.addEventListener('click', (e) => {
    // Add to Cart
    const addToCartBtn = e.target.closest('.add-to-cart-btn')
    if (addToCartBtn) {
      e.preventDefault()
      const productId = parseInt(addToCartBtn.dataset.id, 10)
      handleAddToCart(productId)
    }

    // PERBAIKAN: Wishlist toggle
    const likeBtn = e.target.closest('.like-btn')
    if(likeBtn) {
      handleWishlistToggle(e);
    }
  })

  // Initialize Select2 for city filter
  if (typeof jQuery !== 'undefined' && jQuery.fn.select2) {
    $('.city-select').select2({
      placeholder: 'Pilih Kota',
      allowClear: true,
    })
  }

  // Display flash messages
  const flashContainer = document.getElementById('flash-messages')
  if (flashContainer) {
    const success = flashContainer.dataset.success
    const error = flashContainer.dataset.error
    const info = flashContainer.dataset.info
    
    if (success) showNotification(success, 'success')
    if (error) showNotification(error, 'error')
    if (info) showNotification(info, 'info')
  }
})
