<template>

  <div class="account-profile-info">
    <div class="account-profile-info__inner">
      <account-profile-num/>
    </div>
    <div class="account-profile-info__inner">
      <account-profile-mail/>
    </div>

  </div>

</template>

<script setup>

import AccountProfileNum from "@/components/account/account-profile/account-profile-num.vue";
import AccountProfileMail from "@/components/account/account-profile/account-profile-mail.vue";
</script>

<style scoped lang="less">
@import "@/base";

.account-profile-info {
  display: flex;
  flex-direction: column;
  
  .tablet({
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  })



}

.account-profile-info__inner {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: white;
  .tablet({
    border: 1px solid rgba(@c-black, .1);
  })
}

.account-profile-info__inner:first-child {
  .window({
    margin-bottom: 10px;
  });
}

@media (max-width: 550px) {
  .account-profile-info{
    display: flex; flex-direction: column;
  }
}


</style>