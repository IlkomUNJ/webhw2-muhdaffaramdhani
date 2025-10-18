import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('city').notNullable()
      table.integer('price').notNullable()
      table.integer('rating').notNullable()
      table.integer('calories').notNullable()
      table.text('description').notNullable()
      table.string('image_url').notNullable()
      table.integer('order_count').notNullable().defaultTo(0)
      table.integer('seller_id').unsigned().references('id').inTable('users').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
