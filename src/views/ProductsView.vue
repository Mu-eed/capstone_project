<template>
       
<section id="products">
  <div v-if="items">
    
    <div class="container da-prod">
      <div class="row">
        <div class="col-md-4 mt-5 mt-4" v-for="item in items" :key="item.prodID">
          
          <div class="card">
            <div>
              <img
              :src="item.imgURL"
              class="card-img-top img-fluid"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.prodName }}</h5>
              <p class="card-text">R {{ item.price }}</p>
              <router-link :to="{name: 'single_product', params: {id: item.id}}">
                  <button class="sipButton">
                      <span class="button_lg">
                      <span class="button_sl"></span>
                          <span class="button_text">View Product</span>
                      </span>
                  </button>
              </router-link>
              <button class="sipButton">
                <span class="button_lg">
                <span class="button_sl"></span>
                  <span class="button_text">Add to cart</span>
                    </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
      <mySpinner  />
    </div>
</section>

    

</template>
<script>
import axios from "axios";
import mySpinner from '../components/Spinner.vue'
export default {
    props: ["item"],
    name: "products",
  components: { mySpinner
  },
  data() {
    return {
      items: this.$store.state.products,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const res = await axios.get(
        `https://meedleez.onrender.com/products`
      );
      this.items = res.data.results;
      console.log(res);
    },
  },
  // mounted()  {
  // return this.$store.state.products    
  // },
  // computed: {
  //   products() {
  //     this.$store.dispatch('fetchProducts')
  //   }
  // },
};
</script>
<style>
#products {
    min-height: 100vh;
    background-position: center;
    /* background-size: cover; */
    background-color: crimson;
    padding: 30px;
}

.card-img-top {
  height: 250px;
  width: 250px
}

a.link.text-black {
   text-decoration: none; 
  }
</style>