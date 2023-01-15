import { DB_EVN, DB_UPDATE_FIELDS } from '../../dto/db'

export default abstract class DBParent {
  abstract dbUpdate(updateFileds: DB_UPDATE_FIELDS[]): void
  getDBenv(): DB_EVN {
    const env = process.env
    if (!env.DB_DATABASE || !env.DB_HOST || !env.DB_PASSWORD || !env.DB_USER) {
      throw new Error('DB required env is undefined')
    }
    return {
      database: env.DB_DATABASE,
      host: env.DB_HOST,
      password: env.DB_PASSWORD,
      user: env.DB_USER,
    }
  }
}
