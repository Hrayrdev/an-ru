<template>
  <div class="account-summary-favorites">
    <div class="account-summary-favorites__info">
      <div class="account-summary-favorites__label">
        Избранное
      </div>
      <div class="account-summary-favorites__link">
        Перейти в избранное
      </div>
    </div>


    <div class="account-summary-favorites__container">
      <div class="account-summary-favorites__currentHouse"  v-for="house in houseData"  >
        <div class="account-summary-favorites__currentHouse-photo">
          <img class="account-summary-favorites__currentHouse-photo-img"
               src="@/assets/app-summary/favorites-house-photo.png" alt="">
        </div>
        <div class="account-summary-favorites__currentHouse-info">
          <div class="account-summary-favorites__currentHouse-room">
           {{house.houseRoom}}-комн.квартира, {{house.houseSquare}}м²
          </div>
          <div class="account-summary-favorites__currentHouse-price">
            {{(house.prise).toLocaleString()}}      ₽
          </div>
          <div class="account-summary-favorites__currentHouse-address">
            {{ house.address }}
          </div>
        </div>
      </div>

    </div>

  </div>
</template>


<script setup>


import {ref} from "vue";

const houseData = ref([
  {
    houseRoom: 2,
    prise: 19120000,
    houseSquare: 51,
    address:'МО Одинцовский городской округ, Заречье рп, Заречье, Парк ЖК, к3.1',
    housePhoto: '@/assets/app-summary/favorites-house-photo.png'
  },{
    houseRoom: 2,
    prise: 19120000,
    houseSquare: 51,
    address:'МО Одинцовский городской округ, Заречье рп, Заречье, Парк ЖК, к3.1',
    housePhoto: '@/assets/app-summary/favorites-house-photo.png'
  },{
    houseRoom: 2,
    prise: 19120000,
    houseSquare: 51,
    address:'МО Одинцовский городской округ, Заречье рп, Заречье, Парк ЖК, к3.1',
    housePhoto: '@/assets/app-summary/favorites-house-photo.png'
  },
])


</script>


<style scoped lang="less">
@import "@/base";

.account-summary-favorites {
  background-color: white;
  border-radius: 20px;
  padding: 24px;
  font-family: "Open Sans";
  .tablet({
    padding: 0;
  });
  &__info {
    margin-bottom: 20px;
    align-items: center;

    display: flex;
    justify-content: space-between;
  }

  &__label {
    font-size: 20px;

  }

  &__link {
    font-size: 14px;
    color: @c-orange;
  }

  &__container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

  }

  &__currentHouse {
    .mobile({
      border-bottom: 1px solid rgba(@c-black, .1);
    });
    display: flex;
    padding: 10px;
    gap: 10px;
    &-info {
    }

    &-photo {
      width: 80px;
      height: 70px;
      display: flex;

    }

    &-room {
      font-size: 14px;

    }

    &-price {
      font-size: 14px;
    }

    &-address {
      max-width: 260px;
      font-size: 12px;
      color: @c-text-gray;
    }
  }
}

.account-summary-favorites__currentHouse-photo-img {
  .img-auto
}

</style>