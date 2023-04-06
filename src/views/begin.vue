<template>
    <div>
        <p>考试系统</p>
        <el-button type="primary" @click="tiaozhuan()" size="large">开始考试</el-button>
    </div>
</template>

<script lang="ts">
import router from '@/router'
import { useStore } from 'vuex';
import { getStudentInfo } from '../api'
export default {
    setup(){
        const store = useStore()
        function tiaozhuan(){
            getStudentInfo().then(res=>{
                store.commit('getStudentInfo',{time:res.data.time,
                            name:res.data.name,
                            class:res.data.class})
                router.push({ name: "Title", params: { id:1 } });
            })
        }
        return{
            tiaozhuan,
        }
    }
}
</script>

<style scoped lang="scss">
body{
   margin: 0;
   padding: 0;
   position: relative;
}
div{
    position: absolute;
    width: 700px;
    height: 500px;
    background-color: #f7f7f7;
    top: -100px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p{
        font-family: SourceHanSansCN-Medium;
        font-size: 38px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 39px;
        letter-spacing: 0px;
        color: #495561;
    }
}
</style>