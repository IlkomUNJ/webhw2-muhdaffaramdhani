import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import { productValidator } from '#validators/product'

export default class ProductController {
  /**
   * Get popular products for home page
   */
  public async getPopularProducts() {
    return await Product.query().where('rating', '>=', 4).orderBy('orderCount', 'desc').limit(8)
  }

  /**
   * Display a list of resource
   */
  public async index(ctx: HttpContext) {
    const { search, city, minPrice, maxPrice, rating, sort } = ctx.request.qs()

    // Mulai query builder
    const query = Product.query()

    // Terapkan filter
    if (search) {
      query.where('name', 'like', `%${search}%`)
    }
    if (city) {
      query.where('city', city)
    }
    if (minPrice) {
      query.where('price', '>=', minPrice)
    }
    if (maxPrice) {
      query.where('price', '<=', maxPrice)
    }
    if (rating) {
      query.where('rating', '>=', rating)
    }

    // Terapkan sorting
    if (sort) {
      const [column, direction] = sort.split('-')
      if (['price', 'calories', 'rating'].includes(column) && ['asc', 'desc'].includes(direction)) {
        query.orderBy(column, direction)
      }
    } else {
      query.orderBy('id', 'asc')
    }

    const products = await query
    const cities = await Product.query().distinct('city').orderBy('city', 'asc')

    return ctx.view.render('pages/products', { products, cities: cities.map((c) => c.city) })
  }

  /**
   * Display product details
   */
  public async show(ctx: HttpContext) {
    const product = await Product.findOrFail(ctx.params.id)
    return ctx.view.render('pages/products/show', { product })
  }

  /**
   * Display seller's products
   */
  public async sellerProducts(ctx: HttpContext) {
    const products = await Product.query().where('sellerId', ctx.auth.user!.id)
    return ctx.view.render('pages/seller/products', { products })
  }

  /**
   * Display form to create a new product
   */
  public async create(ctx: HttpContext) {
    return ctx.view.render('pages/seller/products/create')
  }

  /**
   * Store a new product
   */
  public async store(ctx: HttpContext) {
    const data = await ctx.request.validateUsing(productValidator)
    await Product.create({ ...data, sellerId: ctx.auth.user!.id })
    return ctx.response.redirect().toRoute('seller.products')
  }

  /**
   * Display form to edit a product
   */
  public async edit(ctx: HttpContext) {
    const product = await Product.findOrFail(ctx.params.id)
    return ctx.view.render('pages/seller/products/edit', { product })
  }

  /**
   * Update a product
   */
  public async update(ctx: HttpContext) {
    const product = await Product.findOrFail(ctx.params.id)
    const data = await ctx.request.validateUsing(productValidator)
    await product.merge(data).save()
    return ctx.response.redirect().toRoute('seller.products')
  }

  /**
   * Delete a product
   */
  public async destroy(ctx: HttpContext) {
    const product = await Product.findOrFail(ctx.params.id)
    await product.delete()
    return ctx.response.redirect().toRoute('seller.products')
  }
}
