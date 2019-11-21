<template>
  <div class="top">
    <div class="header">
      <div class="headerdiv">
        <div class="left">{{welcome}}</div>
        <div class="return" @click="signout">
          [ 退出系统 ]
        </div>
      </div>
    </div>
    <div class="content">
      <div class="contentdiv"> 
          <div class="icon">
            <img src="../assets/images/LOGO.jpg" class="img">
          </div>
        <ul class="itemdiv">
          <li class="item">
            <router-link to="">会员中心</router-link>
          </li>
          <li class="item">
            <router-link to="">市场分析</router-link>
          </li>
          <li class="item">
            <router-link to="">买家深度分析</router-link>
          </li>
          <li class="item">
            <router-link to="">采购产品分析</router-link>
          </li>
          <li class="item">
            <router-link to="">供应商分析</router-link>
          </li>
          <li class="item">
            <router-link to="">订制报告</router-link>
          </li>
          <li class="item">
            <router-link to="">跨采价值</router-link>
          </li>
          <li class="item">
            <router-link to="">关于特易</router-link>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  computed: {
    welcome(){
      let text = localStorage.getItem('username');
      if ( text === undefined || text === null ) {
        text = "";
      }
      return  `欢迎您,${text}！`;
    },
  },
  methods: {
    signout(){
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      this.$router.push({path:'/login',query:{}});
    },
  }
}
</script>

<style scoped>
  .top {
    width:100%;
  }
    .header{
      box-sizing: border-box;
      height:40px;
      width:100%;
      background:#e8940e;
      overflow: hidden;
    }
      .headerdiv{
        width:1100px;
        height:100%;
        margin:0 auto;
        line-height: 40px;
      }
        .left{
          display: inline-block;
          float:left;
          font: 12px/41px "宋体";
          color: #fff;
        }
        .return{
          display: inline-block;
          float:right;
          cursor: pointer;
          color: #84a7b7;
          font: 12px/41px "宋体";
        }
    .content{
      box-sizing: border-box;
      height:122px;
      width:100%;
      background:#e8940e;
      padding-top:33px;
      overflow: hidden;
    }
      .contentdiv{
        height:100%;
        width:1100px;
        margin:0 auto;
        display:flex;
      }
        .icon{
          width:250px;
        }
          .img {
            display:block;
            margin:0 auto;
            width:194px;
            height:52px;
            
          }
        .itemdiv{
          flex:1;
          display: flex;
          height:45px;
          line-height: 45px;
          text-align: center;
          background: url("../assets/images/nav_bg_3.jpg") no-repeat;
          background-size: 100%;
        }
          .item{
            width:100px;
          }
            a{
              color:#fff;
              cursor: pointer;
              font: 14px/45px "微软雅黑";
            }
</style>
