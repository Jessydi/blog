<template>
  <section class="register">
    <div class="container">
      <div class="register-content">
        <h2 class="register-text">
          NEVER MISS A POST. REGISTER FOR YOUR FREE ACCOUNT TODAY
        </h2>
        <router-link class="router-button" to="#">
          <span>REGISTER FOR FIREBLOG</span>
          <IconBase width="12" height="12">
            <Arrow />
          </IconBase>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
import IconBase from "./IconBase.vue";
import Arrow from "./icons/IconArrowRightLight.vue";
export default {
  components: {
    IconBase,
    Arrow,
  },
};
</script>
<style scoped lang="scss">
.register {
  &-content {
    padding: 80px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
  &-text {
    max-width: 425px;
    font-size: 32px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 300;
  }
}
@media (min-width: 768px) {
  .register {
    &-content {
      padding: 100px 30px;
      flex-direction: row;
      justify-content: space-between;
    }
    &-text {
      font-size: 40px;
      text-align: left;
    }
  }
}
</style>
