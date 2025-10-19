/**
 * Menampilkan notifikasi popup.
 * @param {string} message - Pesan yang akan ditampilkan.
 * @param {('success'|'error'|'info')} type - Jenis notifikasi.
 */
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification')
  if (notification && message) {
    notification.textContent = message
    // Reset classes
    notification.classList.remove('bg-red-600', 'bg-gray-900', 'bg-blue-500')
    
    if (type === 'error') {
      notification.classList.add('bg-red-600')
    } else if (type === 'info') {
      notification.classList.add('bg-blue-500')
    } else {
      notification.classList.add('bg-gray-900')
    }
    
    notification.classList.add('show', 'opacity-100')
    setTimeout(() => {
      notification.classList.remove('show', 'opacity-100')
    }, 3000)
  }
}


/**
 * Mengupdate badge jumlah item di ikon keranjang.
 * @param {number} totalItems - Jumlah total item.
 */
function updateCartBadge(totalItems) {
  document.querySelectorAll('.cart-badge').forEach((badge) => {
    badge.textContent = totalItems
    badge.style.display = totalItems > 0 ? 'flex' : 'none'
  })
}

/**
 * Handles clicks on "Add to Cart" buttons.
 * Navigates to the cart add route, allowing auth middleware to intercept.
 * @param {number} productId - The ID of the product to add.
 */
function handleAddToCart(productId) {
  // Navigate to the GET route for adding to cart
  window.location.href = `/cart/add/${productId}`
}

document.addEventListener('DOMContentLoaded', () => {
  // Navigasi Mobile
  const hamburger = document.getElementById('hamburger-menu')
  const mobileNav = document.getElementById('mobile-nav')
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open')
      mobileNav.classList.toggle('open')
    })
  }

  // Event listener global untuk tombol "Add to Cart"
  document.body.addEventListener('click', (e) => {
    const addToCartBtn = e.target.closest('.add-to-cart-btn')
    if (addToCartBtn) {
      e.preventDefault()
      const productId = parseInt(addToCartBtn.dataset.id, 10)
      handleAddToCart(productId)
    }
  })

  // Inisialisasi Select2 untuk filter kota jika ada di halaman
  if (typeof jQuery !== 'undefined' && jQuery.fn.select2) {
    $('.city-select').select2({
      placeholder: 'Pilih Kota',
      allowClear: true,
    })
  }

  // Display flash messages on page load
  const flashContainer = document.getElementById('flash-messages')
  if (flashContainer) {
    const success = flashContainer.dataset.success
    const error = flashContainer.dataset.error
    const info = flashContainer.dataset.info
    
    if (success) {
      showNotification(success, 'success')
    }
    if (error) {
      showNotification(error, 'error')
    }
    if (info) {
      showNotification(info, 'info')
    }
  }
})

