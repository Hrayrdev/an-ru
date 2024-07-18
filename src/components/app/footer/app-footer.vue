<template>
  <div class="app-footer">
    <div class="app-footer__inner">
      <div class="app-footer__company">
        <div class="app-footer__company-logo">
          <img src="@/assets/app-footer/logo.png" alt="">
        </div>
        <div class="app-footer__company-label">© 2006-2022 АН "PROНЕДВИЖИМОСТЬ"</div>
      </div>
      <div class="app-footer__other-information">
        <div class=""></div>
        <div class="app-footer__info">Правила оплаты</div>
        <div class="app-footer__info">Правила пользования сайтом</div>
        <div class="app-footer__info">Правила пользования сайтом</div>
      </div>
      <div class="app-footer__our-contacts">
        <div class="app-footer__our-contacts-inner">
          <div class="app-footer__our-contacts-info">Пишите</div>
          <div class="app-footer__contacts">

            <div class="app-footer__contacts-mail">
              <div class="app-footer__contacts-img">
                <img src="@/assets/app-footer/mail.png" alt="">
              </div>
              <div class="app-footer__contacts-label">Эл.почта</div>
            </div>
            <div class="app-footer__contacts-whatsApp">
              <div class="app-footer__contacts-img">
                <img src="@/assets/app-footer/whatsapp.png" alt="">
              </div>
              <div class="app-footer__contacts-label">WhatsApp</div>
            </div>
            <div class="app-footer__contacts-Telegram">
              <div class="app-footer__contacts-img">
                <img src="@/assets/app-footer/telegram.png" alt="">
              </div>
              <div class="app-footer__contacts-label">Telegram</div>
            </div>
            <div class="app-footer__contacts-Viber">
              <div class="app-footer__contacts-img">
                <img src="@/assets/app-footer/viber.png" alt="">
              </div>
              <div class="app-footer__contacts-label">Viber</div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-footer__our-num">
        <div class="app-footer__num-info">Звоните</div>
        <div class="app-footer__num">+7 (495) 642-52-89</div>
      </div>


    </div>
  </div>
</template>


<script setup>

</script>

<style scoped lang="less">
@import "@/base";

.app-footer {
  padding: 65px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    padding: 20px;
    height: 128px;
    .container;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
  }

  &__company {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-logo {

    }

    &-label {
      font-size: 14px;
      font-family: "Open Sans";
      color: rgba(@c-black, .6);
    }
  }

  &__other-information {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__info {
    margin-bottom: 16px;
    font-size: 14px;
    color: @c-text-gray;
  }

  &__info:last-child {
    margin-bottom: 0px;
  }

  &__our-contacts {
    &-inner {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &-info {
      color: @c-text-gray;
      font-family: "Open Sans";
    }
  }

  &__contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    &-img {
      width: 20px;
      margin-right: 16px;
    }

    &-label {
      font-size: 18px;
      font-weight: bold;

    }


    &-mail {

      display: flex;
      margin-right: 10px;
    }

    &-whatsApp {
      display: flex;
    }

    &-Telegram {
      display: flex;
      margin-right: 10px;
    }

    &-Viber {
      display: flex;
    }
  }

  &__our-num {
    display: grid;

  }

  &__num-info {
    font-family: "Open Sans";
    color: @c-text-gray;

  }

  &__num {
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 18px;
  }
}


</style>