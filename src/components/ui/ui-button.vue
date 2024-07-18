
<template>
  <div class="ui-button-type1" v-if="props.buttonType === 1">

    <div class="ui-button__text">{{props.buttonText}}</div>
  </div>


  <div class="ui-button-type2"  v-else-if="props.buttonType === 2" >
     <div class="">{{props.buttonText}}</div>
  </div>

</template>


<script setup>

const  props = defineProps({
  buttonText:String,
  buttonType:Number
})

</script>


<style scoped lang="scss">
@import "@/mixins/mixins";
.ui-button-type1 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: $c-orange;
  color: white;
  border-radius: 10px;
}

.ui-button-type2{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: $c-black;
  color: white;
  border-radius: 10px;
}


</style>