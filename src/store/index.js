import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router';
const renderURL = "https://meedleez.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    // showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setUser(state, values){
      state.user = values
    },
    setMessage(state, value){
      state.message = value
    },
    setProducts(state, values){
      state.products = values
    },
    setProduct(state, value){
      state.product = value
    },
    setMessage(state, values){
      state.message = values
    }
    // setSpinner(state, value){
    //   showSpinner = value
    // }
  },
  actions: {
    async login(context, payload){
      console.log(payload);
      // const res = await axios.post(`${renderURL}login`, payload);
      // console.log(res);
      // const {result, err} = await res.data;
      // if(result) {
      //   context.commit('setUser', result);
      // }else{
      //   context.commit('setMessage', err);
      // }
      fetch(`https://meedleez.onrender.com/login`, {
      // fetch(`http://localhost:3306/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}, 
        body: JSON.stringify(payload)
      })
      // router.push('/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(err);
      })
    },
    async register(context, payload){
      console.log(payload);
      // firstName, lastName, cellphoneNumber, emailAdd, userPass, userRole, userProfile
      // let res = await axios.post(`https://meedleez.onrender.com/register`, payload);
      // console.log(res);
      // let res = await axios.post(`${renderURL}register`, payload);
      // let {msg, err} = await res.data;
      // if(msg) {
      //   context.commit('setMessage', msg);
      // }else{
      //   context.commit('setMessage', err);
      // }
      // router.push('/')
      fetch(`https://meedleez.onrender.com/register`, {
        method: 'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"}, 
        body: JSON.stringify(payload)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(err);
      })
    },
    async fetchUsers(context){
      let res = await axios.get(`${renderURL}users`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setUser', results);
      }else{
        context.commit('setMessage', err);
      }
    },
    async updateUser(context, payload){
      let res = await axios.put(`${renderURL}users/${payload.id}`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers')
      }else{
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id){
      console.log(id);
      let res = await axios.delete(`${renderURL}user/${id}`);
      console.log(res.data);
      let msg = await res.data.msg;
      if(msg) {
        context.dispatch('fetchUsers');
      }
      if(msg) {
        context.commit('setMessage', msg);
      }
      context.dispatch("fetchUsers")
    },
    async addProduct(context, payload){
      let res = await axios.post(`${renderURL}product`, payload);
      console.log(res.data);
      let msg = await res.data.msg;
      // console.log(msg);
      if(msg) {
        context.commit('setMessage', msg)
      }
      context.dispatch("fetchProducts")
    },
    async fetchProducts(context){
      const res = await axios.get(`${renderURL}products`);
      const {results, err} = await res.data;
      console.log(results);
      if(results) {
        context.commit('setProducts', results);
        // context.commit('setSpinner', false);
      }
      if(err) {
        context.commit('setMessage', err);
      }
    },
    async fetchProduct(context, id){
      const res = await axios.get(`${renderURL}product/${id}`);
      const {results} = await res.data;
      context.commit("setProduct", results[0])
      console.log(results);
    },
    async updateProduct(context, payload){
      console.log(payload);
      let res = await axios.put(`${renderURL}product/${payload.id}`, payload);
      console.log(res.data);
      let msg = await res.data.msg;
      // if(msg) {
      //   context.dispatch('fetchProducts');
      // }
      if(msg) {
        context.commit('setMessage', msg)
      }
    },
    async deleteProduct(context, id){
      console.log(id);
      let res = await axios.delete(`${renderURL}product/${id}`);
      console.log(res.data);
      let msg = await res.data.msg;
      if(msg) {
        context.dispatch('fetchProducts');
      }
      if(msg) {
        context.commit('setMessage', msg);
      }
      context.dispatch("fetchProducts")
    }
  },
  modules: {
  }
})
