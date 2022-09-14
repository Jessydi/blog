<template>
  <div class="home">
    <section>
      <BlogPost :post="welcomeScreen" />
      <BlogPost
        v-for="(post, index) in sampleBlogPost"
        :key="index"
        :post="post"
        :index="index"
      >
      </BlogPost>
    </section>
    <section>
      
    </section>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  name: "HomeComponent",
  components: {
    BlogPost,
  },
  data() {
    return {
      welcomeScreen: {
        title: "welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filter Title!",
          blogPost: "This is a filter blog post title",
          photo: "beautiful-stories",
        },
        {
          title: "This is a Filter Title!",
          blogPost: "This is a filter blog post title",
          photo: "designed-for-everyone",
        },
      ],
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stok-1",
          blogDate: "Sep 14, 2022",
        },
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stok-1",
          blogDate: "Sep 14, 2022",
        },
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stok-1",
          blogDate: "Sep 14, 2022",
        },
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stok-1",
          blogDate: "Sep 14, 2022",
        },
      ],
    };
  },
};
</script>