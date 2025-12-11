<template>
  <div id="app">
    <AppHeader v-if="!$route.meta.hideLayout"></AppHeader>
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter v-if="!$route.meta.hideLayout"></AppFooter>
  </div>
</template>

<script>
import AppHeader from './modules/header/header.vue'
import AppFooter from './modules/footer/footer.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => ({}),
  created: async function () {},
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>
</style>
