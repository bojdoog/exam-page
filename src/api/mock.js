import Mock, { mock } from "mockjs"
import title from './mockServeData/title'
import answer from "./mockServeData/answer"
import student from "./mockServeData/student"
// 定义mock请求拦截
Mock.mock('/api/title/getMusicTitle', title.getMusicTitle)
Mock.mock('/api/title/getDrawTitle', title.getDrawTitle)

Mock.mock('/api/answer/setMusicAnswers', 'post', answer.setMusicAnswers)
Mock.mock('/api/answer/writeMusicAnswer', 'post', answer.writeMusicAnswer)
Mock.mock('/api/answer/getMusicAnswer', 'post', answer.getMusicAnswer)

Mock.mock('/api/answer/setDrawAnswers', 'post', answer.setDrawAnswers)
Mock.mock('/api/answer/writeDrawAnswer', 'post', answer.writeDrawAnswer)
Mock.mock('/api/answer/getDrawAnswer', 'post', answer.getDrawAnswer)

Mock.mock('/api/answer/retrunAnswer', answer.retrunAnswer)
Mock.mock('/api/student/getStudentInfo', student.getStudentInfo)