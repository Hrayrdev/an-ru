<template>

  <div class="account-summary-viewed-advertisements">
    <div class="account-summary-viewed-advertisements__inner">
      <div class="account-summary-viewed-advertisements__header">
        <div class="account-summary-viewed-advertisements__header-info" ref="link">
          Просмотренные обявления
        </div>
        <div class="account-summary-viewed-advertisements__header-listing-button">
          <div class="account-summary-viewed-advertisements__header-listing-button-inner" @click="prev"><img
              src="@/assets/app-summary/arrow-left.png" alt=""></div>
          <div class="account-summary-viewed-advertisements__header-listing-button-inner" @click="next"><img
              src="@/assets/app-summary/arrow-right.png" alt=""></div>
        </div>
      </div>
      <div class="account-summary-viewed-advertisements__property-cards" ref="paginationElement">


        <div class="account-summary-viewed-advertisements__property-card" v-for="house in houseInfo">

          <div class="account-summary-viewed-advertisements__property-card-header">
            <div class="account-summary-viewed-advertisements__property-card-photo">
              <img class="account-summary-viewed-advertisements__property-card-photo-img"
                   src="@/assets/app-summary/property-card-photo.jpg" alt="">
            </div>
            <div class="account-summary-viewed-advertisements__property-card-house-info">
              <div class="account-summary-viewed-advertisements__property-card-bests" v-if="house.bestStatus">
                <div class="account-summary-viewed-advertisements__property-card-bests-logo">
                  <img src="@/assets/app-summary/fire.png" alt="">
                </div>
                <div class="account-summary-viewed-advertisements__property-card-bests-text">
                  Лучшие
                </div>
              </div>
              <div class="account-summary-viewed-advertisements__property-card-info">
                {{ house.houseSquare }}м²
              </div>
              <div class="account-summary-viewed-advertisements__property-card-info">
                {{ house.houseRoom }}-комнатная
              </div>
              <div class="account-summary-viewed-advertisements__property-card-info">
                {{ house.houseFloor }}/{{ house.houseMaxFloor }} эт
              </div>

            </div>
            <div class="account-summary-viewed-advertisements__property-card-like-button" v-if="house.likeStatus">
              <img src="@/assets/app-summary/like-active.jpg" alt="">
            </div>
            <div class="account-summary-viewed-advertisements__property-card-like-button" v-else>
              <img src="@/assets/app-summary/like.jpg" alt="">
            </div>
          </div>

          <div class="account-summary-viewed-advertisements__property-card-body">
            <div class="account-summary-viewed-advertisements__property-card-prise">
              <div class="account-summary-viewed-advertisements__property-card-new-price">
                {{ house.newPrise.toLocaleString() }} ₽
              </div>
              <div class="account-summary-viewed-advertisements__property-card-old-price">
                {{ house.oldPrise.toLocaleString() }} ₽
              </div>
            </div>
            <div class="account-summary-viewed-advertisements__property-card-address">
              <span class="account-summary-viewed-advertisements__property-card-address-region">{{
                  house.region
                }}</span>
              {{ house.address }}
            </div>
            <div class="account-summary-viewed-advertisements__property-card-metro">
              <div class="account-summary-viewed-advertisements__property-card-metro-logo">
                <img src="@/assets/app-summary/metro-logo.jpg" alt="">
              </div>
              <div class="account-summary-viewed-advertisements__property-card-metro-label">{{
                  house.nearestMetro
                }}
              </div>
              <div class="account-summary-viewed-advertisements__property-card-metro-time-until-arrival">
                ≈{{ house.timeUntilArrival }}мин.
                <div
                    class="account-summary-viewed-advertisements__property-card-metro-time-until-arrival-kind-transport">
                  <img src="@/assets/app-summary/transport-logo.jpg " alt="">
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>

</template>


<script setup>

import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";


const store = useStore()
const isTable = computed(() => {
  return store.getters.isTablet
})
const isMobile = computed(() => {
  return store.getters.isPhone
})

let cardWidth = ref(null)
let paginationElement = ref(null)
const currentIndex = ref(0);
const next = () => {
  if (isMobile.value) {
    if (currentIndex.value < houseInfo.value.length - 1) {
      currentIndex.value++
    }
  } else   {
    if (currentIndex.value < houseInfo.value.length - 2) {
      currentIndex.value++
    }
  }

  paginationFunc()
}
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
  paginationFunc()
}
const paginationFunc = () => {
  const trackElement = paginationElement.value;
  const slideWidth = 348;
  trackElement.style.transform = `translateX(-${currentIndex.value * slideWidth}px)`;


}


const houseInfo = ref([
  {
    houseRoom: 2,
    houseSquare: 65,
    houseFloor: 1,
    houseMaxFloor: 18,
    likeStatus: true,
    bestStatus: true,
    nearestMetro: 'Краснопернеская',
    housePhoto: '@/assets/app-summary/house-photo.png',
    newPrise: 19120000,
    oldPrise: 23000000,
    address: 'Одинцовский городской округ, Заречье рп, Заречье Парк ЖК, к3.1',
    region: 'МО',
    timeUntilArrival: 28,
  }, {
    houseRoom: 2,
    houseSquare: 65,
    houseFloor: 1,
    houseMaxFloor: 18,
    likeStatus: false,
    bestStatus: false,
    nearestMetro: 'Краснопернеская',
    housePhoto: '@/assets/app-summary/house-photo.png',
    newPrise: 19120000,
    oldPrise: 23000000,
    address: 'Одинцовский городской округ, Заречье рп, Заречье Парк ЖК, к3.1',
    region: 'МО',
    timeUntilArrival: 28,
  },
  {
    houseRoom: 2,
    houseSquare: 65,
    houseFloor: 1,
    houseMaxFloor: 18,
    likeStatus: false,
    bestStatus: false,
    nearestMetro: 'Краснопернеская',
    housePhoto: '@/assets/app-summary/house-photo.png',
    newPrise: 19120000,
    oldPrise: 23000000,
    address: 'Одинцовский городской округ, Заречье рп, Заречье Парк ЖК, к3.1',
    region: 'МО',
    timeUntilArrival: 28,
  }, {
    houseRoom: 2,
    houseSquare: 65,
    houseFloor: 1,
    houseMaxFloor: 18,
    likeStatus: false,
    bestStatus: false,
    nearestMetro: 'Краснопернеская',
    housePhoto: '@/assets/app-summary/house-photo.png',
    newPrise: 19120000,
    oldPrise: 23000000,
    address: 'Одинцовский городской округ, Заречье рп, Заречье Парк ЖК, к3.1',
    region: 'МО',
    timeUntilArrival: 28,
  },
])


</script>


<style scoped lang="less">
@import "@/base";

.account-summary-viewed-advertisements {


  &__inner {
    overflow: hidden;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &-info {
      font-size: 20px;
      font-family: "Open Sans";
      font-weight: bold;


    }

    &-listing-button {
      display: flex;
      align-items: center;
      gap: 10px;

      &-inner {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: @c-white-back;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

  }


  &__property-cards {
    max-width: 500px;
    display: flex;
    transition: transform 0.5s ease-in-out;
    gap: 25px;
  }

  &__property-card {
    display: flex;
    flex-direction: column;
    font-family: "Open Sans";

    &-header {
      position: relative;
    }

    &-photo {
      height: 195px;
      position: relative;

    }

    &-house-info {
      position: absolute;
      top: 20px;
      left: 20px;
      gap: 10px;
      display: flex;
      flex-wrap: wrap;
      max-width: 250px;
    }

    &-bests {
      display: flex;
      gap: 5px;
      padding: 1px;
      background-color: #8167ef;
      max-width: 86px;
      width: 100%;
      justify-content: center;
      align-items: center;
      color: white;

      border-radius: 20px;
    }

    &-bests-logo {
    }

    &-bests-text {
      font-size: 12px;
    }

    &-info {
      padding: 2px 10px;
      background-color: white;
      border-radius: 15px;
    }

    &-like-button {
      top: 20px;
      left: 270px;
      position: absolute;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 50%;

    }

    &-like-button-wrapper {
    }

    &-body {
      padding: 12px 24px;
      background-color: white;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }

    &-prise {
      align-items: center;
      position: relative;
      display: flex;
      gap: 10px;

    }

    &-new-price {
      font-weight: bold;
      color: @c-orange;
      font-size: 20px;
    }

    &-old-price {
      position: relative;
      text-decoration: line-through;
      text-decoration-color: rgba(@c-orange, .8);
    }

    &-address {
      margin-bottom: 10px;
      color: @c-text-gray;
    }

    &-address-region {
      margin-right: 6px;
      font-weight: bold;
      color: @c-orange;

    }

    &-metro {
      color: @c-text-gray;
      font-size: 14px;
      display: flex;
      gap: 10px;
    }

    &-metro-logo {
    }

    &-metro-label {
    }

    &-metro-time-until-arrival {

      display: flex;
    }

    &-metro-time-until-arrival-kind-transport {
      margin-left: 5px;
    }


  }


}

.account-summary-viewed-advertisements__property-card-photo-img {
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
}


</style>