<template>
   <div class="flex min-h-screen w-700 justify-center items-center">
   
   <div class="flex items-center m-2 p-5 bg-white content-center justify-center shadow-sm p-2 rounded">

     <div class="flex flex-col justify-center content-center w-80">

      <img class="m-auto h-12 w-12 mb-3" src="../../../assets/logo.png"  alt="logo"/>

        <input v-model="email" class="p-2 mb-3 w-full border-gray-500 border rounded" 
          placeholder="Email"
        />

        <input class="p-2 mb-3 w-full border-gray-500 border rounded" 
          v-model="password"
          placeholder="Password"
        />

        <button @click="signIn" class="p-2 text-white w-full rounded bg-gray-700">
          Login
        </button>

     </div>
   </div>
   </div>
</template>

<script>

import { signIn } from '../../../domain/http/Autenticacion/AutenticacionAction';

export default {
  
   name: 'LoginComponent',
   data: function () {
   return {
     email: "",
     password:''
   }
 },
 methods: {   

 signIn: async function (){
   
   const objReq = {
      email: this.email,
      password: this.password
   };

   const { data, status } = await signIn(objReq);
   
    if(status === 200){
       
      this.$router.push("/home")

    }else{

    }
 }

},

  
 
   }
 
 </script>

 
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>