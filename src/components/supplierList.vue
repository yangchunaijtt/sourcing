<template>
  <div class="list">
    <div class="content">
      <div class="el-form">
           <el-table
            :data="listData"
            border
            style="width:100%">
            <el-table-column
              prop="companyName"
              label="公司名称"
              width="440">
            </el-table-column>
            <el-table-column
              prop="companyNum"
              label="公司数量"
              width="198">
            </el-table-column>
            <el-table-column
              prop="companyRanking"
              label="公司资金(万)"
              width="198">
            </el-table-column>
            <el-table-column
              prop="id"
              label="公司排名"
              width="198">
            </el-table-column>
          </el-table>
      </div>
      <div class="el-page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="listTotal"
          :page-size="listParams.size"
          :current-page="listParams.page"
          >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"supplierList",
  props:{
    listData:{
      type:Array,
      default:[]
    },
  },
  data () {
    return {
      listTotal:10,
      listParams:{
        page:1,
        size:10,
      }
    }
  },
}
</script>
<style lang="stylus" scoped>
  .list
    width:1100px 
    margin:0 auto 
    .content
      padding: 20px 30px 10px 30px
      .el-form
        padding-top:20px
      .el-page
        margin-top:20px
        padding: 20px 0px;
        TEXT-ALIGN: center;
        font: 11px/16px Arial, Helvetica, sans-serif;
        padding-top: 0px;
</style>
