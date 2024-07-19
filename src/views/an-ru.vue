<template>
  <div class="an-ru">
    <div class="an-ru__header" ref="">
      <app-header-info/>
      <app-header-bar v-if="!isTablet"/>
    </div>
    <div class="an-ru__body">
      <div class="an-ru__body-inner" v-if="!isTablet">

        <account-list @pages-id="showFunc"/>
        <router-view></router-view>

      </div>
      <div class="an-ru__body-inner-isTablet" v-else>
        <account-list-tablet style="position: relative" @pages-id="showFunc"/>


        <transition name="an-ru__body-inner-isTablet-interaction-menu">
          <div class="an-ru__body-inner-isTablet-background" ref="backgroundRef" v-if="showBackground"
               @mouseup="mouseUp"
               @mouseleave="mouseUp" @touchend="mouseUp"
               @mousemove="mouseMove" @touchmove="mouseMove">
            <div class="an-ru__body-inner-isTablet-interaction-menu" ref="interactionMenu">
              <div class="an-ru__body-inner-isTablet-island" @mousedown="mouseDown" @touchstart="mouseDown"> <!--   -->
                <div class="an-ru__body-inner-isTablet-island-inner"></div>
                <button @click="console.log(routerViewRef.$el)"> wwww</button>
              </div>
              <router-view ref="routerViewRef"></router-view>
            </div>
          </div>

        </transition>

      </div>
    </div>


    <div class="an-ru__footer" v-if="!isTablet">
      <app-footer/>
    </div>

  </div>
</template>


<script setup>
import AppHeaderInfo from "@/components/app/header/app-header-info.vue";
import AppHeaderBar from "@/components/app/header/app-header-bar.vue";
import {useStore} from "vuex";
import {computed, nextTick, ref, watch} from "vue";
import AppFooter from "@/components/app/footer/app-footer.vue";
import AccountList from "@/components/account/account-profile/account-profile-list.vue";
import AccountListTablet from "@/components/account/account-profile/account-profile-list-tablet.vue";
import AccountSummary from "@/components/account/account-summary.vue";
import router from "@/router";

const store = useStore()
let showBackground = ref(false)


let a = ref(0)

let backgroundRef = ref(null)
let routerViewRef = ref(null)
let interactionMenu = ref(null)
let isDrawing = ref(false)
let startY = ref(0)
let moveY = ref(0)
let offsetY = ref(0)
let interactionMenuHeight = ref(0)
let offsetTopStart = ref(0)
let offsetTopMove = ref(0)

function showFunc(item) {
  showBackground.value = true
  document.body.style.overflow = 'hidden'
}


function mouseDown(event) {
  if (interactionMenu.value) {

    isDrawing.value = true
    interactionMenu.value.style.transition = `transform 0.3s ease`
    startY.value = interactionMenu.value.offsetTop
    let boundingRect = interactionMenu.value.getBoundingClientRect()
    offsetY.value = event.clientY ? event.offsetY : Math.ceil(event.touches[0].clientY - boundingRect.top)
  }
}

function mouseMove(event) {


  if (isDrawing.value) {
    if (interactionMenu.value) {
      if (interactionMenu.value.offsetTop <= 0) {
        mouseUp()
      }

      event.preventDefault()
      startY.value = interactionMenu.value.offsetTop
      moveY.value = event.clientY ? event.clientY : event.touches[0].clientY - offsetY.value
      let elementHeight = interactionMenu.value.clientHeight
      let answer = elementHeight - (moveY.value - startY.value - 45)
      interactionMenu.value.style.overflowY = `auto`
      // document.body.style.overflow = `hidden`
      interactionMenu.value.style.height = `${answer}px`

    }
  }
}

function mouseUp() {
  // backgroundRef.value.style.overflow = `visible`
  document.body.style.overflow = `visible`
  isDrawing.value = false
  if (interactionMenu.value) {

    if (interactionMenuHeight.value - interactionMenu.value.clientHeight > 500) {
      interactionMenu.value.style.transform = `translateY(100%)`
      setTimeout(() => {
        showBackground.value = false
        router.push('/')
      }, 150)
    } else {
      interactionMenu.value.style.transition = `height 0.3s ease`
      interactionMenu.value.style.height = `${interactionMenuHeight.value}px`
    }

  }
}


onresize = () => {
  store.commit('setWidth', window.innerWidth)
}
const isTablet = computed(() => {
  return store.getters.isTablet

})


watch(() => interactionMenu.value,
    () => {
      if (interactionMenu.value) {
        interactionMenuHeight.value = interactionMenu.value.clientHeight
      }
    })

 function testTick() {
  if (routerViewRef.value) {
      console.log(routerViewRef.value.$el)
  }
}


watch(() => routerViewRef.value,
    () => {
      setTimeout(testTick,0)
    }
)
</script>


<style scoped lang="less">
@import '@/base.less';


.an-ru-body__wrapper {

}

.an-ru {
  .tablet({
    height: 100%;
    display: grid;
    grid-template-rows: 49px 1fr;
  })

}

.an-ru__footer {
}


.an-ru__body {
  background-color: @c-white-back;

  &-inner {
    .container;

    padding: 10px;
    display: grid;
    grid-template-columns: 24%  1fr;
    gap: 30px;


    &-isTablet-background {
      user-select: none;
      transition: opacity 0.3s ease, visibility 0.3s;
      position: absolute;
      .mobile({
      });
      top: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(@c-black, .7);
    }

    &-isTablet-island {
      height: 70px;
      align-items: center;
      display: flex;
      justify-content: center;

      &-inner {
        background-color: rgba(@c-black, .2);
        width: 58px;
        border-radius: 20px;
        height: 5px;
      }

      .mobile({
        height: 50px;
      })
    }

    &-isTablet-interaction-menu {
      background-color: white;
      padding: 0 40px 20px 40px;
      top: 49px !important;
      height: 100%;
      box-sizing: border-box;
      .mobile({
        padding: 0 20px 20px 20px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;

      });
      border-top-right-radius: 40px;
      border-top-left-radius: 40px;
      width: 100%;
      bottom: 0;
      left: 0;
      position: relative;
    }


  }

  &-inner-isTablet {
    position: relative;
    height: 100%;
    box-sizing: border-box;
    padding: 19px 40px 0 40px;
    .mobile({
      padding: 10px 20px 0 20px;
    })
  }
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  transform: scale(0.7);
}

.modal-enter-active, .modal-leave-active {
  opacity: 1;
  visibility: visible;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
  visibility: hidden;
}

.modal-enter .modal {
  transform: scale(0.7);
}

.modal-enter-active .modal {
  transform: scale(1);
}

.modal-leave-active .modal {
  transform: scale(0.7);
}


.an-ru__body-inner-isTablet-interaction-menu {

  //border-radius: 20px;
  //width: 500px;
  //height: 700px;
  //background-color: #6d3af3;
  transition: transform 0.3s ease;
}

.an-ru__body-inner-isTablet-interaction-menu-enter-to .an-ru__body-inner-isTablet-interaction-menu-leave-from {
  opacity: 1;
}

.an-ru__body-inner-isTablet-interaction-menu-enter-from, .an-ru__body-inner-isTablet-interaction-menu-leave-to {
  opacity: 0;
}


.an-ru__body-inner-isTablet-interaction-menu-enter-active .an-ru__body-inner-isTablet-interaction-menu {
  opacity: 0;
  transform: translateY(100%);
}

.an-ru__body-inner-isTablet-interaction-menu-leave-active .an-ru__body-inner-isTablet-interaction-menu {
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s;
}


</style>