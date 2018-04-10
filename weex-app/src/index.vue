<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
    overflow: scroll;
  }
  .box1{
    height: 500px;
    width: 500px;
    /* background-color: #999; */
    background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#000));
    background-image: -webkit-linear-gradient(top, #fff, #000);
    background-image: -moz-linear-gradient(top, #fff, #000);
    background-image: linear-gradient(to bottom, #fff, #000);
    border-width: 10px;
    border-color: #f00;
    border-style: solid;
    /* position: relative; */
    /* z-index: 20; */
  }
  .box2{
    height: 500px;
    width: 500px;
    /* background-color: yellow; */
    background-image: radial-gradient(#fff,#000);
    border-width: 10px;
    border-color: green;
    border-style: solid;
    /* position: relative; */
    /* z-index: 10; */
    /* bottom: 50px; */
    /* left: -500px; */
  }
  .img{
    width: 200px;
    height: 200px;
    /* border-top-left-radius: 50px; */
    /* border-radius: 50px; */
    border-width: 1px;
    border-color: green;
    border-style: solid;
  }
</style>
