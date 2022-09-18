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
    <BlogCardSection
      title="View More Recent Blogs"
      :sample-blog-cards="sampleBlogCards"
    />
    <RegisterSection />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCardSection from "../components/BlogCardSection.vue";
import RegisterSection from "../components/RegisterSection.vue";
export default {
  name: "HomeComponent",
  components: {
    BlogPost,
    BlogCardSection,
    RegisterSection,
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
          blogCoverPhoto: "stock-1",
          blogDate: "Sep 14, 2022",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "Sep 14, 2022",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "Sep 14, 2022",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "Sep 14, 2022",
        },
      ],
    };
  },
};
</script>
