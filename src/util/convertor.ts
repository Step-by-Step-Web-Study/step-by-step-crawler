import { DB_UPDATE_FIELDS, DB_UPDATE_FIELDS2 } from '../dto/db'
import { RecruitInfo } from '../dto/EmploymentAPIDTO'

export const createDBPK = (data: RecruitInfo): string => `${data.co_nm}-${data.sj}`

export const recruitInfo2companyDbFields = (data: RecruitInfo[]): DB_UPDATE_FIELDS[] => {
  const res: DB_UPDATE_FIELDS[] = data.map(
    d =>
      [
        d.no,
        d.co_nm,
        d.sj,
        d.duty_cn,
        d.wage_cdn,
        d.eplymt_form,
        d.rcrtmt_noppl,
        d.acbg,
        d.slctn_mthd,
        d.work_hr_form,
        d.reg_ymd,
        d.ddln_ymd,
      ] as DB_UPDATE_FIELDS,
  )
  return res
}

export const recruitInfo2companyDbFields2 = (data: RecruitInfo[]): DB_UPDATE_FIELDS2[] => {
  const res: DB_UPDATE_FIELDS2[] = data.map(d => ({
    no: d.no,
    acbg: d.acbg,
    co_nm: d.co_nm,
    ddln_ymd: d.ddln_ymd,
    duty_cn: d.duty_cn,
    eplymt_form: d.eplymt_form,
    rcrtmt_noppl: d.rcrtmt_noppl,
    reg_ymd: d.reg_ymd,
    sj: d.sj,
    slctn_mthd: d.slctn_mthd,
    wage_cdn: d.wage_cdn,
    work_hr_form: d.work_hr_form,
  }))

  return res
}
