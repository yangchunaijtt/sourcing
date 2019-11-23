<template>
    <div id="add">
      <span v-if="!power">没有权限</span>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" v-if="power">
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="pwd">
          <el-input v-model="ruleForm.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "Add",
      data(){
          return {
            ruleForm: {
              userName: '',
              pwd:""
            },
            rules: {
              name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
              ],
              pwd: [
                { required: true, message: '请输入密码', trigger: 'blur' },
              ],
            },
            power:false
          }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      created () {
        let user = localStorage.getItem("user");
        if ( user === "admin") {
          this.power = true ;
        }else {
          this.power = false ;
        }
      },
    }
</script>

<style scoped>
  #add{
    padding-top: 50px;
    padding-left: 100px;
  }
.el-input{
  width: 500px;
}
</style>
