import { RecruitInfo } from '../../dto/EmploymentAPIDTO'

export default abstract class CralwerParent {
  abstract doCrawling(): Promise<RecruitInfo[]>
  getAPISecret(): string {
    const env = process.env
    if (!env.API_SECRET) {
      throw new Error('API Secret env is undefined')
    }
    return env.API_SECRET
  }
}
