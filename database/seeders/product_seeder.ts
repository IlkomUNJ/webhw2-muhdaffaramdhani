import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Product from '#models/product'
// Import Wishlist tidak lagi diperlukan di sini
import db from '@adonisjs/lucid/services/db' // Import db service

export default class DatabaseSeeder extends BaseSeeder {
  public async run() {
    // Hapus data lama sebelum seeding (hati-hati jika dijalankan di produksi)
    // Urutan penting: hapus data yang memiliki foreign key terlebih dahulu
    try {
      // Hapus data wishlist jika tabelnya ada
      await db.rawQuery('DELETE FROM wishlists')
    } catch (error) {
      // Abaikan error jika tabel belum ada atau kosong
      console.warn(
        'Could not delete from wishlists (might be empty or not exist yet):',
        error.message
      )
    }
    await db.rawQuery('DELETE FROM products') // Hapus produk
    await db.rawQuery('DELETE FROM users') // Hapus user

    // Catatan: Untuk database seperti PostgreSQL, Anda mungkin perlu mereset sequence ID
    // await db.rawQuery('ALTER SEQUENCE users_id_seq RESTART WITH 1')
    // await db.rawQuery('ALTER SEQUENCE products_id_seq RESTART WITH 1')
    // await db.rawQuery('ALTER SEQUENCE wishlists_id_seq RESTART WITH 1')
    // Untuk SQLite, biasanya menghapus data saja sudah cukup.

    // 1. Buat Pengguna (Users) baru
    const users = await User.createMany([
      {
        username: 'seller',
        password: '111', // Akan di-hash otomatis oleh model User
        role: 'seller',
        email: 'seller@sweetbox.com',
      },
      {
        username: 'buyer',
        password: '999', // Akan di-hash otomatis oleh model User
        role: 'buyer',
        email: 'buyer@sweetbox.com',
      },
    ])

    // Temukan ID seller yang baru dibuat
    const seller = users.find((u) => u.role === 'seller')

    // Pastikan seller ditemukan sebelum melanjutkan
    if (!seller) {
      console.error('Seeder failed: Could not find seller user after creation.')
      return // Hentikan seeder jika seller tidak ada
    }

    // 2. Buat Produk (Products) baru dan kaitkan dengan sellerId
    await Product.createMany([
      {
        name: 'Bolu Meranti',
        city: 'Medan',
        price: 95000,
        rating: 5,
        calories: 350,
        description: 'Bolu gulung lembut dengan isian melimpah khas Medan yang legendaris.',
        imageUrl: '/images/bolu-meranti.jpg',
        orderCount: 250,
        sellerId: seller.id, // Gunakan ID seller yang baru dibuat
      },
      {
        name: 'Lapis Legit',
        city: 'Pontianak',
        price: 120000,
        rating: 5,
        calories: 420,
        description: 'Kue lapis berlapis-lapis harum rempah dan mentega khas Pontianak.',
        imageUrl: '/images/lapis-legit.jpg',
        orderCount: 230,
        sellerId: seller.id,
      },
      {
        name: 'Wingko Babat',
        city: 'Semarang',
        price: 30000,
        rating: 4,
        calories: 250,
        description: 'Kue berbahan kelapa parut dan ketan yang manis gurih khas Semarang.',
        imageUrl: '/images/wingko-babat.jpg',
        orderCount: 300,
        sellerId: seller.id,
      },
      {
        name: 'Bakpia Pathok',
        city: 'Yogyakarta',
        price: 45000,
        rating: 5,
        calories: 200,
        description: 'Kue isi kacang hijau manis gurih dengan kulit tipis lembut khas Jogja.',
        imageUrl: '/images/bakpia-pathok.jpg',
        orderCount: 450,
        sellerId: seller.id,
      },
      {
        name: 'Lapis Surabaya',
        city: 'Surabaya',
        price: 110000,
        rating: 5,
        calories: 380,
        description: 'Kue tiga lapis lembut dengan perpaduan cokelat dan vanila khas Surabaya.',
        imageUrl: '/images/lapis-surabaya.jpg',
        orderCount: 210,
        sellerId: seller.id,
      },
      {
        name: 'Kue Putu',
        city: 'Malang',
        price: 15000,
        rating: 4,
        calories: 180,
        description: 'Kue tradisional kukus isi gula merah dengan taburan kelapa parut segar.',
        imageUrl: '/images/kue-putu.jpg',
        orderCount: 180,
        sellerId: seller.id,
      },
      {
        name: 'Dodol Garut',
        city: 'Garut',
        price: 40000,
        rating: 5,
        calories: 300,
        description: 'Manisan kenyal manis dari ketan dan gula merah khas Garut.',
        imageUrl: '/images/dodol-garut.jpg',
        orderCount: 280,
        sellerId: seller.id,
      },
      {
        name: 'Kue Ape Betawi',
        city: 'Jakarta Pusat',
        price: 10000,
        rating: 4,
        calories: 150,
        description: 'Kue dengan bagian tengah empuk dan pinggiran renyah, khas Betawi.',
        imageUrl: '/images/kue-ape-betawi.jpg',
        orderCount: 150,
        sellerId: seller.id,
      },
      {
        name: 'Es Pisang Ijo',
        city: 'Makassar',
        price: 20000,
        rating: 5,
        calories: 280,
        description: 'Pisang dibungkus adonan hijau dengan kuah santan manis segar khas Makassar.',
        imageUrl: '/images/es-pisang-ijo.jpg',
        orderCount: 320,
        sellerId: seller.id,
      },
      {
        name: 'Bika Ambon',
        city: 'Ambon',
        price: 60000,
        rating: 5,
        calories: 320,
        description: 'Kue berserat legit dengan rasa manis gurih khas Ambon.',
        imageUrl: '/images/bika-ambon.jpg',
        orderCount: 190,
        sellerId: seller.id,
      },
      {
        name: 'Klappertaart',
        city: 'Manado',
        price: 55000,
        rating: 5,
        calories: 340,
        description: 'Puding kelapa muda dengan rasa manis gurih khas Manado.',
        imageUrl: '/images/klappertaart.jpg',
        orderCount: 200,
        sellerId: seller.id,
      },
      {
        name: 'Kue Barongko',
        city: 'Parepare',
        price: 18000,
        rating: 4,
        calories: 250,
        description: 'Pisang kukus dengan santan manis gurih khas Bugis.',
        imageUrl: '/images/kue-barongko.jpg',
        orderCount: 170,
        sellerId: seller.id,
      },
      {
        name: 'Kue Delapan Jam',
        city: 'Palembang',
        price: 150000,
        rating: 5,
        calories: 500,
        description: 'Kue manis legit yang dimasak delapan jam khas Palembang.',
        imageUrl: '/images/kue-delapan-jam.jpg',
        orderCount: 90,
        sellerId: seller.id,
      },
      {
        name: 'Es Selendang Mayang',
        city: 'Jakarta Selatan',
        price: 12000,
        rating: 4,
        calories: 200,
        description: 'Es dengan potongan kue berwarna-warni khas Betawi.',
        imageUrl: '/images/es-selendang-mayang.jpg',
        orderCount: 130,
        sellerId: seller.id,
      },
      {
        name: 'Kue Bagea',
        city: 'Ternate',
        price: 25000,
        rating: 4,
        calories: 280,
        description: 'Kue keras manis berbahan sagu khas Maluku Utara.',
        imageUrl: '/images/kue-bagea.jpg',
        orderCount: 80,
        sellerId: seller.id,
      },
      {
        name: 'Es Dawet Ayu',
        city: 'Banjarnegara',
        price: 15000,
        rating: 5,
        calories: 210,
        description: 'Minuman segar dengan cendol hijau khas Banjarnegara.',
        imageUrl: '/images/es-dawet-ayu.jpg',
        orderCount: 350,
        sellerId: seller.id,
      },
      {
        name: 'Kue Sagon',
        city: 'Klaten',
        price: 18000,
        rating: 4,
        calories: 220,
        description: 'Kue kering berbahan kelapa parut khas Jawa Tengah.',
        imageUrl: '/images/kue-sagon.jpg',
        orderCount: 115,
        sellerId: seller.id,
      },
      {
        name: 'Kue Lupis',
        city: 'Kediri',
        price: 10000,
        rating: 4,
        calories: 190,
        description: 'Ketan berbalut parutan kelapa dan gula merah cair khas Kediri.',
        imageUrl: '/images/kue-lupis.jpg',
        orderCount: 165,
        sellerId: seller.id,
      },
      {
        name: 'Kue Rintak',
        city: 'Bangka',
        price: 30000,
        rating: 4,
        calories: 260,
        description: 'Kue kering dari sagu khas Bangka Belitung.',
        imageUrl: '/images/kue-rintak.jpg',
        orderCount: 95,
        sellerId: seller.id,
      },
      {
        name: 'Kue Cucur',
        city: 'Cirebon',
        price: 12000,
        rating: 4,
        calories: 230,
        description: 'Kue goreng manis gurih khas Cirebon.',
        imageUrl: '/images/kue-cucur.jpg',
        orderCount: 140,
        sellerId: seller.id,
      },
      {
        name: 'Es Cendol',
        city: 'Bandung',
        price: 15000,
        rating: 5,
        calories: 200,
        description: 'Es manis segar dengan cendol hijau khas Bandung.',
        imageUrl: '/images/es-cendol.jpg',
        orderCount: 400,
        sellerId: seller.id,
      },
      {
        name: 'Kue Bugis',
        city: 'Banjarmasin',
        price: 12000,
        rating: 4,
        calories: 210,
        description: 'Kue ketan isi unti kelapa khas Kalimantan Selatan.',
        imageUrl: '/images/kue-bugis.jpg',
        orderCount: 125,
        sellerId: seller.id,
      },
      {
        name: 'Kue Bangket Durian',
        city: 'Riau',
        price: 35000,
        rating: 4,
        calories: 240,
        description: 'Kue kering manis gurih dengan aroma durian khas Riau.',
        imageUrl: '/images/kue-bangket-durian.jpg',
        orderCount: 105,
        sellerId: seller.id,
      },
      {
        name: 'Kue Karawo',
        city: 'Gorontalo',
        price: 40000,
        rating: 4,
        calories: 270,
        description: 'Kue tradisional dengan cita rasa manis khas Gorontalo.',
        imageUrl: '/images/kue-karawo.jpg',
        orderCount: 75,
        sellerId: seller.id,
      },
      {
        name: 'Kue Gegicok',
        city: 'Bogor',
        price: 12000,
        rating: 4,
        calories: 180,
        description: 'Ketan dengan parutan kelapa manis gurih khas Bogor.',
        imageUrl: '/images/kue-gegicok.jpg',
        orderCount: 155,
        sellerId: seller.id,
      },
    ])

    console.log('Database seeded successfully!') // Pesan sukses
  }
}
