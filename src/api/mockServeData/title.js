import Mock from "mockjs";

export default {
    getMusicTitle: () => {
        return {
            code: 20000,
            class: '音乐',
            music: [
                {
                    type: '一，简答题',
                    data: [
                        {
                            id: 1,
                            text: '讲一讲http缓存'
                        },
                        {
                            id: 2,
                            text: '讲讲tcp连接'
                        },
                        {
                            id: 3,
                            text: '讲讲请求方法'
                        },
                        {
                            id: 4,
                            text: '讲讲常见状态码'
                        },
                        {
                            id: 5,
                            text: '讲讲关于tcp时延'
                        },
                        {
                            id: 6,
                            text: '讲讲http连接'
                        },
                        {
                            id: 7,
                            text: '介绍一下项目'
                        },
                        {
                            id: 8,
                            text: '介绍一下自己'
                        }
                    ],
                },
                {
                    type: '二，填空题',
                    data: [
                        {
                            id: 9,
                            text: '我刷吗，_____(y/n)'
                        },
                        {
                            id: 10,
                            text: '你好吗,_____'
                        },
                        {
                            id: 11,
                            text: '我很好,_____'
                        }
                    ]
                }
            ]
        }
    },


    getDrawTitle: () => {
        return {
            code: 20000,
            class: '美术',
            music: [
                {
                    type: '一，简答题',
                    data: [
                        {
                            id: 1,
                            text: '1+1'
                        },
                        {
                            id: 2,
                            text: '2**2'
                        },
                        {
                            id: 3,
                            text: 'battlefield的四种兵种'
                        },
                    ],
                },
                {
                    type: '二，填空题',
                    data: [
                        {
                            id: 4,
                            text: '潮到风湿了，_____(y/n)'
                        },
                        {
                            id: 5,
                            text: '你好我好大家好,_____'
                        },
                    ]
                }
            ]
        }
    }
}