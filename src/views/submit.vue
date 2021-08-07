<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-main>
      <el-card class="submit-box">
        <h1>提交鸡汤</h1>
        <el-alert
        title="提交成功的鸡汤不定期审核，审核通过后即可在主页中看到"
        description="提交视为遵守WTFPL协议，恶意提交无效数据将封禁您的IP地址"
        type="info"
        show-icon
        :closable="false"
        class="alert">
        </el-alert>
        <Form />
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'submit',
  components: {
    Header,
    Form
  }
}
</script>

<style scoped>
.submit-box {
  padding: 20px;
  margin: 20px;
  text-align: left;
}
h1 {
  margin-top: 0;
}
.alert {
  margin-bottom: 20px;
}
</style>