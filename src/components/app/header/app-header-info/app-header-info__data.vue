<template>
  <div class="app-header-info__data" v-if="width>900">

    <div class="app-header-info__data-logo-wrapper">
      <div class="app-header-info__data-logo"><img src="@/assets/app-header-info/location.png" alt=""></div>
      <div>Московская область</div>
    </div>
    <div class="app-header-info__data-logo-wrapper">
      <div class="app-header-info__data-logo"><img src="@/assets/app-header-info/phone.png" alt=""></div>
      <div>+7 (495) 642-52-89</div>
    </div>
    <div class="app-header-info__data-logo-wrapper">
      <div class="app-header-info__data-times-inner">
        <div class="app-header-info__data-logo">
          <img src="@/assets/app-header-info/watch.png" alt="">
        </div>
        <div>звоните в любое время</div>
      </div>
    </div>
  </div>




</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()
const width = computed(() => {
  return store.getters.getWidth
})
</script>


<style scoped lang="less">
@import "@/base";
.app-header-info__data {
  font-size: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr 35.14%;
  gap: 10px;


  &-logo {
    margin-right: 5px;
    display: flex;
  }

  &-logo-wrapper {
    display: flex;
    align-items: center;
  }

  &-times-inner {
    color: @c-orange;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: 15px;
    background-color: rgba(@c-orange, .1);
  }

}

@media (max-width: 900px) {
  .app-header-info__data {
    display: block;
    &-ui-table{
    }
  }
}
</style>