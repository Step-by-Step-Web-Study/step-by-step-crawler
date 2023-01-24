// query params
export interface EmploymentReqDTO {
  serviceKey: string
  pageNo: number
  numOfRows: number
}

export interface EmploymentResDTO {
  resultCode: number
  resultMsg: string
  numOfRows: number
  pageNo: number
  totalCount: number
  items: RecruitInfo[]
}

export interface RecruitInfo {
  no: number
  co_nm: string
  sj: string
  qlfc_rqrmnt: string
  reg_ymd: string
  ddln_ymd: string
  duty_cn: string
  rcpt_ddln_day: string
  eplymt_form: string
  rcrtmt_noppl: string
  wage_cdn: string
  crr_cdn: string
  acbg: string
  for_lang_ablty: string
  major: string
  qlfc_lcn: string
  hp_mltry_svrc_exptn_rqrmnt: string
  prfrnl_cdn: string
  etc_pfrncs: string
  slctn_mthd: string
  rcpt_mthd: string
  sbmsn_docs_form_atch: string
  sbmsn_docs_prmtrl: string
  plc_work: string
  ogdp_indus_cmplx: string
  nrby_sbwy_stn: string
  work_hr_form: string
  pnsn_4_maj_insrn: string
  svpay_give_mthd: string
  etc_wlfr_bnft: string
  dsabld_cnvnt_fclts: string
  dept_nm: string
  telno: string
  fxno: string
  addr: string
}
