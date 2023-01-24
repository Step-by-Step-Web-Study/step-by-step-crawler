import cron from 'node-cron'
import Cralwer from './component/crawler/crawler'
import RdsDB from './component/db/rdsDB'
import UpdateRobot from './component/updateRobot'

const robot = new UpdateRobot(new Cralwer(), new RdsDB())

const task = cron.schedule(
  '0 0 0 * * *', // 매일 자정에 실행
  () => {
    robot.robotExecute()
  },
  {
    runOnInit: true, // node 시작시 즉시 실행
  },
)

task.start()
