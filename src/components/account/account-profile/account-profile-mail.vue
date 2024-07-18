<template>
  <div class="account-profile-mail">
      <div class="account-profile-mail__status">
        <div class="account-profile-mail__status-inner">
        Не подтверждена
        </div>
      </div>
      <div class="account-profile-mail__info">Электронная почта</div>
      <div class="account-profile-mail__input">
        <ui-input  :placeholder="'user@yandex.ru'"   />
      </div>
      <div class="account-profile-mail__send-button">Отправить ссылку для подтверждения</div>
  </div>
</template>

<script setup>

import UiInput from "@/components/ui/ui-input.vue";
</script>

<style scoped lang="less">
@import "@/base";

.account-profile-mail {
  padding: 24px;
  .mobile({
    padding: 16px;
  });



  &__status {
    &-inner{
      padding: 5px;
      background-color: rgba(@c-black, .05);
      font-size: 12px;
      display: inline;
      border-radius: 20px;
    }

    margin-bottom: 5px;
  }

  &__info {
    font-size: 14px;
    font-family: "Open Sans";
    color: rgba(@c-black, .6);
    margin-bottom: 12px;
  }

  &__input {
    margin-bottom: 12px;

  }

  &__send-button {
    color: @c-orange;
    font-size: 14px;
    font-family: "Open Sans";
  }




}



</style>