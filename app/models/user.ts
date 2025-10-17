import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'
import { Authenticatable } from '@adonisjs/auth/types'

export default class User extends BaseModel implements Authenticatable {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare email: string | null

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare role: 'buyer' | 'seller'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  /**
   * Verifies the user's password
   */
  async verifyPassword(password: string) {
    return hash.verify(this.password, password)
  }

  getAuthId() {
    return this.id
  }
}
