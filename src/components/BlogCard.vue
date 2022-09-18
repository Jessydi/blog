<template>
  <div class="blog-card">
    <div class="icons">
      <div class="icon">
        <IconBase width="16" height="16">
          <Edit />
        </IconBase>
      </div>
      <div class="icon">
        <IconBase width="16" height="16">
          <Delete />
        </IconBase>
      </div>
    </div>
    <img class="blog-card__image" :src="imgSrc" :alt="blogCard.blogTitle" />
    <div class="blog-card__content">
      <div class="blog-card__title">{{ blogCard.blogTitle }}</div>
      <time class="blog-card__post-time"
        >Posted on: {{ blogCard.blogDate }}</time
      >
      <router-link class="link blog-card__detail" to="#">
        <span>VIEW THE POST</span>
        <IconBase width="12" height="12">
          <Arrow />
        </IconBase>
      </router-link>
    </div>
  </div>
</template>
<script>
import IconBase from "./IconBase.vue";
import Arrow from "./icons/IconArrowRightLight.vue";
import Edit from "./icons/IconEditRegular.vue";
import Delete from "./icons/IconTrashRegular.vue";
export default {
  components: {
    IconBase,
    Arrow,
    Edit,
    Delete,
  },
  props: {
    blogCard: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    imgSrc() {
      return require(`@/assets/blogCards/${this.blogCard.blogCoverPhoto}.jpg`);
    },
  },
};
</script>
<style scoped lang="scss">
.blog-card {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 420px;
  max-width: 100%;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.5s;
  position: relative;
  &:hover {
    scale: 1.01;
    rotate: -1deg;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  }
  &__content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 32px 16px;
  }
  &__image {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }
  &__title {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  &__post-time {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 16px;
  }
  &__detail {
    margin-top: auto;
    text-transform: uppercase;
    transition: 0.5s ease all;
    &:hover {
      color: rgba(48, 48, 48, 0.8);
      svg {
        margin-left: 10px;
      }
    }
    svg {
      transition: 0.2s all;
      margin-left: 8px;
    }
  }
  .icons {
    display: flex;
    position: absolute;
    right: 20px;
    top: 10px;
    gap: 20px;
    .icon {
      width: 30px;
      height: 30px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.3s all ease;
      svg {
        z-index: 1;
        transition: 0.3s all ease;
      }
      &:hover {
        background-color: #303030;
        svg {
          color: white;
        }
      }
    }
  }
}
</style>
