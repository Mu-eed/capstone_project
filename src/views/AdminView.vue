<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1>Products</h1>
          <button
            type="button"
            class="btn btn-success add-btn"
            data-bs-toggle="modal"
            data-bs-target="#addProductModal"
          >
            Add
          </button>
        </div>
        <div class="col">
          <div class="table-responsive-md">
            <table class="table table-bordered mt-2 is-fullwidth">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Image</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in product" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.prodName }}</td>
                  <td>R {{ item.price }}</td>
                  <td>{{ item.category }}</td>
                  <td>{{ item.prodQuantity }}</td>
                  <td><img class="table-img" :src="item.imgURL" /></td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      :data-bs-target="'#editProductModal'+ item.id"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="this.$store.dispatch('deleteProduct', item.id)"
                    >
                      Delete
                    </button>
                  </td>
                  <EditProducts :item="item" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h1>Users</h1>
        </div>
        <div class="col">
          <table class="table is-striped is-bordered mt-2 is-fullwidth">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Role</th>
                <th>Image</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in user" :key="item.id">
                <td>{{ item.userID }}</td>
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.emailAdd }}</td>
                <td>{{ item.userRole }}</td>
                <td><img class="table-img" :src="item.userProfile" /></td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editProductModal"
                  >
                    Edit
                  </button>
                  <button type="button" class="btn btn-danger" @click="this.$store.dispatch('deleteUser', item.userID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <AddProducts />
  </div>
</template>
<script>
import axios from "axios";
// import Admin from '../components/Admin.vue'
import AddProducts from "../components/AddProduct.vue";
import EditProducts from "../components/EditProduct.vue";
export default {
  name: "AdminView",
  components: {
    AddProducts,
    EditProducts,
  },

  computed: {
    product() {
        return this.$store.state.products
    },
    user() {
        return this.$store.state.user
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchUsers')
  },
};
</script>
<style>
.table-img {
  height: 200px;
}

.add-btn {
  float: left;
}
</style>
