import store from './store'
import { writeMusicAnswer, writeDrawAnswer, getMusicAnswer, getDrawAnswer } from './api'

let isMusicFinished = false
let isDrawFinished = false


function saveAnswer(id) {

    if (store.state.tab.PageClass === 'music') {
        let str = document.getElementById('answer').value
        let valueStr = str.trim()
        isMusicFinished = false
        if (valueStr.length > 0) {
            isMusicFinished = true
        }
        writeMusicAnswer({ id: id, answer: str, isMusicFinished }).then(res => {
            // console.log(res.data.isMusicFinish,'y/n');
            store.commit('isMusicFinish', res.data.isMusicFinish)
        })
    } else if (store.state.tab.PageClass === 'draw') {
        let str = document.getElementById('answer').value
        let valueStr = str.trim()
        isDrawFinished = false
        if (valueStr.length > 0) {
            isDrawFinished = true
        }
        writeDrawAnswer({ id: id, answer: str, isDrawFinished }).then(res => {
            // console.log(res.data.isDrawFinish,'y/n');
            store.commit('isDrawFinish', res.data.isDrawFinish)
        })
    }
}
function getAnswer(id) {
    if (store.state.tab.PageClass === 'music') {
        getMusicAnswer(id).then(res => {
            document.getElementById('answer').value = res.data.answer
        })
    } else if (store.state.tab.PageClass === 'draw') {
        getDrawAnswer(id).then(res => {
            document.getElementById('answer').value = res.data.answer
        })
    }
}



export { getAnswer, saveAnswer }