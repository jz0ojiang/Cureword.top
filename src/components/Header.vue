<template>
  <div class="Header">
    <div class="container">
      <div class="bg"></div>
      <el-row :gutter="10">
          <el-col :xs="3" :sm="2" :md="2" :lg="1" :xl="0"></el-col>
          <el-col :xs="13" :sm="8" :md="6" :lg="8" :xl="8">
            <h1 class="title">CureWords - 心灵鸡汤</h1>
          </el-col>
          <el-col :xs="0" :sm="10" :md="14" :lg="14" :xl="16">
            <div class="navmenu">
              <el-button type="text" @click="jumpRouter('Cureword')">鸡汤主页</el-button>
              <el-divider direction="vertical"></el-divider>
              <el-button type="text" @click="jumpRouter('Random')">随机鸡汤</el-button>
              <el-divider direction="vertical"></el-divider>
              <el-button type="text" @click="jumpRouter('submit')">提交鸡汤</el-button>
              <el-divider direction="vertical"></el-divider>
              <el-button type="text" @click="jumpRouter('About')">关于</el-button>
            </div>
          </el-col>
          <el-col :xs="8" :sm="0" :md="0" :lg="0" :xl="0">
            <el-dropdown @command="jumpRouter" trigger="click">
              <span class="el-dropdown-link el-icon-s-fold">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="Cureword">鸡汤主页</el-dropdown-item>
                <el-dropdown-item command="Random">随机鸡汤</el-dropdown-item>
                <el-dropdown-item command="submit">提交鸡汤</el-dropdown-item>
                <el-dropdown-item command="About">关于</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :xs="0" :sm="4" :md="2" :lg="1" :xl="0"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jumpRouter(router) {
      this.$router.push({name:router});
      console.log('Jump to '+router)
    }
  }
}
</script>

<style scoped>
  .bg {
    float: left;
    width: 100vw;
    height: 10px;
    background: white;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: -1;
  }
  .Header {
    width: 98%;
    z-index: 100;
    position: fixed;
    text-align: center;
    background-color: #ffffff;
  }
  .container {
    width: 100%;
    height: 71px;
    padding: 0;
    margin: 0 auto;
    text-align: center;
  }
  .title {
    white-space: nowrap;
    padding-left: 20px;
  }
  .el-row {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .el-col {
    border-radius: 4px;
  }
  .el-dropdown {
    top: 25px;
    left: 50px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    font-size: 20px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .navmenu {
    display: flex;
    margin-left: 30%;
  }
  .el-button {
    margin-top: 16px;
    font-size: 18px;
  }
  .el-divider {
    margin-top: 30px;
  }
</style>