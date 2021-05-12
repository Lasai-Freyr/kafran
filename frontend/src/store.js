import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'
import http from '../http';
require('dotenv').config();


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    login({commit}, form){
      console.log("test 2.0");
      return new Promise((resolve, reject) => {
        console.log("test 2.1");
        http.post('/auth/login', form )
        .then(resp => {
          console.log("test 2.3");
          const token = resp.data.token;
          const user = resp.data.id;
          localStorage.setItem('token', token);
          console.log('token : ', token);
          localStorage.setItem('user', user);
         // axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success', token, user);
          resolve(resp)    
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      //  delete axios.defaults.headers.common['Authorization'];
        resolve()
      })
    },
    delete({commit}) {
      return new Promise((resolve) => {
        commit('logout')
        const jwt = require('jsonwebtoken');
        const token =  localStorage.getItem('token');
        const decodedToken = jwt.verify(token, `${process.env.VUE_APP_TOKEN}`);
        const userId = decodedToken.userId;
        console.log("axios del account");
        http.delete(`/${userId}`);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      //  delete axios.defaults.headers.common['Authorization']
        
        resolve()
      })
    }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
})