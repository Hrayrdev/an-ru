<template>
  <div>
    <div class="app-header-info">
      <div class="app-header-info__inner">
        <app-header-info__data v-if="!isTablet"/>
        <app-header-info__data-tablet v-else/>
        <app-header-info__notifications/>
      </div>
    </div>
  </div>


</template>
<script setup>
import AppHeaderInfo__data from "@/components/app/header/app-header-info/app-header-info__data.vue";
import AppHeaderInfo__notifications from "@/components/app/header/app-header-info/app-header-info__notifications.vue";
import AppHeaderInfo__dataTablet from "@/components/app/header/app-header-info/app-header-info__data-mobile.vue";

import {useStore} from "vuex";
import {computed, onMounted} from "vue";

const store = useStore()

onMounted(() => {
  store.commit('setWidth', window.innerWidth)
})

const width = computed(() => {
  return store.getters.getWidth
})
const isTablet = computed(() => {
  return store.getters.isTablet
})


</script>
<style scoped lang="less">
@import "@/base";

.app-header-info {
  width: 100%;
  border-bottom: 1px rgba(@c-black, .1) solid;

  &__inner {
    padding: 10px;

   .container;
    display: flex;
    justify-content: space-between;
  }


}

@media (max-width: 900px) {
  .app-header-info__inner {
    padding: 8px 40px 8px 40px;
  }
}

@media (max-width: 500px) {
  .app-header-info__inner {
    padding: 8px 10px 8px 10px;

  }
}

</style>