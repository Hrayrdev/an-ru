<template>

  <div class="account-profile-list">
    <div class="account-profile-list__inner">
      <div class="account-profile-list__header">
        <div class="account-profile-list__user">
          <div class="account-profile-list__user-avatar">
            <img class="account-profile-list__user-avatar-img" src="@/assets/app-account-list/avatar.png" alt="">
          </div>
          <div class="account-profile-list__user-info">
            <div class="account-profile-list__user-name">Имя Фамилия</div>
            <div class="account-profile-list__user-id">ID 99565256</div>
          </div>
        </div>
      </div>

      <div class="account-profile-list__body">
        <div class="account-profile-list__menu">
          <router-link  :to="item.route" class="account-profile-list__item" @click="openPages(item)"   v-for="item in accountList">
            <div class="account-profile-list__item-icon">
              <img class="account-profile-list__item-icon-img" :src="require(`@/${item.icon}`)" alt="">
            </div>
            <div class="account-profile-list__item-label"
                 :class="{'account-profile-list__current-item-label' : item.current}">{{ item.label }}
            </div>
          </router-link>
        </div>
      </div>

    </div>
  </div>


</template>


<script setup>
import {ref} from "vue";
import router from "@/router";

const emit = defineEmits([
  'pagesId'
])

const accountList = ref([
  {label: 'Сводка', icon: 'assets/app-account-list/summary.png', current: false, id: 1, route: '/summary',},
  {label: 'Подписка на премиум', icon: 'assets/app-account-list/premium.png', current: false, id: 2, route: '/',},
  {label: 'Профиль', icon: 'assets/app-account-list/profile.png', current: false, id: 3, route: '/profile',},
  {label: 'Избранное', icon: 'assets/app-account-list/like.png', current: false, id: 4, route: '/',},
  {label: 'Сообщения', icon: 'assets/app-account-list/chats.png', current: false, route: '/'},
  {label: 'Уведомления', icon: 'assets/app-account-list/notification.png', current: false, route: '/'},
  {label: 'Жалобы', icon: 'assets/app-account-list/complaint.png', current: false, route: '/'}
])

function openPages(item) {

  accountList.value.forEach((element)=>{
    element.current = false
  })
  item.current = true
}


</script>


<style scoped lang="less">
@import "@/base";

.account-profile-list {

  &__inner {
  }

  &__header {
  }

  &__user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(@c-black, .1);

    &-avatar {
      width: 60px;
      margin-right: 10px;
    }

    &-avatar-img {
      .img-auto
    }

    &-info {
      font-size: 14px;
      font-family: "Open Sans";
    }

    &-name {
    }

    &-id {
      color: rgba(@c-black, .6);
    }
  }


  &__body {
    border-bottom: 1px solid rgba(@c-black, .1);

  }

  &__menu {
    padding: 5px 0 5px 0;
  }

  &__item {
    text-decoration: none;
    display: flex;
    margin-bottom: 10px;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
    }

    &-icon-img {
    }

    &-label {
      color: rgba(@c-black, .6);
      font-family: "Open Sans";
    }
  }


}

.account-profile-list__current-item-label {
  color: @c-black;

}
</style>