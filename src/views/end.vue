<template>
    <div>
        <p>考试结束，分数后续会发放</p>
    </div>
</template>

<script lang="ts">
import router from '@/router'
export default {
    setup(){
        
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