<template>
  <div class="all">
    <div class="change-type">
      <button 
      :style="[isSelectMusic===true?'background-color:#1ac36e;border-width:0px;color: #ffffff;':'']" 
      @click="musicBtn()">{{ className[0] }}
      </button>
      <button 
      :style="[isSelectDraw===true?'background-color:#1ac36e;border-width:0px;color: #ffffff;':'']" 
      @click="drawBtn()">{{ className[1] }}
      </button>
    </div>
    <div class="ques" v-for="(val,key) in title" :key="key">
      <p>{{type[key]}}</p>
      <div>
          <input
          type="submit"
          v-for="val in title[key]"
          :key="val.id"
          @click="tiaozhuan(val.id)"
          :value="val.id"
          :style="[
                  (val.id===Number(route.params.id)? 'border:solid 5px #ffc13c':''),
                  funIsFinish(val.id-1)?'background-color: #1ac36e;color:#ffffff':''
                  ]"
          id="input"
          
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted,reactive,ref,computed } from "vue";
import { useRouter } from "vue-router";
import { getMusicTitle,getDrawTitle,setMusicAnswers,setDrawAnswers, } from '../api';
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { getAnswer } from '../public'
import type { EveryTitle,SametypeofTitle } from '../types/types'

export default {
  setup() {
    const store = useStore()
    // let isFinish = store.getters.isFinish

    // let isFinish = computed(()=>{
    //   return [store.state.tab.isMusicFinish,store.state.tab.isDrawFinish]
    // })

    function funIsFinish(id:number){
      if(store.state.tab.PageClass === 'music'){
        return store.state.tab.isMusicFinish[id]
      }
      if(store.state.tab.PageClass === 'draw'){
        return store.state.tab.isDrawFinish[id]
      }
    }
    const route = useRoute();
    const router = useRouter();
    function tiaozhuan(id:number) {
      router.push({ name: "Title", params: { id } });
      getAnswer(id)
    }
    // 题目 返回数组套数组
    let title:EveryTitle[][] = reactive([])
    // 体型
    let type:string[] = reactive([])
    // 题目 返回一个数组
    let numberOfTitle:EveryTitle[] = []
    // 课程名
    let className:string[] = reactive([])
    let tit:EveryTitle[] = []
    // 当前的课程名
    let PageClass = ''

     async function atFirst(){
      PageClass = 'music'
      store.commit('PageClass',PageClass)
      let initNumber = []
      
      const resMusic = await getMusicTitle()
      while(numberOfTitle.length!=0){
          numberOfTitle.pop()
      }
      className.push(resMusic.data.class)

      let musicSametypeofTitle:SametypeofTitle[] = resMusic.data.music
      musicSametypeofTitle.forEach(res=>{
          res.data.forEach(res=>{
            tit.push(res)
          })
          title.push(tit)
          tit=[]
        })

        musicSametypeofTitle.forEach(res=>{
          res.data.forEach(res=>{
            numberOfTitle.push(res)
          })
        })

        musicSametypeofTitle.forEach(res=>{
          type.push(res.type)
        })

        store.commit('title',title)
        store.commit('numberOfTitle',numberOfTitle)

        setMusicAnswers(numberOfTitle)

        initNumber.push(...numberOfTitle)  


        const resDraw = await getDrawTitle()
        while(numberOfTitle.length!=0){
          numberOfTitle.pop()
        }
        console.log(className);
        className.push(resDraw.data.class)
        let drawSametypeofTitle:SametypeofTitle[] =resDraw.data.music
        drawSametypeofTitle.forEach(res=>{
          res.data.forEach(res=>{
            numberOfTitle.push(res)
          })
        })
        setDrawAnswers(numberOfTitle)
      numberOfTitle.push(...initNumber)
      getAnswer(Number(route.params.id))
    };
    atFirst()



    let isSelectMusic = ref(true)
    let isSelectDraw = ref(false)

     async function musicBtn(){

      PageClass = 'music'
      store.commit('PageClass',PageClass)
      router.push({ name: "Title", params: { id:1 } });

      getAnswer(1)

      while(title.length!=0){
        title.pop()
      }
      while(type.length!=0){
        type.pop()
      }
      while(numberOfTitle.length!=0){
        numberOfTitle.pop()
      }
      isSelectMusic.value = true
      isSelectDraw.value = false
      const resMusic = await getMusicTitle()
      let musicSametypeofTitle:SametypeofTitle[] = resMusic.data.music
      musicSametypeofTitle.forEach(res=>{
          res.data.forEach(res=>{
            tit.push(res)
          })
          title.push(tit)
          tit=[]
        })

        musicSametypeofTitle.forEach(res=>{
          res.data.forEach(res=>{
            numberOfTitle.push(res)
          })
        })

        musicSametypeofTitle.forEach(res=>{
          type.push(res.type)
        })

        store.commit('title',title)
        store.commit('numberOfTitle',numberOfTitle)

    }


    async function drawBtn(){

      PageClass = 'draw'
      store.commit('PageClass',PageClass)
      router.push({ name: "Title", params: { id:1 } });

      getAnswer(1)

      while(title.length!=0){
        title.pop()
      }
      while(type.length!=0){
        type.pop()
      }
      while(numberOfTitle.length!=0){
        numberOfTitle.pop()
      }
      isSelectDraw.value = true
      isSelectMusic.value = false

      const resDraw = await getDrawTitle()
      let drawSametypeofTitle:SametypeofTitle[] = resDraw.data.music
      drawSametypeofTitle.forEach(res=>{
          res.data.forEach(res=>{
            tit.push(res)
          })
          title.push(tit)
          tit=[]
        })

        drawSametypeofTitle.forEach(res=>{
          res.data.forEach(res=>{
            numberOfTitle.push(res)
          })
        })

        drawSametypeofTitle.forEach(res=>{
          type.push(res.type)
        })
        // console.log(title,'title');
        // console.log(type,'type');
        // console.log(numberOfTitle,'numberOfTitle');

        store.commit('title',title)
        store.commit('numberOfTitle',numberOfTitle)


    }
    return {
        title,
        tiaozhuan,
        type,
        isSelectMusic,
        isSelectDraw,
        musicBtn,
        drawBtn,
        className,
        route,
        // isFinish
        funIsFinish,
    };
  },
};
</script>

<style scoped lang="scss">
@mixin font-tihao{
  font-family: SourceHanSansCN-Medium;
	font-size: 30px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 32px;
	letter-spacing: 0px;
	color: #1ac36e;
}
@mixin wrap-center{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}
.deepcolor{
  color: red;
}
.all{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  .change-type{
    display: flex;
        flex-direction: row;
        justify-content: space-around;
    button{
      width: 189px;
      height: 58px;
      cursor: pointer;
      font-family: SourceHanSansCN-Regular;
      font-size: 23px;
      line-height: 32px;
      letter-spacing: 0px;
      color: #1ac36e;
      width: 189px;
      height: 58px;
      background-color: #ffffff;
      border: solid 2px #1ac36e;
      display: inline;
    }
    button:first-Child{
      border-radius: 10px 0px 0px 10px;
      
    }
    button:last-Child{
      border-radius: 0px 10px 10px 0px; 
    }
  }
  .ques{
    margin-top: 18px;
    background-color: #ffffff;
    width: 391.987px;
    p{
      font-family: SourceHanSansCN-Medium;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0px;
      color: #495561;
    }
    div{
      input{
        width: 75px;
        height: 54px;
        background-color: #dff1e4;
        border-width: 0px;
        @include font-tihao;
        margin:7px 5px;
        cursor: pointer;
      }

    }
  }
}
</style>