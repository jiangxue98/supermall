<template>
  <div class="Index">
    <div class="leftNav">
      <div class="logo">
        <img src="@/assets/img/index/image_logo_retract_white@2x.png" alt="">
      </div>
      <div class="menu">
        <ul>
          <li @click="clickMsg" :class="{leftBorder:selectLi===1}">
            <a-icon type="message" class="a_icon"/>
            消息
          </li>
          <li @click="clickDesktop" :class="{leftBorder:selectLi===2}">
            <a-icon type="desktop" class="a_icon"/>
            工作台
          </li>
          <li @click="clickHidoc" :class="{leftBorder:selectLi===3}">
            <a-icon type="file-text" class="a_icon"/>
            hidoc
          </li>
          <li @click="clickCal" :class="{leftBorder:selectLi===4}">
            <a-icon type="calendar" class="a_icon"/>
            日历
          </li>
          <li @click="clickAppstore" :class="{leftBorder:selectLi===5}">
            <a-icon type="appstore" class="a_icon"/>
            应用中心
          </li>
        </ul>
      </div>
    </div>   
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selectLi: 3,
    }
  },
  methods: {
    clickMsg(){
      this.selectLi = 1;
    },
    clickDesktop(){
      this.selectLi = 2;
    },
    clickHidoc(){
      this.selectLi = 3;
      this.$router.push({name: 'hidoc'});
    },
    clickCal(){ 
      this.selectLi = 4;
    },
    clickAppstore(){
      this.selectLi = 5;
      this.$router.push({name:'appStore'})
    }
  }
}
</script>
<style  lang="less" scoped>
  .Index{
    display: flex;
    width: 100%;
    height: 100vh;
    .leftNav{
      width: 64px;
      height: 100%;      
      background: #2979FF;
      border-radius: 0px 0px 12px 0px;
      // 清除浮动
      overflow: hidden;
      .logo{
        width: 42px;
        height: 44px;
        margin-top: 10px;
        margin-left: 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .menu{
        margin-top: 24px;
        li{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 62px;
          height: 64px;       
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          margin-top: 8px;
          cursor: pointer;
          .a_icon{
            font-size: 16px;
            margin-bottom: 6px;
          }
        }
      }
      .leftBorder{
        border-left: 2px solid #fff;
        background: rgba(255, 255, 255, 0.1);
      }

    }
    .content{
      flex: 1;
    }
  }
</style>