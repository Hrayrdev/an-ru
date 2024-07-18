<template>

  <div class="account-profile-tablet">
    <div class="account-profile-tablet__inner">

          <account-profile-input-tablet/>
    </div>
  </div>


</template>


<script setup>

import AccountListTablet from "@/components/account/account-profile/account-profile-list-tablet.vue";
import AccountProfileInputTablet from "@/components/account/account-profile/account-profile-input-tablet.vue";
</script>


<style scoped lang="less">
@import "@/base";

.account-profile-tablet {
}


.account-profile-tablet__inner {
}

.account-profile-tablet__background {

  .mobile({
    overflow: visible;
  });
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(@c-black, .7);
}

.account-profile-tablet__interaction-menu {
  background-color: white;
  .mobile({
    top: 49px !important;
    height: 94% !important;


  });
  .tablet({
    height: 60%;

  });
  //height: 55%;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  width: 100%;
  bottom: 0;
  position: absolute;
}


</style>