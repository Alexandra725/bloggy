<template>
  <div>
    <NavBar class="nav"></NavBar>

    <div class="container">
      <b-card id="title" bg-variant="light" text-variant="dark" v-for="post in posts" v-bind:key="post._id">
        <p class=error v-if="error"> {{ error }}</p>
        <router-link class="router" :to="`/post/${post._id}`">
          <h3 class="post-title">{{post.title}}</h3>
        </router-link>
          <p class="text-muted post-date"><i class="fas fa-calendar-alt"></i> {{post.date}}</p>
          <p class="text-muted post-author">{{post.name}}</p>
        <router-link class="router" :to="`/post/${post._id}`">
          <b-button variant="dark">Leer mas</b-button>
        </router-link>
      </b-card>

      <div class="col-md-12">
        <div class="post-article" v-for="post in posts" v-bind:key="post._id">
          <router-link class="router" :to="`/post/${post._id}`">
            <h3 class="post-title">{{post.title}}</h3>
          </router-link>
          <p>'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words:
          'Yes, we went to school in the sea, though you mayn't believe it—'
          'I never said I didn't!' interrupted Alice.
          'You did,' said the Mock Turtle.</p>
          <div>
            <span class="badge">Publicado el {{post.date}}</span>
            <div class="pull-right"><p class="text-muted post-author">{{post.name}}</p></div>         
          </div>
          <hr>
        </div>
      </div>
    </div><!-- end of .container -->
  </div>
</template>

<script>
  import axios from 'axios';
  import NavBar from './NavBar';

  export default {
    name: 'Posts',
    components: {
      'NavBar': NavBar
    },
    data() {
      return {
        posts: [],
        error: '',
        title: '',
        postId: '',
        user: ''
      }
    },
    methods: {
      getPosts() {
        axios.get('http://localhost:3000/posts')
          .then(response => {
            this.posts = response.data
            this.$store.dispatch('setPost', this.posts)
          }).catch(error => {
            this.error = error
          })
      },

      loadUser() {
        axios.get('http://localhost:3000/')
          .then()
          .catch(err => {
            /* eslint-disable no-console */
            console.log("err", err)
            /* eslint-enable no-console */
          })
      }

    },
    created() {
      this.getPosts();
      this.loadUser();
    }
  }
</script>

<style>
  .post-date {
    font-size: 14px;
  }
</style>