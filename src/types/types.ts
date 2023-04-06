interface User {
    name: string,
    age: number,
    aihao: string[][]
}

let a: User = { name: 'a', age: 19, aihao: [['a', 'b']] };

interface Obj {
    id: number,
    text: string
}


interface State {
    title: string[][],
    numberOfTitle: String[],
    PageClass: string,
    isMusicFinish: boolean[],
    isDrawFinish: boolean[],
    studentInfo: { time: number, name: string, class: string }
}

interface StudentInfo {
    time: number,
    name: string,
    class: string
}


interface EveryTitle {
    id: number,
    text: string
}

let hhj: (string | number)[] = ['a', 1, 1, 1]

interface SametypeofTitle {
    type: string,
    data: EveryTitle[]
}



export { Obj, State, StudentInfo, EveryTitle, SametypeofTitle }