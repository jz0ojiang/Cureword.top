<template>
  <el-card class="box-card"><p class="box" @click="backtoindex()">{{ message }}</p></el-card>
</template>

<script>
export default {
  el: '.box',
  data () {
    return {
      message: null,
      loading: true,
      errored: false
    }
  },
  methods: {
    backtoindex() {
      this.$router.push({name:'Cureword'});
    },
  },

  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.$notify.info({
      title: '提示',
      dangerouslyUseHTMLString: true,
      message: '浏览器中点击鸡汤文字即可回到主页<br />刷新页面重新获取鸡汤',
      showClose: false,
      duration: 2000
    });
    axios
      .get(this.Common.apiAddress + this.Common.random)
      .then(response => {
        this.message = response.data.words
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
}
</script>