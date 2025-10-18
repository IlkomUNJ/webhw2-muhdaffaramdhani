import vine from '@vinejs/vine'

export const productValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(255),
    description: vine.string().trim().minLength(10),
    price: vine.number().positive(),
    rating: vine.number().min(0).max(5).optional(),
    city: vine.string().trim(),
    calories: vine.number().positive().optional(),
    image: vine.string().trim().url().optional(),
  })
)
