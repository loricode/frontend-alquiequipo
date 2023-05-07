<template>
     <router-view></router-view>
</template>

<script>
//{{ JSON.stringify(store.state.sesionUser) }}
var store = {
   debug: true,
   state: {
    sesionUser:{
       user: { fullName:"", email:"", userId:"" },
       auth: false
   }
  },
   setStateSessionUser(newValue) {
     this.state.sesionUser = {...newValue}
   },
   clearStateSessionUser () {
     this.state.sesionUser = { user: { fullName:"", email:"", userId:"" },
       auth: false }
   }
 }

export default {
  name: 'App',
  data:() => ({
    store: store
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  background-color: rgb(248 247 250);
}
</style>
