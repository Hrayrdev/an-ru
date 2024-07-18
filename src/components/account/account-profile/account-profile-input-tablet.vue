<template>
  <div class="account-profile-input-tablet">
    <div class="account-profile-input-tablet__inner">

      <div class="account-profile-input-tablet__avatar-wrapper">

        <div class="account-profile-input-tablet__avatar">
          <div class="account-profile-input-tablet__avatar-photo">
            <img class="account-profile-input-tablet__avatar-photo-img" src="@/assets/app-account-list/avatar.png"
                 alt="">
          </div>
          <div class="account-profile-input-tablet__avatar-info">Аватар в формате jpg или png. Максимальный размер файла
            до
            10
            МБ
          </div>
        </div>
        <div class="account-profile-input-tablet__avatar-button">
          <div class="account-profile-input-tablet__avatar-button-inner">
            <div class="account-profile-input-tablet__avatar-button-logo" v-if="!isMobile"><img
                src="@/assets/app-account-list/add.png"
                alt="">
            </div>
            <div class="account-profile-input-tablet__avatar-button-text">Загрузить</div>
          </div>
        </div>
      </div>

      <div class="account-profile-input-tablet__fields-wrapper">
        <div class="account-profile-input-tablet__fields ">
          <ui-input :placeholder="'Имя'"/>
        </div>
        <div class="account-profile-input-tablet__fields">
          <ui-input :placeholder="'Фамилия'"/>
        </div>
      </div>

      <div class="account-profile-input-tablet__account-info">
        <account-profile-info/>
      </div>
      <div class="account-profile-input-tablet__save-button-wrapper">
        <div class="account-profile-input-tablet__save-button">
          <ui-button :button-type="1" :button-text="'Сохранить изменения'"/>

        </div>
      </div>

    </div>
  </div>


</template>


<script setup>

import UiInput from "@/components/ui/ui-input.vue";
import AccountProfileInfo from "@/components/account/account-profile/account-profile-info.vue";
import UiButton from "@/components/ui/ui-button.vue";
import {useStore} from "vuex";
import {computed} from "vue";


const store = useStore()
const isMobile = computed(() => {
  return store.getters.isPhone
})
const width = computed(() => {
  return store.getters.getWidth
})
</script>


<style scoped lang="less">
@import "@/base";

.account-profile-input-tablet {
  background-color: white;
  border-radius: 20px;

  .mobile({
    padding: 20px;
  });

  &__island{
    display: flex;
    justify-content: center;
    &-inner{
      background-color: rgba(@c-black, .2);
      width: 58px;
      border-radius: 20px;
      height: 5px;
    }

    margin-bottom: 50px;

  }

  &__inner {
    .mobile({
    });

    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    .mobile({
      bottom: 0;
    })
  }


  &__avatar-wrapper {
    .mobile({
      flex-direction: column;

    });
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
  }


  &__avatar {
    display: flex;
    align-items: center;
    &-photo {
      width: 60px;
      margin-right: 10px;
    }

    &-photo-img {
      .img-auto
    }

    &-info {
      font-family: "Open Sans";
      font-size: 12px;
      color: rgba(@c-black, .6);
      max-width: 240px;
      .mobile({
        max-width: 190px;

      })
    }
  }


  &__avatar-button {

    .mobile({
      padding-left: 80px;

    });
    display: flex;
    align-items: center;

    &-inner {
      display: flex;
      padding: 10px;
      background-color: @c-black;
      color: white;
      border-radius: 10px;
      font-size: 14px;
    }

    &-logo {
      margin-right: 10px;

    }

    &-text {
    }
  }

  &__fields-wrapper {
  }

  &__fields:first-child {
    height: 30px;
    margin-bottom: 50px;
  }

  &__fields:last-child {
    height: 30px;
    margin-bottom: 45px;
  }

  &__account-info {
    margin-bottom: 100px;
    .mobile({
    margin-bottom: 100px;

    })
  }


  &__save-button {

    height: 40px;
    padding: 20px 40px 0 40px;
    .mobile({
      height: 60px;
      padding: 20px;

    })

  }

  &__save-button-wrapper {
    height: 100px;
    z-index: 99;
    margin: auto;
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: white;
    left: 0;
  }

}


@media (max-width: 385px) {
  .account-profile-input-tablet__avatar-wrapper{
  }
}

</style>