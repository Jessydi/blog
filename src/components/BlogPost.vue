<template>
  <article
    :class="{ 'welcome-screen': post.welcomeScreen }"
    class="blog-item"
  >
    <div class="blog-item__content">
      <h2>{{ post.title }}</h2>
      <div class="blog-item__description">
        {{ post.blogPost }}
      </div>
      <router-link
        v-if="post.welcomeScreen"
        class="link link-detail link-light"
        to="#"
      >
        LOGIN/REGISTER
        <IconBase class-name="menu-icon" width="24">
          <IconArrowRight />
        </IconBase>
      </router-link>
      <router-link v-else class="link link-detail" to="#">
        VIEW THE POST
        <IconBase class-name="menu-icon" width="24">
          <IconArrowRight />
        </IconBase>
      </router-link>
    </div>
    <img class="blog-item__image" :src="imgSrc" :alt="post.photo" />
  </article>
</template>
<script>
import IconBase from "./IconBase.vue";
import IconArrowRight from "./icons/IconArrowRightLight.vue";
export default {
  name: "BlogPost",
  components: {
    IconBase,
    IconArrowRight,
  },
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default() {
        return 1;
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    imgSrc() {
      return require(`@/assets/blogPhotos/${this.post.photo}.jpg`);
    },
  },
};
</script>
<style scoped lang="scss">
.blog-item {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.6);
  .link-detail {
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0%;
      background-color: #fff;
    }
    &:hover {
      position: relative;
      &::after {
        transition: all 0.5s cubic-bezier(1, 0, 0.75, 1);
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #000;
      }
    }
  }
  &.welcome-screen {
    .link-detail {
      &::after {
        background-color: #3b3a3b;
      }
      &:hover {
        &::after {
          background-color: #fff;
        }
      }
    }
    .blog-item__content {
      background-color: #3b3a3b;
      color: #fff;
      box-shadow: 0 -130px 110px -100px rgb(0 0 0 / 40%) inset;
    }
  }
  &__image {
    width: 100%;
    flex: 1 1 60%;
    object-fit: cover;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    flex: 1 1 40%;
    gap: 20px;
    order: 1;
    text-align: center;
    h2 {
      text-transform: uppercase;
      font-size: 32px;
    }
  }
  &__description {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
  }
}
.no-user:first-child {
  .blog-item__content {
    background-color: #303030;
    color: #fff;
  }
}
@media (min-width: 768px) {
  .blog-item {
    height: 650px;
    flex-direction: row;
    .blog-item__content {
      order: 0;
      h2 {
        font-size: 40px;
      }
    }

    &:nth-child(even) {
      .blog-item__content {
        order: 2;
      }
    }

    &__image {
      max-width: 60%;
    }
  }
}
</style>