import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'

export default class User extends BaseModel {
  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }
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

  static async verifyCredentials(username: string, password: string) {
    const user = await User.findBy('username', username)
    if (!user) {
      throw new Error('Invalid credentials')
    }

    const isVerified = await hash.verify(user.password, password)
    if (!isVerified) {
      throw new Error('Invalid credentials')
    }

    return user
  }
}
