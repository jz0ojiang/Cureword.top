<template>
  <div class="words">
    <div class="content" v-loading="loading">
      <el-card v-for="item in message" :key="item" class="text-card">{{ item }}</el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [],
      loading: true,
      errored: false
    }
  },
  methods: {

  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get(this.Common.apiAddress+this.Common.getword)
      .then(response => {
        this.message = response.data.words.reverse()
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
}
</script>

<style scoped>
.text-card {
  margin-top: 15px;
  padding: 10px;
}
</style>