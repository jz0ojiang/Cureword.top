import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cureword',
    component: () => import('../views/cureword.vue'),
    meta: {
      title: "Curewords - 心灵鸡汤v2",
      content: {
        keywords: '心灵鸡汤,鸡汤语录,cureword,curewords,毒鸡汤,语言艺术治疗,鸡汤,毒鸡汤,毒鸡汤语录,毒鸡汤段子,毒鸡汤大全,鸡汤段子,鸡汤大全,网抑云',
        description: 'Curewords - 心灵鸡汤/毒鸡汤/网抑云 语录'
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue'),
    meta: {
      title: "关于 | Curewords - 心灵鸡汤v2",
      content: {
        keywords: '心灵鸡汤,鸡汤语录,cureword,curewords,毒鸡汤,语言艺术治疗,鸡汤,毒鸡汤,毒鸡汤语录,毒鸡汤段子,毒鸡汤大全,鸡汤段子,鸡汤大全,网抑云',
        description: 'Curewords - 心灵鸡汤/毒鸡汤/网抑云 语录'
      }
    }
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('../views/random.vue'),
    meta: {
      title: "随机鸡汤 | Curewords - 心灵鸡汤v2",
      content: {
        keywords: '心灵鸡汤,鸡汤语录,cureword,curewords,毒鸡汤,语言艺术治疗,鸡汤,毒鸡汤,毒鸡汤语录,毒鸡汤段子,毒鸡汤大全,鸡汤段子,鸡汤大全,网抑云',
        description: 'Curewords - 心灵鸡汤/毒鸡汤/网抑云 语录'
      }
    }
  },
  {
    path: '/submit',
    name: 'submit',
    component: () => import('../views/submit.vue'),
    meta: {
      title: "提交鸡汤 | Curewords - 心灵鸡汤v2",
      content: {
        keywords: '心灵鸡汤,鸡汤语录,cureword,curewords,毒鸡汤,语言艺术治疗,鸡汤,毒鸡汤,毒鸡汤语录,毒鸡汤段子,毒鸡汤大全,鸡汤段子,鸡汤大全,网抑云',
        description: 'Curewords - 心灵鸡汤/毒鸡汤/网抑云 语录'
      }
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
