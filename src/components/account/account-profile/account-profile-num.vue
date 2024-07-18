<template>

  <div class="account-profile-num">
    <div class="account-profile-num__inner">
      <div class="account-profile-num__info">Номер телефона</div>
      <div class="account-profile-num__phone">+7 988 - 111 - 11 - 11</div>
      <div class="account-profile-num__update-button">Изменить</div>
    </div>
  </div>


</template>


<script setup>

</script>


<style scoped lang="less">
@import "@/base";

.account-profile-num {
  padding: 24px;
  .mobile({
    padding: 16px;
  });


  &__info {
    color: rgba(@c-black, .6);
    font-size: 14px;
    margin-bottom: 10px;
  }

  &__phone {
    font-family: "Open Sans";
    margin-bottom: 10px;
    color: @c-black;
  }

  &__update-button {
    font-size: 14px;
    font-family: "Open Sans";
    color: @c-orange;
  }


}


</style>