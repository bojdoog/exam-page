<template>
  <div class="all">
    <div class="info1">
        <div class="clock">
            <img src="..\assets\1351647396240_.pic.jpg" alt="时钟">
            <p>{{strm}}:{{strs}}</p>
        </div>
        <el-button text @click="open">交卷</el-button>
    </div>
    <div class="info2">
        <img src="..\assets\1371647396258_.pic.jpg" alt="头像"/>
          <div class="userinfo">
            <p class="name">{{`姓名:${store.state.tab.studentInfo.name}`}}</p>
            <p class="access">{{`班级:${store.state.tab.studentInfo.class}`}}</p>
          </div>
    </div>
    <div class="info3">
        <p>四年级模拟考试</p>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, ref, watch,computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { writeMusicAnswer,writeDrawAnswer } from '../api'
import { ElMessage, ElMessageBox } from 'element-plus'
import { saveAnswer } from '../public'

export default {
    setup(){
        const router = useRouter()
        const store = useStore()
        const route = useRoute()
        let time = ref(store.state.tab.studentInfo.time)
        
        let m = 0 
        let s = time-m*60
        let strm = ref('')
        let strs = ref('')

        let timer:number = setInterval(()=>{
            if(time.value>0){
                time.value = time.value-1
            }
            m=Math.floor(time.value/60)
            s=time.value-m*60
            strm.value = m < 10? "0" + m : m.toString();
            strs.value = s < 10? "0" + s : s.toString();
        },1000)
        
        
        watch(time,(newValue:any,oldValue)=>{
            if(newValue===0){
                clearInterval(timer)
                saveAnswer(Number(route.params.id))
                router.push({name:'End'})
            }
        })



        let isAllFinish = true

        function submit(){

        }

        const open = async() => {

            

            console.log(isAllFinish,'nihao');

            const resMusic = await writeMusicAnswer()
            isAllFinish =((resMusic.data.isMusicFinish)as boolean[]).every(element=> element)
            let isMusicFinish = resMusic.data.isMusicFinish
            console.log(isAllFinish,'music')
            


            const resDraw = await writeDrawAnswer()
            isAllFinish =((resDraw.data.isDrawFinish) as boolean[]).every(element=> element)
            let isDrawFinish = resDraw.data.isDrawFinish
            console.log(isAllFinish,'draw')
            
            let unMusicFinish:number[] = []
            let unDrawFinish:number[] = []

            let str = ref('')
            let strMusic = ''
            let strDraw = ''
            if(isAllFinish){
                //交卷成功，设置路由跳转
                router.push({name:'End'})
                // if you want to disable its autofocus
                // autofocus: false,
                alert('交卷成功')
            }else{
                for(let i=0;i<isMusicFinish.length;i++){
                    if(!isMusicFinish[i]){
                        unMusicFinish.push(i+1)
                    }
                }
                for(let i=0;i<isDrawFinish.length;i++){
                    if(!isDrawFinish[i]){
                        unDrawFinish.push(i+1)
                    }
                }
                console.log(unMusicFinish,unDrawFinish);
                strMusic = unMusicFinish.join(',')
                strDraw = unDrawFinish.join(',')
                str.value = `有未完成的题目，分别是音乐题${strMusic}与美术题${strDraw}`
                console.log(str);
                ElMessageBox.confirm(
                    str.value,
                    '提示',
                    {
                    confirmButtonText: '提交',
                    cancelButtonText: '继续答题',
                    type: 'warning',
                    }
                )
                    .then(() => {
                    ElMessage({
                        type: 'success',
                        message: '交卷成功',
                        
                    })
                    clearInterval(timer)
                    router.push({name:'End'})
                    })
                    .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '继续答题',
                    })
                    })
            }
        
        }

        return{
            time,
            strm,
            strs,
            submit,
            open,
            store
        }
    }
}
</script>

<style scoped lang="scss">
.all{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
    .info1{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .clock{
            width: 199px;
            height: 40px;
            img{
                display: inline;
            }
            p{
                display: inline;
                font-family: SourceHanSansCN-Bold;
                font-size: 37px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 62px;
                letter-spacing: 0px;
                color: #ff812d;
            }
        }
        button{
            width: 143px;
            height: 62px;
            background-image: linear-gradient(90deg, 
                #0dc582 0%, 
                #19c370 100%), 
            linear-gradient(
                #f66d4b, 
                #f66d4b);
            background-blend-mode: normal, 
                normal;
            box-shadow: 0px 1px 3px 0px 
                rgba(75, 183, 106, 0.47);
            border-radius: 15px;
            border-width: 0px;

            font-family: SourceHanSansCN-Medium;
            font-size: 30px;
            line-height: 32px;
            letter-spacing: 0px;
            color: #ffffff;
            cursor: pointer;
        }
    }
    .info2{
        width: 377px;
        height: 181px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #ffffff;
        margin-top: 25px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 32px;
        letter-spacing: 0px;
        color: #495561;
        img{
            width: 94px;
            height: 94px;
        }
    }
    .info3{
        background-image: url('../assets/1361647396249_.pic.jpg');
        background-size: 377px 60px;
        width: 377px;
        height: 60px;
        p{  
            font-family: SourceHanSansCN-Medium;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0px;
            color: #4084b8;
            text-align: center;
            margin-top: 14px;
        }
        margin-top: 24px;
        margin-bottom: 13px;
    }
}
</style>