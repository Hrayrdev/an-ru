<template>

  <div class="account-request-realtor">
    <div class="account-request-realtor__inner">
      <div class="account-request-realtor__header">
        <div class="account-request-realtor__header-inner">
          <div class="account-request-realtor__header-info">
            <div class="account-request-realtor__header-base">
              <img src="@/assets/app-summary/realtor-base.png" alt="">
            </div>
            <div class="account-request-realtor__header-info-text">
              <div class="account-request-realtor__header-text">Расширьте возможности своего личного кабинета
              </div>
              <div class="account-request-realtor__header-label">Заявка в базу риелторов AN.RU</div>
            </div>
          </div>
          <div class="account-request-realtor__header-container-wrapper">
            <div class="account-request-realtor__header-container"></div>
          </div>
        </div>
      </div>

      <div class="account-request-realtor__body">
        <div class="account-request-realtor__body-inner">
          <div class="account-request-realtor__body-info">
            <div class="account-request-realtor__body-info-label">Заполните заявку</div>
            <div class="account-request-realtor__body-info-text">Получите доступ к личному кабинету риелтора с
              расширенными возможностями. Заявка рассматривается в течение 3 дней.
            </div>
          </div>
          <div class="account-request-realtor__body-inputs">
            <div class="account-request-realtor__body-input">
              <ui-input/>
            </div>
            <div class="account-request-realtor__body-input-wrapper">
              <div class="account-request-realtor__body-input">
                <ui-input/>

              </div>
              <div class="account-request-realtor__body-input">
                <ui-input/>

              </div>
              <div class="account-request-realtor__body-input" style="position: relative">
                <ui-input v-model="inputValue" style="position: relative" @focus="inputCite = true" @blur="inputCite = false"/>
                <div :class="{animated: inputCite || inputValue.length}" class="placeholder">ss</div>
              </div>
              <div class="account-request-realtor__body-input">
                <ui-input/>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
  {{ inputCite }}

</template>
<script setup>

import {ref} from "vue";


let inputValue = ref('')
let inputName = ref(false)
let inputAgency = ref(false)
let inputCite = ref(false)
let inputInn = ref(false)
let inputEmail = ref(false)


import UiInput from "@/components/ui/ui-input.vue";
</script>


<style scoped lang="less">
@import "@/base";

.animated {
  font-size: 10px;
  transform:  translateY(-70%);
}


.placeholder {
  position: absolute;
  top: 8px;
  left: 12px;
  transition: font-size 0.5s ease, transform 0.5s ease;

}


.account-request-realtor__body-input-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.account-request-realtor {
  &__inner {
  }


  &__header {
    overflow: hidden;

    &-inner {
      position: relative;
      background-color: #7d4efb;
      padding: 20px;
      border-radius: 20px;
    }

    &-info {
      gap: 10px;
      position: relative;
      display: flex;
    }

    &-base {
      padding: 15px;
      border-radius: 15px;
      background-color: rgba(white, .1);

    }

    &-info-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      gap: 5px;
      font-family: "Open Sans";
    }

    &-text {
      font-size: 14px;
      color: rgba(white, .7);

    }

    &-label {
      color: rgba(white, .9);
      font-size: 18px;
    }

    &-container-wrapper {

      position: absolute;
      right: -8px;
      top: 30px;
    }

    &-container {

      border-radius: 40px;
      height: 230px;
      transform: rotate(-10.28deg);
      width: 230px;
      background-color: rgba(white, .1);
    }

  }


  &__body {

    &-inner {
      padding: 20px;
      background-color: white;
      border-radius: 20px;
      font-family: "Open Sans";
    }

    &-info {
      margin-bottom: 10px;
    }

    &-info-label {
      font-size: 20px;
    }

    &-info-text {
      color: @c-text-gray;
    }

    &-input:first-child {
      margin-bottom: 10px;
    }

    &-input {
      margin-right: 10px;
    }

    &-inputs {
    }
  }


}


</style>