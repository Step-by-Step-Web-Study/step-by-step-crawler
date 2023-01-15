import { recruitInfo2companyDbFields } from '../util/convertor'
import CralwerParent from './crawler/cralwerParent'
import DBParent from './db/dbParent'

export default class UpdateRobot {
  cralwer: CralwerParent
  dbHandler: DBParent
  constructor(cralwer: CralwerParent, dbHandler: DBParent) {
    this.cralwer = cralwer
    this.dbHandler = dbHandler
  }

  async robotExecute() {
    console.log('Execute Start')
    const res = await this.cralwer.doCrawling()
    await this.dbHandler.dbUpdate(recruitInfo2companyDbFields(res))
    console.log('Execute End')
  }
}
