<template>
  <router-link class="account-summary-realtor" to="/realtor-request">
    <div class="account-summary-realtor__inner">
      <div class="account-summary-realtor__info">
        <div class="account-summary-realtor__info-label">Мы работаем только с надежными и проверенными агенствами
          недвижимости
        </div>
        <div class="account-summary-realtor__info-text">Для риелторов и агентов мы сделали профессиональный личный
          кабинет, где можно добавлять сотрудников, оформлять отчеты и управлять балансом.
        </div>
        <div class="account-summary-realtor__info-button"  v-if="!isMobile">Попасть в базу риелторов</div>
      </div>
      <div class="account-summary-realtor__photo">
        <div class="account-summary-realtor__photo-container">
        </div>
        <div class="account-summary-realtor__photo-img">
          <img src="@/assets/app-summary/realtor-photo.png" alt="">
        </div>
      </div>
    </div>
  </router-link>


</template>


<script setup>

import {useStore} from "vuex";
import {computed} from "vue";
import router from "@/router";

const store = useStore()

let isMobile = computed(()=>{
  return  store.getters.isPhone
})

function openPages (){
}

</script>


<style scoped lang="less">
@import "@/base";


.account-summary-realtor {
  text-decoration: none;
  &__inner {
    position: relative;
    padding: 20px 0 20px 20px;
    font-family: "Open Sans";
    background-color: #7d4efb;
    border-radius: 40px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 70% 1fr;
    .mobile({
      display: flex;
      flex-wrap: wrap;
    })
  }

  &__info {
  }

  &__info-label {
    font-size: 20px;
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__info-text {
    font-size: 14px;
    color: white;
    margin-bottom: 40px;
    .mobile({
    })
  }

  &__info-button {
    padding: 10px;
    background-color: white;
    font-weight: bold;
    font-family: "Open Sans";
    //max-width: 220px;
    display: inline;
    border-radius: 12px;
  }

  &__photo {
    width: 100%;
    height: 210px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__photo-inner {
  }

  &__photo-img {
    display: flex;
    width: 270px;
    bottom: 0;
    position: absolute;
    z-index: 7;
    .mobile({
      left: auto;
      bottom: 0;
      top: auto;
      right: 0;
    })
  }

}


.account-summary-realtor__photo-container {
  height: 210px;
  width: 280px;
  position: absolute;
  top: 20px;
  left: 100px;
  z-index: 1;

  background-color: rgba(white, .1);
  transform: rotate(-20deg);
  border-radius: 25%;
  .mobile({
    left: auto;
    bottom: 0;
    top: auto;
    right: 0;
  })

}
</style>