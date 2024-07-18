<template>
  <div class="account-profile-list-tablet">
    <div class="account-profile-list-tablet__inner">
      <div class="account-profile-list-tablet__header">
        <div class="account-profile-list-tablet__avatar">
          <img class="account-profile-list-tablet__avatar-img" src="@/assets/app-account-list/avatar.png" alt="">
        </div>
        <div class="account-profile-list-tablet__user">
          <div class="account-profile-list-tablet__user-name"><strong>Константин Константинов</strong></div>
          <div class="account-profile-list-tablet__user-id">ID 99565256</div>
        </div>
      </div>
      <div class="account-profile-list-tablet__body">
        <div class="account-profile-list-tablet__menu">
          <router-link :to="item.route" class="account-profile-list-tablet__item" @click="openPages(item)" v-for="item in profileList">
            <div class="account-profile-list-tablet__item-inner" >
              <div class="account-profile-list-tablet__item-icon">
                <img class="account-profile-list-tablet__item-icon-img" :src="require(`@/${item.icon}`)" alt="">
              </div>
              <div class="account-profile-list__item-label"
                   :class="{'account-profile-list__current-item-label' : item.current}">{{ item.label }}
              </div>
            </div>
            <div class="account-profile-list-tablet__item-arrow">
              <img src="@/assets/app-account-list/arrow-right.png" alt="">
            </div>
          </router-link>
        </div>
      </div>


    </div>
  </div>


</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits([
  'pagesId'
])
const profileList = ref([
  {label: 'Сводка', icon: 'assets/app-account-list/summary.png', id: 1, route:'summary',},
  {label: 'Подписка на премиум', icon: 'assets/app-account-list/premium.png', id: 2, route:'',},
  {label: 'Профиль', icon: 'assets/app-account-list/profile.png', id: 3, route:'profile',},
  {label: 'Избранное', icon: 'assets/app-account-list/like.png', id: 4, route:'',},
  {label: 'Сообщения', icon: 'assets/app-account-list/chats.png', id: 5, route:'',},
  {label: 'Уведомления', icon: 'assets/app-account-list/notification.png', id: 6, route:'',},
  {label: 'Жалобы', icon: 'assets/app-account-list/complaint.png', id: 7, route:'',}
])

function openPages(item) {
emit('pagesId', item.route)
}


</script>


<style scoped lang="less">
@import "@/base";

.account-profile-list-tablet {

  &__inner {
  }

  &__header {
    background-color: white;

    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 40px;
  }

  &__avatar {
    width: 56px;
    margin-right: 20px;

    &-img {
    }
  }


  &__user {
    font-family: "Open Sans";

    &-name {
      font-size: 18px;
    }

    &-id {
      color: rgba(@c-black, .6);
    }
  }

  &__body {

  }

  &__menu {
    background-color: white;
    border-radius: 20px;
  }

  &__item {
text-decoration: none;
    color: black;

    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(@c-black, .1);


    &-inner {
      display: flex;
      align-items: center
    }

    &-icon {
      width: 24px;
      margin-right: 10px;
      display: flex;

      &-img {
        .img-auto
      }
    }

    &-label {

    }

    &-arrow {
      display: flex;
    }
  }


}


</style>