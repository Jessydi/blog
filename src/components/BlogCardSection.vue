<template>
  <div class="blog-cards-wrapper">
    <div class="container">
      <h3 v-if="title">{{ title }}</h3>
      <section class="blog-cards">
        <BlogCard
          v-for="(blogCard, index) in sampleBlogCards"
          :key="index"
          :blog-card="blogCard"
        />
      </section>
    </div>
  </div>
</template>
<script>
import BlogCard from "./BlogCard.vue";

export default {
  components: {
    BlogCard,
  },
  props: {
    sampleBlogCards: {
      type: Object,
      default() {
        return {};
      },
    },
    title: {
      type: String,
      default: null,
    },
  },
};
</script>
<style scoped lang="scss">
.blog-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  &-wrapper {
    padding: 80px 16px;
    background-color: #f2f1f2;
    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
}
@media (min-width: 500px) {
  .blog-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    &-wrapper {
      padding: 100px 16px;
    }
  }
}
@media (min-width: 900px) {
  .blog-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1200px) {
  .blog-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
