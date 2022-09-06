<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >FireBlogs</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile" class="nav-links__list">
          <li class="nav-links__item">
            <router-link class="link" to="#"> Home </router-link>
          </li>
          <li class="nav-links__item">
            <router-link class="link" to="#"> Blogs </router-link>
          </li>
          <li class="nav-links__item">
            <router-link class="link" to="#"> Create Post </router-link>
          </li>
          <li class="nav-links__item">
            <router-link class="link" to="#"> Login/Register </router-link>
          </li>
        </ul>
      </div>
      <IconBase
        v-show="mobile"
        class-name="menu-icon"
        width="25"
        height="25"
        icon-name="menu"
        @click="toggleMobileNav"
      >
        <IconMenu />
      </IconBase>
    </nav>

    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="mobile-nav__list mobile-nav">
        <li class="mobile-nav__item">
          <router-link class="link" to="#"> Home </router-link>
        </li>
        <li class="mobile-nav__item">
          <router-link class="link" to="#"> Blogs </router-link>
        </li>
        <li class="mobile-nav__item">
          <router-link class="link" to="#"> Create Post </router-link>
        </li>
        <li class="mobile-nav__item">
          <router-link class="link" to="#"> Login/Register </router-link>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconMenu from "./icons/IconBarsRegular.vue";
export default {
  name: "TheNavigation",
  components: {
    IconBase,
    IconMenu,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;

      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
}

.link {
  font-weight: 500;
  padding: 0 8px;
  transition: color 0.3s ease;

  &:hover {
    color: #1eb8b8;
  }
}

nav {
  display: flex;
  padding: 25px 0;

  .branding {
    display: flex;
    align-items: center;
    .header {
      font-weight: 600;
      font-size: 24px;
      color: #000;
      text-decoration: none;
    }
  }

  .nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    &__item {
      list-style: none;
      margin-right: 32px;
      &:last-child {
        margin-right: 0;
      }
    }
    &__list {
      margin-right: 32px;
      display: flex;
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
  }
}
.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;

  &__item {
    padding: 15px 0;
    .link {
      color: #fff;
    }
  }
  &__list {
    list-style: none;
  }
}
</style>
