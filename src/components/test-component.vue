<template>

  <div @click="isShow =!isShow">открыть контейнер</div>
  <Transition name="cont">
    <div v-if="isShow" class="cont-wrapper" @mouseup="mouseUp" @mousemove="mouseMove">

      <div class="conts" ref="cont" @mousedown="mouseDown">


      </div>

    </div>
  </Transition>

</template>
<script setup>
import {onMounted, ref, watch} from "vue";

let isShow = ref(false)
let cont = ref(null)

let isDrawing = ref(false)
let startY = ref(0)
let moveY = ref(0)
let offsetY = ref(0)
let contHeight = ref(0)



function mouseDown(event) {
  if (cont.value) {
    isDrawing.value = true
    cont.value.style.transition = `transform 0.3s ease`
    startY.value = cont.value.offsetTop
    offsetY.value = event.offsetY
  }
}


function mouseMove(event) {
  if (isDrawing.value) {
    if (cont.value) {
      startY.value = cont.value.offsetTop
      moveY.value = event.clientY - offsetY.value
      let elementHeight = cont.value.clientHeight
      let answer = elementHeight - (moveY.value - startY.value)
      cont.value.style.height = `${answer}px`
    }
  }
}

function mouseUp(event) {
  isDrawing.value = false
  if (cont.value) {
    if (contHeight.value - cont.value.clientHeight > 250) {
      cont.value.style.transform = `translateY(100%)`
      setTimeout(() => {
        isShow.value = false
      }, 150)
    } else {
      cont.value.style.transition = `height 0.3s ease`
      cont.value.style.height = `${contHeight.value}px`
    }
  }

  watch(() => cont.value,
      () => {
        if (cont.value) {
          contHeight.value = cont.value.clientHeight
        }
      })
}
</script>
<style>

.cont-wrapper {
  transition: opacity 0.3s ease, visibility 0.3s;
  padding: 20px;
  height: 92vh;
  background-color: violet;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

}

.conts {
  padding: 50px;
  box-sizing: border-box;
  height: 700px;
  width: 500px;
  background-color: #6d3af3;
  border-radius: 20px;
  transition: transform 0.3s ease;
}


.cont-enter-active .cont {
  opacity: 0;
  transform: translateY(100%);
}

.cont-leave-active .cont {
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s;
}


</style>

<!--<template>-->
<!--  <div id="app">-->
<!--    <button @click="openModal">Открыть модальное окно</button>-->

<!--    <transition name="modal">-->
<!--      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">-->
<!--        <div class="modal">-->
<!--          <h2>Модальное окно</h2>-->
<!--          <p>Содержимое модального окна</p>-->
<!--          <button @click="closeModal">Закрыть</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </transition>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { ref } from 'vue';-->

<!--export default {-->
<!--  setup() {-->
<!--    const showModal = ref(false);-->

<!--    const openModal = () => {-->
<!--      showModal.value = true;-->
<!--    };-->

<!--    const closeModal = () => {-->
<!--      showModal.value = false;-->
<!--    };-->

<!--    return {-->
<!--      showModal,-->
<!--      openModal,-->
<!--      closeModal-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.modal-overlay {-->
<!--  position: fixed;-->
<!--  top: 50px;-->
<!--  left: 0;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  background: rgba(0, 0, 0, 0.5);-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  transition: transform 0.5s ;-->
<!--}-->

<!--.modal {-->
<!--  background: #fff;-->
<!--  padding: 20px;-->
<!--  border-radius: 5px;-->
<!--  transition: transform 0.3s ease;-->
<!--  transform: scale(1);-->
<!--}-->

<!--.modal-enter-active, .modal-leave-active {-->
<!--}-->

<!--.modal-enter-from, .modal-leave-to {-->
<!--  transform: translateY(100%);-->
<!--}-->


<!--.modal-enter-active .modal {-->
<!--}-->

<!--.modal-leave-active .modal {-->

<!--}-->
<!--</style>-->


<!--  <button @click="show=!show">показать</button>-->
<!--  <Transition name="slide-fade">-->
<!--    <p v-if="show">привет</p>-->


<!--  </Transition>-->


//.slide-fade-enter-active {
//  transition: all 0.3s ease-out;
//}
//
//.slide-fade-leave-active {
//  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
//}
//
//.slide-fade-enter-from,
//.slide-fade-leave-to {
//  transform: translateX(20px);
//  opacity: 0;
//}