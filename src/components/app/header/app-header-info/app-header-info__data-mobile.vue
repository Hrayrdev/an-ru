<script setup>

</script>

<template>
  <div class="app-header-info__data">
    <div class="app-header-info__data-ui-table">
      <div class="app-header-info__data-logo"><img  class="app-header-info__data-logo-img" src="@/assets/app-header-info/logo.png" alt=""></div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/base";

.app-header-info__data {
  font-size: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr 35.14%;
  gap: 10px;

  &-ui-table{

  }

  &-logo {
    .mobile({
      width: 120px;
    });
    margin-right: 5px;
    display: flex;
    &-img{
      .img-auto
    }
  }

  &-logo-wrapper {
    display: flex;
    align-items: center;
  }

  &-times-inner {
    color: @c-orange;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: 15px;
    background-color: rgba(@c-orange, .1);
  }

}

@media (max-width: 900px) {
  .app-header-info__data {
    display: block;

    &-ui-table {
    }
  }
}
</style>