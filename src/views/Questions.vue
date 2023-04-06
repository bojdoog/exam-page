<template>
<div class="container">
        <div class="container-left">
            <div class="ques">
                <div v-html="findinfo(Number(route.params.id))"></div><br><br>
                <div class="dati">
                    作答:
                    <textarea id="answer" @blur="handleblur()"></textarea>
                </div>
            </div>
            <div class="change-question">
                {{`共${numberOfTitle.length}题`}}
                <button :style="[Number(route.params.id)===1?'visibility:hidden;':'cursor:pointer']" @click="titleBack(Number(route.params.id))">上一题</button>
                <button :style="[Number(route.params.id)===numberOfTitle.length?'visibility:hidden':'cursor:pointer']" @click="nextTitle(Number(route.params.id))">下一题</button>
            </div>
        </div>
    <Aside/>
</div>
</template>

<script lang="ts">
import Aside from '../components/Aside.vue'
import { reactive,onMounted,inject,ref, defineComponent } from 'vue'
import { useRouter } from "vue-router";
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import {getAnswer,saveAnswer} from '../public'

import type { Obj } from '../types/types'

export default defineComponent({
    components: {
        Aside,
    },
    setup(){
        const router = useRouter();
        const route = useRoute()
        const store = useStore()
        
        let title:Obj[][] = reactive(store.state.tab.title)
        let numberOfTitle = store.state.tab.numberOfTitle

        function findinfo(id:number):string{
            let Obj:Obj = {
                id:0,
                text:''
            };
            title.forEach((res:Obj[]) => {
                let a = res.filter((res:Obj)=>res.id===id)
                a.forEach((res)=>{
                    Object.assign(Obj,res)
                    // b和res一样，单层
                })
            });
            // console.log(b.text);
            return Obj.text
        }

        function titleBack(id:number):void{
            if(id>1){
                id--
                router.push({ name: "Title", params: { id:id } });
            }
            getAnswer(id)
        }
        function nextTitle(id:number):void{
            if(id<numberOfTitle.length){
                id++
                router.push({ name: "Title", params: { id:id } });
            }
            getAnswer(id)
        }

        function handleblur():void{
            saveAnswer(Number(route.params.id))
            // console.log(typeof(Number(route.params.id)),typeof(route.params.id));
        }
        onMounted(()=>{

        })
        return{
            route,
            title,
            findinfo,
            titleBack,
            nextTitle,
            numberOfTitle,
            handleblur,
        }
    },
});
</script>

<style scoped lang='scss'>
@mixin font1{
    font-family: SourceHanSansCN-Medium;
    font-size: 38px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 39px;
    letter-spacing: 0px;
    color: #495561;
    
} 
@mixin font2{
    font-family: SourceHanSansCN-Medium;
	font-size: 30px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 66px;
	letter-spacing: 0px;
}
.container-left{
    width: 1498px;
    height: 1080px;
    background-image: url('../assets/1341647396232_.pic.jpg');
    position: relative;
    .ques{
        width: 1337px;
        height: 529px;
        @include font1;
        margin-top: 82px;
        margin-left: 76px;
        .dati{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            textarea{
            width: 1230px;
            height: 454px;
            background-color: #ffffff;
            border-radius: 10px;
            border: solid 1px #dff1e4;
            @include font1;
        }
        }
    }
    .change-question{
        width: 448px;
        height: 66px;
        bottom: 33px;
        right: 40px;
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        @include font2;
        color: #ffffff;
        button{
            width: 158px;
            height: 66px;
            background-color: #ffffff;
            border-radius: 15px;
            border-width: 0px;
            @include font2;
            color: #1ac36e;
        }
    }
}
.container{
  width:1920px;
  height:1080px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}
body{
    position: relative;
    margin: 0;
    padding: 0;
  
}
</style>