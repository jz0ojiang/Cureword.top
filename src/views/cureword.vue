<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-main>
      <el-row :gutter="10">
        <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="4"><br /></el-col>
        <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="16"><Words /></el-col>
        <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="4"><br /></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Words from '@/components/Words.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Words
  }
}
</script>
