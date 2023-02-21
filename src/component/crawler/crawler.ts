import { OPEN_API_URL } from '../../constants/domain'
import { EmploymentReqDTO, EmploymentResDTO, RecruitInfo } from '../../dto/EmploymentAPIDTO'
import http from '../../util/http'
import CralwerParent from './cralwerParent'

class Cralwer extends CralwerParent {
  paginCount: number = 1000
  async doCrawling(): Promise<RecruitInfo[]> {
    console.log(`Fetch Start`)
    let pageIndex = 1
    let res: RecruitInfo[] = []
    while (true) {
      try {
        console.log(`Start Count ${pageIndex}`)
        const eachRes = await http.get<EmploymentResDTO>(OPEN_API_URL, {
          params: {
            numOfRows: this.paginCount,
            pageNo: pageIndex,
            serviceKey: super.getAPISecret(),
          } as EmploymentReqDTO,
        })
        const response = eachRes.data
        response.items && (res = res.concat(response.items))
        if (response.numOfRows * response.pageNo >= response.totalCount) {
          break
        }
        pageIndex++
      } catch (e: any) {
        console.error(e)
        throw e
      }
    }
    console.log(`Fetch end`)
    return res
  }
}

export default Cralwer
