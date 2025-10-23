import vine from '@vinejs/vine'
import db from '@adonisjs/lucid/services/db'

/**
 * Custom rule to check if a value is unique in a table
 */
async function isUnique(table: string, column: string, value: string) {
  const exists = await db.from(table).where(column, value).first()
  return !exists
}

/**
 * Validates the user's registration request
 */
export const registerValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(3),
    email: vine.string().trim().email().optional(),
    password: vine.string().minLength(8).confirmed(),
    // Hapus validasi 'role' dari sini
  })
)

/**
 * Validates the user's login request
 */
export const loginValidator = vine.compile(
  vine.object({
    username: vine.string().trim(),
    password: vine.string(),
  })
)

// Add custom validation in the controller
export async function validateRegistration(data: Record<string, any>) {
  const validated = await registerValidator.validate(data)

  // Check unique username
  if (!(await isUnique('users', 'username', validated.username))) {
    throw new Error('Username already exists')
  }

  // Check unique email if provided
  if (validated.email && !(await isUnique('users', 'email', validated.email))) {
    throw new Error('Email already exists')
  }

  return validated
}
