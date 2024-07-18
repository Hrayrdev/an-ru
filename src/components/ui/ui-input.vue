<template>

  <div class="ui-input-wrapper">
    <input class="ui-input" @input="updateValue($event.target.value)" @focus="emit('focus')" @blur="emit('blur')"
           :placeholder="props.placeholder" :value="modelValue ">
  </div>
</template>
<script setup>


const props = defineProps({
  modelValue: String,
  placeholder: String,
  value: String
})
let emit = defineEmits(['focus', 'blur', 'update:modelValue'])

function updateValue(value) {
  this.emit('update:modelValue', value);
}

</script>


<style scoped lang="less">
@import "@/base";

.ui-input-wrapper {
}

.ui-input {
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(@c-black, .1);
  border-radius: 10px;
  font-size: 14px;
}
</style>