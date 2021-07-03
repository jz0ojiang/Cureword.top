<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-main>
      <el-card class="about-box">
        <div class="title">
          <el-avatar shape="square" :size="70" src="https://gitee.com/im0o/photobed/raw/master/img/20200727163358.png"></el-avatar>
          <h1>关于 Curewords.top</h1>
        </div>
        <p>心灵鸡汤v2更新！优化排版 新增<b>提交鸡汤</b>功能</p>
        <p>[2021年7月前] 本站语录大部分收录于 MCBBS论坛中 <el-link href="https://www.mcbbs.net/thread-1105827-1-1.html" title="原帖可能因时间久远关闭" type="primary">每日一水心灵鸡汤</el-link> 帖子 有效语录</p>
        <p>如需投稿 请前往提交鸡汤页面进行投稿提交 投稿视为遵守使用WTFPL开源协议</p>
        <h3>其他链接</h3>
        <a href="https://im0o.top"><el-button type="primary" round>站长主页</el-button></a>
        <el-divider direction="vertical"></el-divider>
        <a href="https://afdian.net/@jz0ojiang"><el-button type="primary" round>爱发电</el-button></a>
        <el-divider direction="vertical"></el-divider>
        <a href="https://github.com/0ojixueseno0/go-cureword"><el-button type="primary" round>Github</el-button></a>
      </el-card>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style scoped>
  .about-box {
    padding: 20px;
    margin: 20px;
    text-align: left;
  }
  .title {
    display: inline-flex;
    white-space: nowrap;
  }
  h1 {
    margin-left: 30px;
  }
</style>