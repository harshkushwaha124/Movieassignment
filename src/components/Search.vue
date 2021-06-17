<template>
  <div class="search">
    <div id="btn" class="d-flex flex wrap justify-content-around">
      <button type="button" class="btn btn-primary  btn-lg" @click="toggle = !toggle">
        Hide Top Rated Movie
      </button>

      <button type="button" class="btn btn-primary  btn-lg" @click="Upcoming()">
         Upcoming Movie
      </button>
    </div>

    <section class="images d-flex flex-wrap" v-if="toggle">
      <article class="image" v-for="result in results" :key="result.id">
        <div class="thumbnail">
          <img
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
            width="300px"
          />
        </div>
        <h4>{{ result.title }}</h4>
      </article>
    </section>

    <section class="images d-flex flex-wrap">
      <article class="image" v-for="result in upcoming" :key="result.id">
        <div class="thumbnail">
          <img
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
            width="300px"
          />
        </div>
        <h4>{{ result.title }}</h4>
      </article>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      toggle: true,
      results: "",
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=d8ce04b0c8ce0861be2656d127046562&language=en-US&page=1"
      )
      .then(response => {
        this.results = response.data.results;
      });
    console.log(this.results);
  },

  methods: {
    getResult() {},

    Upcoming() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=d8ce04b0c8ce0861be2656d127046562&language=en-US&page=1"
        )
        .then(response => {
          this.upcoming = response.data.results;
                  this.$router.push('/Upcoming')

        });
      console.log(this.upcoming);
    }
  }
};
</script>
<style scoped>
.images {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 6px;
}
.image {
  box-sizing: border-box;
  width: 340px;
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #aaa;
  margin: 10px;
}
.thumbnail {
  background-position: center;
  background-size: auto;
  width: 100%;
  height: 500px;
}
#text {
  text-decoration: none;
  color: black;
}
#head {
  margin-top: 100px;
  background-color: rgb(243, 239, 239);
  font-size: 20px;
  padding: 8px;
}
#btn {
  margin-top: 14px;
}
</style>
