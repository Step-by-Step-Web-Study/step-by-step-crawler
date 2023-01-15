export type DB_UPDATE_FIELDS = [
  number, //'No'
  string, //'company_name'
  string, //'title'
  string, //'content'
  string, //'salary'
  string, //'contract'
  string, //'intake'
  string, //'educational_background'
  string, //'recruitment_process'
  string, //'working_conditions'
  string, //'reg_date'
  string, //'end_date'
]

export interface DB_UPDATE_FIELDS2 {
  no: number
  co_nm: string
  sj: string
  duty_cn: string
  wage_cdn: string
  eplymt_form: string
  rcrtmt_noppl: string
  acbg: string
  slctn_mthd: string
  work_hr_form: string
  reg_ymd: string
  ddln_ymd: string
}

export interface DB_EVN {
  host: string
  user: string
  password: string
  database: string
}
