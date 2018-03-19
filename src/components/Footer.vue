<template>
  <div class="footer-wrapper">
    <p>Copyright © 2018 Limoer. All Rights Reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 60px;
    background-color: rgb(115, 119, 122);
    /* border-top: 1px solid rgba(255, 255, 255, .2); */
  }
  .footer-wrapper > p {
    margin-left: 10%;
    font-size: 16px;
    color: #fff;
  }
</style>
