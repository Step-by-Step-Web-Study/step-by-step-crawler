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

/***
 *   {
          acbg: '1',
          addr: '2',
          co_nm: '3',
          crr_cdn: '4',
          ddln_ymd: '5,',
          dept_nm: '6',
          dsabld_cnvnt_fclts: '7',
          duty_cn: '8',
          eplymt_form: '9',
          etc_pfrncs: '10',
          etc_wlfr_bnft: '11',
          for_lang_ablty: '12',
          fxno: '13',
          hp_mltry_svrc_exptn_rqrmnt: '14',
          major: '15',
          no: 16,
          nrby_sbwy_stn: '17',
          ogdp_indus_cmplx: '18',
          plc_work: '19',
          pnsn_4_maj_insrn: '20',
          prfrnl_cdn: '21',
          qlfc_lcn: '22',
          qlfc_rqrmnt: '23',
          rcpt_ddln_day: '24',
          rcpt_mthd: '25',
          rcrtmt_noppl: '26',
          reg_ymd: '27',
          sbmsn_docs_form_atch: '28',
          sbmsn_docs_prmtrl: '29',
          sj: '38',
          slctn_mthd: '39',
          svpay_give_mthd: '40',
          telno: '50',
          wage_cdn: '60',
          work_hr_form: '70',
        },
 * 
 * 
 */
