<template>
  <div class="hello">
    <div v-for="article in articles">
      <b-card :title="article.title"
              :img-src="article.urlToImage"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          {{article.description}}
        </p>
        <p> <b> Source: {{article.source.name}} </b></p>
        <p> <b> Posted: {{article.publishedAt | formatDate}} </b></p>
        <b-button :href="article.url" variant="primary">Read Post</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      api: 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=748a5cd1d1b64695b7bd713ada894194',
      gists: []
    }
  },
  pouch: {
    articles: {}
  },
  mounted() {
    this.axios.get(this.api).then((response) => {
      this.gists = response.data.articles
      this.gists.forEach(gist => {
        this.$pouch.post('articles', gist)      
      });
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
