import mysql, { Connection } from 'mysql2/promise'
import { DB_UPDATE_FIELDS } from '../../dto/db'
import DBParent from './dbParent'

class RdsDB extends DBParent {
  async dbUpdate(updateFileds: DB_UPDATE_FIELDS[]) {
    let connection: Connection | undefined = undefined
    try {
      connection = await mysql.createConnection({
        ...super.getDBenv(),
        multipleStatements: true,
      })

      await connection.connect()
      await connection.beginTransaction()
      await connection.query('TRUNCATE TABLE company_info')
      const queries =
        'INSERT INTO company_info (No, company_name, title, content, salary, contract, intake, educational_background, recruitment_process, working_conditions, reg_date, end_date) VALUES ?'

      await connection.query(queries, [updateFileds])
      await connection.commit()
    } catch (e: any) {
      console.error(e)
      connection && connection.rollback()
    } finally {
      connection && connection.end()
    }
  }
}

export default RdsDB
