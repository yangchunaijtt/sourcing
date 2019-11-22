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
              <td><input type="text" v-model="suplierForm.keywords"></td>
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
              <td><span>交易时间从</span></td>
              <td>
                <el-date-picker
                  v-model="suplierForm.time1"
                  type="date"
                  placeholder="选择日期" style="width: 135px">
                </el-date-picker></td>
              <td style="width: 40px"><span>到</span></td>
              <td>
                <el-date-picker
                  v-model="suplierForm.time2"
                  type="date"
                  placeholder="选择日期" style="width: 135px">
                </el-date-picker></td>
              <td class="search"><span>查询</span></td>
            </tr>
            <tr>
              <td><span>出口地区</span></td>
              <td>
                <input type="text" v-model="suplierForm.address">
              </td>
              <td><span>目的国</span></td>
              <td>
                <input type="text" v-model="suplierForm.country">
              </td>
              <td><input type="checkbox" v-model="suplierForm.check" style="width: 16px;margin-top: 6px;float: left;">
                <span style="font-size: 13px">去除物流企业</span></td>
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
                <td><span>交易时间从</span></td>
                <td>
                  <el-date-picker
                    v-model="companyForm.time1"
                    type="date"
                    placeholder="选择日期" style="width: 135px">
                  </el-date-picker></td>
                <td style="width: 40px"><span>到</span></td>
                <td>
                  <el-date-picker
                    v-model="companyForm.time2"
                    type="date"
                    placeholder="选择日期" style="width: 135px">
                  </el-date-picker></td>
                <td class="search"><span>查询</span></td>
              </tr>
            </table>
          </div>
      </div>
      <foot></foot>
    </div>
</template>

<script>
  import top from '../components/top';
  import foot from '../components/footer';
    export default {
        name: "Supplier",
      data(){
          return {
            suplierForm:{
              name:"",
              time1:"",
              time2:"",
              product:"请选择",
              keywords:"",
              address:"",
              country:"",
              check:true
            },
            companyForm:{
              name:"",
              country:"",
              time1:"",
              time2:"",
            },
            index:0
          }
      },
      components:{
          top,
        foot
      }
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
