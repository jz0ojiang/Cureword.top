<template>
  <div class="submit">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" @submit.native.prevent class="rulefrom">
      <el-form-item label="鸡汤内容" prop="message">
        <el-input v-model="ruleForm.message" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
        v-model="ruleForm.email"
        placeholder="选填 审核通过后(可能)将以邮件形式通知">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          message: '',
          email: ''
        },
        rules: {
          message: [
            { required: true, message: '请输入鸡汤内容', trigger: 'blur' },
            { min: 5, max: 150, message: '长度在 5 到 150 个字符之内', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('upload:'+this.ruleForm.message);
            this.$notify({
              title: '提交成功',
              message: '骑手正在配送鸡汤中...',
              type: 'success'
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
