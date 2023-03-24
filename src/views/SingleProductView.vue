<template>
    <section id="singleProd">
        <div class="container sipCard">
            <div v-if="item">
                <div class="card">
                    <router-link to="/products"><button class="sipButton">
                      <span class="button_lg">
                      <span class="button_sl"></span>
                          <span class="button_text"><i class="fa-solid fa-arrow-left"></i></span>
                      </span>
                  </button></router-link>
                    <div class="row">
                        <div class="col-md-4">
                            <img :src="item.imgURL" class="img-fluid sipIMG">
                        </div>
                        <div class="col-md-6">
                            <div class="abox">
                                <h1> {{ item.prodName }} </h1><p class="text-muted"> {{ item.category }} | {{ item.prodQuantity }} </p>
                                <h4> {{ item.prodDescription }}</h4>
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

        <!-- <div v-else>
            <mySpinner />
        </div> -->
    </section>
</template>
<script>
import mySpinner from '../components/Spinner.vue'
export default {
    props: ["id"],
    components: {
        mySpinner
    },
    computed: {
        item() {
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch("fetchProduct", this.id)
    }
}
</script>
<style>
    #singleProd {
        min-height: 100vh;
        background-color: crimson;
        padding-top: 40px;
        padding-bottom: 30px;
        /* background-position: center; */
    }

    .sipIMG {
        height: 28rem;
    }

    .abox {
        margin: 3%;
    }

    .sipCard {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sipButton {
        appearance: none;
        border: none;
        background: none;
        color: crimson;
        cursor: pointer;
        position: relative;
        padding: 8px;
        margin-bottom: 20px;
        font-size: 14px;
        transition: all .15s ease;
    }

    .sipButton::before,
    .sipButton::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        left: 0;
        height: calc(50% - 5px);
        border: 1px solid #7D8082;
        transition: all .15s ease;
    }

    .sipButton::before {
        top: 0;
        border-bottom-width: 0; 
    }

    .sipButton::after {
        bottom: 0;
        border-top-width: 0;
    }

    .sipButton:active,
    .sipButton:focus {
        outline: none;
    }

    .sipButton:active::before,
    .sipButton:active::after {
        right: 3px;
        left: 3px;;
    }

    .sipButton:active::before {
        top: 3px;
    }

    .sipButton:active::after {
        bottom: 3px;
    }

    .button_lg {
        position: relative;
        display: block;
        padding: 10px 20px;
        color: #fff;
        background-color: #0f1923;
        overflow: hidden;
        box-shadow: inset 0px 0px 0px 1px transparent;
    }

    .button_lg::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 2px;
        background-color: #0f1923;
    }

    .button_lg::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 4px;
        height: 4px;
        background-color: #0f1923;
        transition: all .2s ease;
    }

    .button_sl {
        display: block;
        position: absolute;
        top: 0;
        bottom: -1px;
        left: -8px;
        width: 0;
        background-color: #ff4655;
        transform: skew(-15deg);
        transition: all .2s ease;
    }

    .button_text {
        position: relative;
    }

    .sipButton:hover {
        color: #0f1923;
    }

    .sipButton:hover .button_sl {
        width: calc(100% + 15px);
    }

    .sipButton:hover .button_lg::after {
        background-color: #fff;
    }
</style>