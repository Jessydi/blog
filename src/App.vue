<template>
  <div class="app-wrapper">
    <div class="app">
      <TheNavigation />
      <main>
        <router-view />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: { TheNavigation, TheFooter },

  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
.button,
.router-button {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: #303030;
  border-radius: 20px;
  color: #fff;
  transition: 0.3s;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: rgba(48, 48, 48, 0.8);
  }
  &:focus {
    outline: none;
  }
}
.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  i {
    margin-left: 8px;
  }
}
.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}
.button-inactive {
  pointer-events: none;
  cursor: none;
  background-color: rgba(128, 128, 128, 0.5);
}
@media (min-width: 768px) {
  .button-ghost {
    margin-top: 0;
    margin-left: auto;
  }
}
</style>
