import http from '../utils/request'

// 请求首页数据
export const getMusicTitle = () => {
    return http.get('/title/getMusicTitle')
}

export const getDrawTitle = () => {
    return http.get('/title/getDrawTitle')
}


export const setMusicAnswers = (data) => {
    return http.post('/answer/setMusicAnswers', data)
}

export const writeMusicAnswer = (data) => {
    return http.post('/answer/writeMusicAnswer', data)
}

export const getMusicAnswer = (data) => {
    return http.post('/answer/getMusicAnswer', data)
}
export const setDrawAnswers = (data) => {
    return http.post('/answer/setDrawAnswers', data)
}

export const writeDrawAnswer = (data) => {
    return http.post('/answer/writeDrawAnswer', data)
}

export const getDrawAnswer = (data) => {
    return http.post('/answer/getDrawAnswer', data)
}

export const retrunAnswer = () => {
    return http.get('/answer/retrunAnswer')
}

export const getStudentInfo = () => {
    return http.get('/student/getStudentInfo')
}