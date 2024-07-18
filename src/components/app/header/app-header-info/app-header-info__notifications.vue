<template>
  <div class="app-header-info__notifications">
    <div class="app-header-info__notifications-inner">
      <div class="app-header-info__notifications-logos-container" style="">
        <div class="app-header-info__notifications-likes">
          <div><img
              class="app-header-info__notifications-logo"
              src="@/assets/app-header-info/like.png" alt=""></div>
        </div>
        <div class="app-header-info__notifications-messages">
          <div><img
              class="app-header-info__notifications-logo"
              src="@/assets/app-header-info/message.png" alt=""></div>
        </div>
        <div class="app-header-info__notifications-another">
          <div><img
              class="app-header-info__notifications-logo"
              src="@/assets/app-header-info/notification.png" alt=""></div>
        </div>
      </div>
      <div class="app-header-info__notifications-entrance">
        <div class="app-header-info__notifications-avatar-logo" v-if="!store.getters.isPhone">
          <img class="app-header-info__notifications-logo"  v-if="store.getters.isTablet "    src="@/assets/app-header-info/avatar-active.png" alt="">
          <img class="app-header-info__notifications-logo"  v-else   src="@/assets/app-header-info/avatar.png" alt="">
        </div>
        <div v-if="store.getters.isTablet"><img class="app-header-info__notifications-logo" src="@/assets/app-header-info/menu.png" alt=""></div>

        <div v-else>Вход и регистрация</div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {computed} from "vue";
import {mapGetters, useStore} from "vuex";

const store = useStore()
const width = computed(() => {
  return store.getters.getWidth
})




</script>
<style scoped lang="less">
@import "@/base";
.app-header-info__notifications {
  display: flex;
  justify-content: flex-end;

  &-inner {

    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 15px;
    padding-left: 5px;
    .tablet({
      gap: 30px;
      margin-left: 25px;
    });
    .mobile({
      gap: 20px;
      margin-left: 10px;
      grid-template-columns: 110px 31px;
    })
  }

  &-logos-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }


  &-logo {
    .img-auto
  }


  &-entrance {
    gap: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .mobile({
      justify-content: flex-end;
    })
  }

  &-avatar-logo {
    margin-right: 10px;
  }

}






</style>