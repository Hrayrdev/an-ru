<template>
  <div class="account-summary-chats">
    <div class="account-summary-chats__info">
      <div class="account-summary-chats__label">
        Чаты
      </div>
      <div class="account-summary-chats__link">
        Перейти в чаты
      </div>
    </div>

    <div class="account-summary-chats__container">
      <div class="account-summary-chats__currentChat" v-for="chat in chatsData">
        <div class="account-summary-chats__currentChat-photos">

          <div class="account-summary-chats__currentChat-photos-house">
            <img class="account-summary-chats__currentChat-photos-house-img" src="@/assets/app-summary/house-photo.png"
                 alt="">
            <div class="account-summary-chats__currentChat-photos-avatar">
              <img src="@/assets/app-summary/chat-profile.png" alt="">
            </div>
          </div>
        </div>
        <div class="account-summary-chats__currentChat-info">
          <div class="account-summary-chats__currentChat-user">
            <div class="account-summary-chats__currentChat-user-info">
              <div class="account-summary-chats__currentChat-user-name" ref="userName"  >{{ chat.userName }}</div>
              <div class="account-summary-chats__currentChat-user-position" v-if="width>500"   ref="userPosition" >{{
                  chat.userPosition
                }}
              </div>
              <div class="account-summary-chats__currentChat-user-status" v-if="chat.userStatus&& width>500"></div>
            </div>
            <div class="account-summary-chats__currentChat-user-textInfo">
              <div class="account-summary-chats__currentChat-user-textInfo-messageStatus" v-if="chat.messageStatus">
                <img class="account-summary-chats__currentChat-user-textInfo-messageStatus-img"
                     src="@/assets/app-summary/message-status.png" alt="">
              </div>
              <div class="account-summary-chats__currentChat-user-textInfo-lastMessageTime">{{ chat.lastMessageTime }}
              </div>
            </div>
          </div>
          <div class="account-summary-chats__currentChat-house">
            <div class="account-summary-chats__currentChat-house-room">{{ chat.houseRoom }}-комн.кв.</div>
            <div class="account-summary-chats__currentChat-house-img"></div>
            <div class="account-summary-chats__currentChat-house-prise" v-if="width>292">{{ chat.prise / 1000 }} тыс ₽</div>
            <div class="account-summary-chats__currentChat-house-img" v-if="width > 305" ></div>
            <div class="account-summary-chats__currentChat-house-square"  v-if="width > 353"  >{{ chat.houseSquare }} м²</div>
          </div>
          <div class="account-summary-chats__currentChat-anotherInfo">
            <div class="account-summary-chats__currentChat-anotherInfo-lastMessage" ref="lastMessage">
              {{ chat.lastMessage }}
            </div>
            <div class="account-summary-chats__currentChat-anotherInfo-newMessage" v-if="chat.newMessage">
              {{ chat.newMessage }}
            </div>
            <div class="account-summary-chats__currentChat-anotherInfo-status" v-else-if="chat.chatStatus === 'pinned'">
              <img src="@/assets/app-summary/chat-status.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import index, {useStore} from "vuex";

const chatsData = ref([
  {
    userName: 'Константин Орлянский',
    userPosition: 'Менеджер AN.RU',
    userStatus: true,
    messageStatus: true,
    lastMessageTime: "17:51",
    houseRoom: 3,
    prise: 200000,
    houseSquare: 123,
    lastMessage: 'Здраствуйте, уточните пожалуйста, в како...',
    chatStatus: 'pinned',
    userAvatar: '@/assets/app-summary/chat-profile.png',
    housePhoto: '@/assets/app-summary/house-photo.png',
    newMessage: 0
  }, {
    userName: 'OF RU  — коммерческая недвижимость',
    userPosition: '',
    userStatus: false,
    messageStatus: false,
    lastMessageTime: "Вчера",
    houseRoom: 3,
    prise: 200000,
    houseSquare: 123,
    lastMessage: 'Здраствуйте, уточните пожалуйста, в како...',
    chatStatus: 'pinned',
    userAvatar: '@/assets/app-summary/chat-profile.png',
    housePhoto: '@/assets/app-summary/house-photo.png',
    newMessage: 0
  }, {
    userName: 'Антон Кравченко',
    userPosition: 'Менеджер AN.RU',
    userStatus: true,
    messageStatus: false,
    lastMessageTime: "01.02.24",
    houseRoom: 3,
    prise: 200000,
    houseSquare: 123,
    lastMessage: 'Здраствуйте, уточните пожалуйста, в како...',
    pinned: true,
    userAvatar: '@/assets/app-summary/chat-profile.png',
    housePhoto: '@/assets/app-summary/house-photo.png',
    newMessage: 1
  },
])
const width = computed(() => {
  return store.getters.getWidth
})
const store = useStore()
let lastMessage = ref(null)
let userName = ref(null)
let userPosition = ref(null)
function textLengthSlice() {

  userPosition.value.forEach((element,index)=>{
    element.textContent = chatsData.value[index].userPosition
    while (element.clientHeight>19){
      element.textContent = `${element.textContent.slice(0, element.textContent.length - 4)}...`
    }

  })

  userName.value.forEach((element,index)=>{
    element.textContent = chatsData.value[index].userName
    while (element.clientHeight>19){
      element.textContent = `${element.textContent.slice(0, element.textContent.length - 4)}...`
    }

  })



  lastMessage.value.forEach((element, index) => {
    element.textContent = chatsData.value[index].lastMessage
    while (element.clientHeight > 22) {
      element.textContent = `${element.textContent.slice(0, element.textContent.length - 4)}...`
    }

  })
}

watch(() => width.value,
    () => {
        textLengthSlice()
    }
)
onMounted(()=>textLengthSlice())

</script>


<style scoped lang="less">
@import "@/base";

.account-summary-chats {
  background-color: white;
  border-radius: 20px;
  padding: 24px;
  .tablet({
    padding: 0;
  });


  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__label {
    font-size: 20px;
    font-family: "Open Sans";
  }

  &__link {
    font-size: 14px;
    font-family: "Open Sans";
    color: @c-orange;
  }

  &__container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }

  &__currentChat {
    padding: 10px;
    display: flex;
    gap: 5px;
    .mobile({
      border-bottom: 1px solid rgba(@c-black, .1);
    });

    &-photos {
      display: flex;
    }

    &-photos-avatar {
      top: -3px;
      left: -3px;
      position: absolute;
    }

    &-photos-house {
      display: flex;
      height: 65px;
      width: 75px;

      position: relative;
    }

    &-info {

      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &-user {

      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      &-info {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-family: "Open Sans";
      }

      &-textInfo {
        display: flex;
        align-items: center;
        font-size: 14px;
        gap: 5px;
        font-family: "Open Sans";

        &-messageStatus {
          display: flex;
          align-items: center;
        }

        &-messageStatus-img {
          display: flex;
          .img-auto
        }


      }
    }

    &-user-name {
    }

    &-user-position {
      color: @c-text-gray;
    }

    &-user-status {
      width: 7px;
      height: 8px;
      border-radius: 50%;
      background-color: #09df09;
    }

    &-house {
      font-family: "Open Sans";
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    &-house-img {
      width: 7px;
      height: 8px;
      border-radius: 50%;
      background-color: #dcd8d8;
    }

    &-house-room {
    }

    &-house-prise {
    }

    &-house-square {
    }


    &-anotherInfo {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      &-lastMessage {
        width: 100%;
        font-family: "Open Sans";
        font-size: 15px;
        color: @c-text-gray;
      }

      &-status {

      }


    }


  }

}

.account-summary-chats__currentChat-photos-house-img {
  .img-auto
}

.account-summary-chats__currentChat-anotherInfo-newMessage {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Open Sans";
  font-size: 10px;
  width: 20px;
  background-color: #6d3af3;
  border-radius: 50%;
}

</style>