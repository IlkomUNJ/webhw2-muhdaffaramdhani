import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    username: vine
      .string()
      .trim()
      .minLength(3)
      .unique(async (db, value) => {
        const user = await db.from('users').where('username', value).first()
        return !user
      }),
    email: vine
      .string()
      .trim()
      .email()
      .unique(async (db, value) => {
        if (!value) return true // Allow null/empty email
        const user = await db.from('users').where('email', value).first()
        return !user
      })
      .optional(),
    password: vine.string().minLength(8).confirmed(),
    role: vine.enum(['buyer', 'seller']),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    username: vine.string().trim(),
    password: vine.string(),
  })
)
