/**
 * Menampilkan notifikasi popup.
 * @param {string} message - Pesan yang akan ditampilkan.
 * @param {('success'|'error'|'info')} type - Jenis notifikasi.
 */
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  if (notification && message) {
    notification.textContent = message;
    notification.classList.remove('bg-red-600', 'bg-gray-900', 'bg-blue-500', 'opacity-0'); // Pastikan opacity dihapus
    notification.classList.add('opacity-100'); // Tampilkan notifikasi

    if (type === 'error') notification.classList.add('bg-red-600');
    else if (type === 'info') notification.classList.add('bg-blue-500');
    else notification.classList.add('bg-gray-900');

    // Menghilangkan notifikasi setelah 3 detik
    setTimeout(() => {
      notification.classList.remove('opacity-100');
      notification.classList.add('opacity-0');
    }, 3000);
  } else if (!message) {
      console.warn("showNotification called with empty message");
  } else {
      console.error("Notification element not found");
  }
}

/**
 * Handles clicks on "Add to Cart" buttons.
 * Checks authentication status before redirecting.
 * @param {number} productId - The ID of the product to add.
 */
function handleAddToCart(productId) {
  const isAuthenticated = document.getElementById('auth-status')?.value === 'true';

  // PERBAIKAN BUG 1: Cek autentikasi sebelum mengarahkan ke penambahan keranjang
  if (!isAuthenticated) {
    showNotification('Anda harus login terlebih dahulu untuk menambahkan ke keranjang.', 'info');
    // Optional: Arahkan ke halaman login setelah notifikasi
    // setTimeout(() => { window.location.href = '/login'; }, 1500);
    return; // Hentikan proses jika belum login
  }

  // Jika sudah login, lanjutkan ke endpoint backend
  window.location.href = `/cart/add/${productId}`;
}

/**
 * Handles clicks on "Wishlist/Like" buttons.
 * Checks authentication before making API call.
 * @param {Event} e The click event.
 */
async function handleWishlistToggle(e) {
  const button = e.target.closest('.like-btn');
  if (!button) return;

  e.preventDefault(); // Mencegah tindakan default jika tombol ada di dalam link

  // PERBAIKAN BUG 1: Cek autentikasi di frontend
  const isAuthenticated = document.getElementById('auth-status')?.value === 'true';
  if (!isAuthenticated) {
    showNotification('Login untuk menyimpan wishlist.', 'info');
    // Optional: Arahkan ke login
    // setTimeout(() => { window.location.href = '/login'; }, 1500);
    return;
  }

  const productId = button.dataset.id;
  const icon = button.querySelector('i');
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

  if (!csrfToken) {
    showNotification('Sesi tidak valid, silakan refresh halaman.', 'error');
    return;
  }

  // Tampilkan loading state (opsional)
  icon.classList.add('opacity-50', 'fa-spin'); // Contoh: spin icon
  button.disabled = true;

  try {
    const response = await fetch(`/wishlist/toggle/${productId}`, {
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json' // Tambahkan jika perlu
      },
      // body: JSON.stringify({}) // Tambahkan jika perlu mengirim body
    });

    // Periksa status 401 secara eksplisit jika middleware backend mungkin gagal
    if (response.status === 401) {
      showNotification('Sesi berakhir, silakan login kembali.', 'error');
      setTimeout(() => { window.location.href = '/login'; }, 1500);
      return;
    }

    if (!response.ok) {
       // Coba parse error dari backend jika ada
      let errorMsg = 'Gagal memperbarui wishlist.';
      try {
        const errorData = await response.json();
        errorMsg = errorData.message || errorMsg;
      } catch (parseError) {
         // Biarkan pesan default jika parsing gagal
      }
      throw new Error(errorMsg); // Lemparkan error agar ditangkap oleh catch
    }

    const data = await response.json();

    if (data.status === 'success') {
      if (data.action === 'added') {
        icon.classList.remove('far');
        icon.classList.add('fas', 'text-red-500');
        showNotification('Ditambahkan ke wishlist!', 'success');
      } else {
        icon.classList.remove('fas', 'text-red-500');
        icon.classList.add('far');
        showNotification('Dihapus dari wishlist.', 'info');
      }
    } else {
       showNotification(data.message || 'Gagal memperbarui wishlist.', 'error');
    }
  } catch (error) {
     console.error("Wishlist toggle error:", error);
     showNotification(error.message || 'Terjadi kesalahan jaringan. Coba lagi.', 'error');
  } finally {
     // Hapus loading state
     icon.classList.remove('opacity-50', 'fa-spin');
     button.disabled = false;
  }
}

/**
 * Updates the cart badge count in the header.
 */
function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    const cartDataInput = document.getElementById('initial-cart-data');
    if (!cartBadge || !cartDataInput) return;

    try {
        const cart = JSON.parse(cartDataInput.value || '[]');
        const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 0), 0);

        if (totalQuantity > 0) {
            cartBadge.textContent = totalQuantity;
            cartBadge.style.display = 'flex';
        } else {
            cartBadge.style.display = 'none';
        }
    } catch (e) {
        console.error("Error parsing cart data:", e);
        cartBadge.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation
  const hamburger = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'); // Ambil semua link di nav mobile

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      // Mencegah scroll body saat nav mobile terbuka
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Menutup nav mobile saat link di dalamnya diklik
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.style.overflow = ''; // Kembalikan scroll body
        });
    });
  }


  // Global event listener for interactive buttons
  document.body.addEventListener('click', (e) => {
    // Add to Cart
    const addToCartBtn = e.target.closest('.add-to-cart-btn');
    if (addToCartBtn) {
      e.preventDefault(); // Mencegah tindakan default jika ada (misal, jika tombol di dalam link)
      const productId = parseInt(addToCartBtn.dataset.id, 10);
      handleAddToCart(productId);
      return; // Hentikan eksekusi lebih lanjut jika ini tombol add-to-cart
    }

    // Wishlist toggle
    const likeBtn = e.target.closest('.like-btn');
    if(likeBtn) {
      handleWishlistToggle(e);
      // Tidak perlu return di sini karena handleWishlistToggle sudah async dan menangani preventDefault
    }
  });

  // Initialize Select2 for city filter (jika jQuery dan Select2 tersedia)
  const isProductPage = document.querySelector('#product-page') !== null;
  if (isProductPage && typeof jQuery !== 'undefined' && jQuery.fn.select2) {
    $('.city-select').select2({
      placeholder: 'Pilih Kota',
      allowClear: true,
      width: '100%' // Pastikan Select2 mengisi lebar kontainer
    });
  }

  // Display flash messages from backend
  const flashContainer = document.getElementById('flash-messages');
  if (flashContainer) {
    const success = flashContainer.dataset.success;
    const error = flashContainer.dataset.error;
    const info = flashContainer.dataset.info;

    // Tunda sedikit agar elemen notifikasi siap
    setTimeout(() => {
        if (success) showNotification(success, 'success');
        if (error) showNotification(error, 'error');
        if (info) showNotification(info, 'info');
    }, 100); // Tunda 100ms
  } else {
      console.warn("Flash message container not found.");
  }

  // Update cart badge on initial load
  updateCartBadge();
});
