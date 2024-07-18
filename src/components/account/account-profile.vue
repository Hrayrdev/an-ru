<template>
  <div class="account-profile" >
    <div class="account-profile__inner" v-if="!isTablet">
      <div class="account-profile__input">
        <account-profile-input/>
        <account-profile-info/>
      </div>

    </div>

    <account-profile-tablet  v-if="isTablet" />
  </div>





</template>

<script setup>

import AccountProfileInput from "@/components/account/account-profile/account-profile-input.vue";
import AccountProfileMail from "@/components/account/account-profile/account-profile-mail.vue";
import AccountProfileNum from "@/components/account/account-profile/account-profile-num.vue";
import AccountProfileInfo from "@/components/account/account-profile/account-profile-info.vue";
import AccountList from "@/components/account/account-profile/account-profile-list.vue";
import {useStore} from "vuex";
import {computed} from "vue";
import AccountProfileTablet from "@/components/account/account-profile-tablet.vue";


const store = useStore()
const width = computed(() => {
  return store.state.width
})
let isTablet = computed(() => {
  return store.getters.isTablet
})


</script>

<style scoped lang="less">
@import "@/base";

.account-profile__input {
  display: flex;
  justify-content: space-between;

}

@media (max-width: 1250px) {
  .account-profile__input {
    flex-direction: column;

  }
}

.test {
  padding-left: 30%;
  padding-bottom: 40px;
}

.account-profile-info {

}


.account-profile {


  &__inner {
    padding: 10px;
    .container;

    .laptop({
      padding: 10px
    });

  }

  &__info-wrapper {
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__num-wrapper {
    height: 100%;
    max-width: 400px;
    background-color: white;
    border-radius: 20px;
  }

  &__mail-wrapper {
    height: 100%;
    max-width: 400px;
    background-color: white;
    border-radius: 20px;
  }


}

@media (max-width: 1250px) {
  .account-profile__inner {

  }
}

</style>