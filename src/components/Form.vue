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
            axios({
              method: 'post',
              url: this.Common.submiturl,
              data: JSON.stringify(this.ruleForm),
            })
            .then((response) => {
              if (response.status == 200 && response.data.code == 200) {
                  this.$notify({
                    title: '提交成功',
                    message: '骑手正在配送鸡汤中...',
                    type: 'success'
                  });
                  // window.location.reload();
                } else {
                  if (response.data.code == 2001) {
                    this.$notify({
                      title: '提交失败',
                      message: '数据库连接出错 请联系站长处理',
                      type: 'error'
                    });
                  } else if (response.data.code == 3001) {
                    this.$notify({
                      title: '提交失败',
                      message: '呀，鸡汤在路上撒了...',
                      type: 'error'
                    });
                  } else if (response.data.code == 4001) {
                    this.$notify({
                      title: '提交失败',
                      message: '这碗鸡汤的配方似乎已经存在了',
                      type: 'error'
                    });
                  } else if (response.data.code == 4002) {
                    this.$notify({
                      title: '提交失败',
                      message: '鸡汤满啦，再怎么送也放不下了',
                      type: 'error'
                    });
                  }
                  console.log(response.data.info);
                }
            }).catch(function (error) {
              console.log(error);
            });
            
          } else {
            console.log('error submit!!');
            return false;
          }
          setTimeout(this.resetForm, 1000);
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
