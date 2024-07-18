<template>


  <div class="account-summary">
    <div class="account-summary__inner" v-if="!isMobile" >

      <div class="account-summary__header">
        <account-summary-chats/>
        <account-summary-favorites/>
      </div>

      <div class="account-summary__body">
        <account-summary-realtor/>
      </div>
      <div class="account-summary__footer">
        <account-summary-viewed-advertisements/>
      </div>
    </div>




    <div class="account-summary__inner" v-else >
      <div class="account-summary__header">
        <account-summary-chats/>
      </div>
      <div class="account-summary__body">
        <account-summary-realtor/>
      </div>
      <div class="account-summary__header">
        <account-summary-favorites/>
      </div>
      <div class="account-summary__footer">
        <account-summary-viewed-advertisements/>
      </div>
    </div>
  </div>

</template>

<script setup>

import {computed, ref} from "vue";
import AccountSummaryChats from "@/components/account/account-summary/account-summary-chats.vue";
import AccountSummaryFavorites from "@/components/account/account-summary/account-summary-favorites.vue";
import AccountSummaryRealtor from "@/components/account/account-summary/account-summary-realtor.vue";
import AccountSummaryViewedAdvertisements
  from "@/components/account/account-summary/account-summary-viewed-advertisements.vue";
import {useStore} from "vuex";

const store = useStore()

let isMobile = computed(()=>{
 return  store.getters.isPhone
})

const chatsInfo = ref([
  {
    userAvatar: '', housePhoto: '', userName: '', userPosition: '',
  }
])


</script>


<style scoped lang="less">
@import "@/base";


.account-summary {
  .mobile({
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  });
  .tablet({
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    background-color: white;
  });

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  &__footer {
    margin-bottom: 40px;
  }

}

@media (max-width: 1150px) {
  .account-summary__header {
    display: flex;
    flex-direction: column;
  }

}


</style>