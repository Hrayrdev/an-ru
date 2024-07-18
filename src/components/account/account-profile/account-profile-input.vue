<template>
  <div class="account-profile-input">
    <div class="account-profile-input__avatar-wrapper">
      <div class="account-profile-input__avatar">
        <div class="account-profile-input__avatar-photo">
          <img class="account-profile-input__avatar-photo-img" src="@/assets/app-account-list/avatar.png" alt="">
        </div>
        <div class="account-profile-input__avatar-info">Аватар в формате jpg или png. Максимальный размер файла до 10
          МБ
        </div>
      </div>
      <div class="account-profile-input__avatar-button">
        <div class="account-profile-input__avatar-button-inner">
          <div class="account-profile-input__avatar-button-logo"><img src="@/assets/app-account-list/add.png" alt="">
          </div>
          <div class="account-profile-input__avatar-button-text">Загрузить фото</div>
        </div>
      </div>
    </div>

    <div class="account-profile-input__fields-wrapper">
      <div class="account-profile-input__fields">
        <ui-input :placeholder="'Имя'"/>
      </div>
      <div class="account-profile-input__fields">
        <ui-input :placeholder="'Фамилия'"/>
      </div>
    </div>

    <div class="account-profile-input__save-button">
      <ui-button :button-type="1" :button-text="'Сохранить изменения'"/>
    </div>

  </div>

</template>

<script setup>

import UiInput from "@/components/ui/ui-input.vue";
import UiButton from "@/components/ui/ui-button.vue";
</script>


<style scoped lang="less">
@import "@/base";

.account-profile-input {
  background-color: white;

  padding: 30px;
  margin-right: 10px;
  border-radius: 20px;

  .tablet({
    padding: 0;
  });
  .laptop({
    margin-bottom: 10px;
  });
  &__avatar-wrapper {
    display: flex;
    margin-bottom: 16px;
  }

  &__avatar {
    margin-right: 60px;
    display: flex;
    align-items: center;


    &-photo {
      width: 60px;
      margin-right: 20px;
    }

    &-photo-img {
      .img-auto
    }

    &-info {
      font-family: "Open Sans";
      font-size: 12px;
      color: rgba(@c-black, .6);
      max-width: 270px;
    }
  }


  &__avatar-button {
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
    margin-bottom: 12px;
  }

  &__fields:last-child {
    margin-bottom: 45px;
  }

  &__save-button {
    height: 44px;
    max-width: 210px;
  }

}


</style>