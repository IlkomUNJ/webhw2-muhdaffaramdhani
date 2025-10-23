import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Wishlist from '#models/wishlist'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare city: string

  @column()
  declare price: number

  @column()
  declare rating: number

  @column()
  declare calories: number

  @column()
  declare description: string

  @column()
  declare imageUrl: string

  @column()
  declare orderCount: number

  @column()
  declare sellerId: number

  @hasMany(() => Wishlist)
  declare wishlists: HasMany<typeof Wishlist>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
