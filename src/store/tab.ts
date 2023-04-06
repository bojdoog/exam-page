import type { State, StudentInfo } from '../types/types'
export default {
    state() {
        return {
            title: [],
            numberOfTitle: [],
            PageClass: '',
            isMusicFinish: [],
            isDrawFinish: [],
            studentInfo: {
                time: 0,
                name: '',
                class: ''
            }
        }
    },
    getters: {
    },
    mutations: {
        title(state: State, val: string[][]) {
            while (state.title.length != 0) {
                state.title.pop()
            }
            state.title.push(...val)
        },
        numberOfTitle(state: State, val: string[]) {
            while (state.numberOfTitle.length != 0) {
                state.numberOfTitle.pop()
            }
            state.numberOfTitle.push(...val)
        },
        PageClass(state: State, val: string) {
            state.PageClass = val
            // console.log(state.PageClass);
        },
        isMusicFinish(state: State, val: boolean[]) {
            state.isMusicFinish = [...val]
            // console.log(state.isMusicFinish);
        },
        isDrawFinish(state: State, val: boolean[]) {
            state.isDrawFinish = [...val]
            // console.log(state.isDrawFinish);
        },
        getStudentInfo(state: State, val: StudentInfo) {
            state.studentInfo.time = val.time
            state.studentInfo.name = val.name
            state.studentInfo.class = val.class
            console.log(state.studentInfo);
        }
    }
}
