<template>
    <div class="container">

<div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label class="label">Product Name</label>
        <input type="text" v-model="productName">
        <label class="label">Description</label>
        <input type="text" v-model="description">
        <label class="label">Price</label>
        <input type="text" v-model="price">
        <label class="label">Category</label>
        <input type="text" v-model="category">
        <label class="label">Quantity</label>
        <input type="text" v-model="quantity">
        <label class="label">Image</label>
        <input type="text" v-model="img">
        <button class="btn btn-success mt-3" @click="$event => addProduct()">Add</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
    export default {
      name: 'AddProducts',
      data() {
        return {
          productName: "",
          description: "",
          price: "",
          category: "",
          quantity: "",
          img: "",
        };
      },
      methods: {
        addProduct(e) {
          e;
          const payload = {
            prodName: this.productName,
            prodDescription: this.description,
            price: this.price,
            category: this.category,
            prodQuantity: this.quantity,
            imgURL: this.img
          };
          this.$store.dispatch("addProduct", payload);
        }
      }
    }
</script>
<style scoped>
.modal-body{
    display: flex;
    flex-direction: column;
}

.container{
  background-color: black;
}
</style>