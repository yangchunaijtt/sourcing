<template>
    <div id="supplier">
      <top></top>

        <div class="w1100">
          <div class="supplier">
            <span @click="index=0" :class="{active:index===0}">竞争分析</span>
            <span @click="index=1" :class="{active:index===1}">企业分析</span>
        </div>
          <div class="supplier1" v-show="index===0">
             <table>
            <tr>
              <td ><span>公司名称</span></td>
              <td><input type="text" v-model="suplierForm.name"></td>
              <td><span>关键字</span></td>
              <td><input type="text" v-model="suplierForm.product"></td>
              <td><span>产品分类</span></td>
              <td>
                <select v-model="suplierForm.product">
                  <option >请选择</option>
                  <option value="电钻">电钻</option>
                  <option value="电锯">电锯</option>
                  <option value="电锤">电锤</option>
                  <option value="电刨">电刨</option>
                  <option value="往复锯">往复锯</option>
                  <option value="曲线锯">曲线锯</option>
                  <option value="电动链锯">电动链锯</option>
                  <option value="电动圆锯">电动圆锯</option>
                  <option value="电动扳手、螺丝刀">电动扳手、螺丝刀</option>
                  <option value="其他类电动工具">其他类电动工具</option>
                  <option value="电动角磨、磨光、砂光机">电动角磨、磨光、砂光机</option>
                </select>
              </td>
              <td><span>目的国</span></td>
              <td>
                <input type="text" v-model="suplierForm.country">
              </td>
              <td class="search" @click="selectProduct"><span>查询</span></td>
            </tr>
          </table>
          </div>
          <div class="supplier1" v-show="index===1">
            <table>
              <tr>
                <td ><span>公司名称</span></td>
                <td><input type="text" v-model="companyForm.name"></td>
                <td><span>采购国家</span></td>
                <td>
                  <input type="text" v-model="companyForm.country">
                </td>

                <td class="search"><span>查询</span></td>
              </tr>
            </table>
          </div>
      </div>
      <supplierList v-show="showList" :listData="listData"></supplierList>
      <foot></foot>
    </div>
</template>


<script>
  import top from '../components/top';
  import foot from '../components/footer';
  import https from "../utils/axios.js"
  import supplierList from "@/components/supplierList.vue"
  import axios from 'axios';

    export default {
      name: "Supplier",
      components: {
        supplierList,
        top,
        foot
      },
      data(){
          return {
            suplierForm:{
              name:"",
              product:"请选择",
              country:"",
            },
            companyForm:{
              name:"",
              country:"",
            },
            index:0,
            showList:false,
            listData:[],
          }
      },
      methods: {
        selectProduct(){
          /**
           * 只用公司名称一个查的api的条件
           * 1：公司名称填写了，其他为空。
           * 2：公司名称填写了，其他也存在
           * 所以：只要公司名称在，就查单的。
           */
          let companyName_url ="http://119.3.71.137:8081/company/companyName";
          let companyNameByString_url  = "http://119.3.71.137:8081/company/companyNameByString";
          let companyNameByString_num = 0;
          let tocken = localStorage.getItem("Token");
          if ( this.suplierForm.name ===""&&  this.suplierForm.country ==="" && this.suplierForm.product ==="请选择") {
            this.$message({
                  showClose: true,
                  message: `请填写查询条件信息`,
                  type: 'warning'
            });
            return;
          }
           if (  this.suplierForm.name !=="" ){
             //http://119.3.71.137:8081/company/companyName?companyName=%E5%88%9A%E5%88%9A
           
            let companyName_data = {
              // authorization:"Bearer",
              companyName:this.suplierForm.name
            }
            https.fetchPost(companyName_url,companyName_data).then( (res) => {
               console.log("单数查询信息",res.data);
               if (res.data.code === "200") {

                 this.listData = res.data.content.company;
                 this.showList = true;
               }else {
                 this.showList = false;
                 this.$message({
                  showClose: true,
                  message: `查询出现错误，请稍候在试，${null === res.data.message?"":res.data.message}`,
                  type: 'error'
                });
               }
             }).catch((err) => {
               this.showList = false;
                this.$message({
                  showClose: true,
                  message: `网络出错，请重试，${null === err.data.message||undefined === err.data.message?"":err.data.message}`,
                  type: 'error'
                });
             })
          }else {
            // http://119.3.71.137:8081/company/companyNameByString?companyName=%E5%85%89%E5%A4%A7&product=%22%22&countries=%22%22&num=5
              let newproduct = "";

              if (this.suplierForm.product ==="请选择" || this.suplierForm.product ==="" ) {
                  newproduct ="";
              }else {
               
               newproduct = this.suplierForm.product;
              }
              let companyNameByString_data = {
                // authorization:"Bearer",
                num:0,
                companyName:'',
                product:newproduct,
                countries:this.suplierForm.country
              };
              
             
              https.fetchPost(companyNameByString_url,companyNameByString_data).then( (res) => {
               console.log("查询信息",res.data);
               if (res.data.code === "200") {
                 this.listData = res.data.content.company;
                 this.showList = true;
               }else {
                 this.showList = false;
                 this.$message({
                  showClose: true,
                  message: `查询出现错误，请稍候在试，${null === res.data.message?"":res.data.message}`,
                  type: 'error'
                });
               }
             }).catch((err) => {
               this.showList = false;
               this.$message({
                  showClose: true,
                  message: `网络出错，请重试，${null === err.data.message||undefined === err.data.message?"":err.data.message}`,
                  type: 'error'
                });
             })
          }
        }
      },
    }
</script>

<style scoped>
  .active{
    color: #2a78b4!important;
  }
  .w1100{
    width: 1100px;
    margin: 0 auto;
  }
  .supplier{
    width: 1040px;
    padding: 15px 5px;
    border-top: 1px solid #fff;
    background:#e0e2e3 ;

  }
  .supplier span{
    display: inline-block;
    padding: 0px 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .supplier span:hover{
    color: #2a78b4;
  }
#supplier .supplier1{
    width: 1040px;
    padding: 15px 10px;
    border-top: 1px solid #fff;
    background:#e0e2e3 ;
  }
#supplier table tr{
    line-height: 40px;
  }
#supplier .supplier1 table tr td{
    text-align: center;
    padding-right: 5px;
  }

  #supplier .supplier1 input{
    width: 110px;
    height: 30px;
  }
#supplier .supplier1 select{
    width: 110px;
    height: 30px;
  }
  #supplier .supplier1 .search{
    cursor: pointer;
    background: #319ed7;
    color: #ffffff;
    margin-left: 5px;
    display: inline-block;
    width: 50px;
  }
</style>
