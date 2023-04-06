import Mock from 'mockjs'

let musicAnswers = []
let drawAnswers = []

let isMusicFinish = []
let isDrawFinish = []

export default {
    retrunAnswer: () => {
        return {
            Answer: [
                musicAnswers,
                drawAnswers
            ],

        }
    },
    setMusicAnswers: req => {
        //req为numberOfTitle
        const numberOfTitle = JSON.parse(req.body)
        while (musicAnswers.length != 0) {
            musicAnswers.pop()
        }
        for (let i = 0; i < numberOfTitle.length; i++) {
            musicAnswers.push('')
        }
        if (isMusicFinish.length === 0) {
            for (let i = 0; i < numberOfTitle.length; i++) {
                isMusicFinish.push(false)
            }
        }
        // console.log(isMusicFinish);
        // console.log(musicAnswers,'musicAnswers');
    },

    writeMusicAnswer: req => {

        // req格式{ id, answer}
        if (req.body) {
            const answer = JSON.parse(req.body).answer
            const id = JSON.parse(req.body).id
            const isMusicFinished = JSON.parse(req.body).isMusicFinished
            // console.log(req);
            console.log(isMusicFinished, 'y/n');
            musicAnswers[id - 1] = answer
            isMusicFinish[id - 1] = isMusicFinished
            console.log('MUSIC', musicAnswers);
        }
        // console.log(req);
        // console.log(isMusicFinished,'y/n');
        // console.log('----------------');
        return {
            isMusicFinish
        }
    },

    getMusicAnswer: req => {
        // req为id

        let answer = musicAnswers[req.body - 1]
        // console.log(musicAnswers);
        // console.log(req,'id');
        // console.log(answer,'answer');
        return {
            answer
        }
    },

    setDrawAnswers: req => {

        //req为numberOfTitle
        const numberOfTitle = JSON.parse(req.body)
        while (drawAnswers.length != 0) {
            drawAnswers.pop()
        }
        for (let i = 0; i < numberOfTitle.length; i++) {
            drawAnswers.push('')
        }
        if (isDrawFinish.length === 0) {
            for (let i = 0; i < numberOfTitle.length; i++) {
                isDrawFinish.push(false)
            }
        }
        // console.log(isDrawFinish);
        // console.log(drawAnswers,'drawAnswers');
    },

    writeDrawAnswer: req => {
        // req格式{ id, answer}
        // console.log(req);
        if (req.body) {
            const answer = JSON.parse(req.body).answer
            const id = JSON.parse(req.body).id
            const isDrawFinished = JSON.parse(req.body).isDrawFinished
            // console.log(req);
            // console.log(isDrawFinished,'y/n');
            drawAnswers[id - 1] = answer
            isDrawFinish[id - 1] = isDrawFinished
            // console.log('DRAW',drawAnswers);
        }
        return {
            isDrawFinish
        }

    },

    getDrawAnswer: req => {
        // req为id
        let answer = drawAnswers[req.body - 1]
        return {
            answer
        }
    }
}