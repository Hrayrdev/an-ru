
<template>

  <div class="app-header-bar">
    <div class="app-header-bar__inner">
      <div class="app-header-bar__company-logo-wrapper">
        <img class="app-header-bar__company-logo" src="@/assets/app-header-bar/logo.png" alt="">
      </div>
      <div class="app-header-bar__links">
        <div class="app-header-bar__links-button" v-for="button in buttons">
          <div class="app-header-bar__links-button-icon" v-if="button.icons" ><img :src="require(`@/${button.icons}`)" alt=""></div>
          <div class="">{{button.text}}</div>
        </div>
      </div>

      <ui-button :button-type="1" class="app-header-bar__post-button"  :button-text="'Разместить объявление'" />
    </div>
  </div>




</template>


<script setup>
import UiButton from "@/components/ui/ui-button.vue";
import {ref} from "vue";

let buttons = ref([
  {text: 'Аренда', icons: ''},
  {text: 'Продажа', icons: ''},
  {text: 'Новостройки', icons: ''},
  {text: 'Ипотека', icons: ''},
  {text: 'Журнал', icons: ''},
  {text: 'Агенства', icons: ''},
  {text: 'Срочный выкуп квартир', icons: 'assets/app-header-bar/building.png'},
])


</script>


<style scoped lang="less">
@import "@/base";



.app-header-bar{
  width: 100%;

  &__inner{
    padding: 10px  ;
    display: grid;
    .container;
    grid-template-columns: 13% 60% 1fr;
    flex-wrap: wrap;
  }
  &__company-logo-wrapper{
    display: flex;
    justify-content: center;
    max-width: 150px;
    margin-right: 10px;
  }

  &__company-logo{
    .img-auto
  }
  &__links{
    display: grid;
    grid-template-columns: repeat(6, 1fr) 25% ;
    gap: 24px;
    &-button{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: black;
      &-icon{
        margin-right: 7px;
      }
    }
  }

  &__post-button{
    justify-self: flex-end;
    max-width: 200px;
  }


}



@media (max-width: 1120px) {
  .app-header-bar__links{
    gap: 10px;
  }
  .app-header-bar__post-button{
    max-width: 170px;
  }
}
</style>