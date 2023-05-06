<template>

   <div class="w-full bg-white p-2 shadow-lg shadow-black/15 text-end">
    
      <button @click="close" class="p-2">
       <img height="27" width="27" src="../../assets/icons/closeoutline.svg" />
     </button>

   </div>

   <aside class="w-full flex items-center p-2 flex-col">

         <div class="text-start w-full mb-3">
             <h2 class="text-3xl font-bold">Consulta equipo</h2>
             <h4 class="text-xl font-medium">Consulte el listado de equipos.</h4>
         </div>

      <div class="w-full bg-white p-2 shadow-lg shadow-black/15 rounded">

         <div class="flex flex-row">

         <table class="w-11/12 table-auto">
            <thead 
            class="border-b bg-white font-medium dark:bg-neutral-300"
            >
               <tr>
                  <th scope="col" class="px-6 py-4">Nombre</th>
                  <th scope="col" class="px-6 py-4">Descripcion</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="item in listEquipo" v-bind:key="item.id"  class="border-b bg-neutral-100  dark:bg-neutral-100">
                  <td class="whitespace-nowrap px-6 py-4">{{ item.name }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ item.description }}</td>
               </tr>
            </tbody>
         </table>

         <div class="w-1/12">
            <button @click="addEquipo" class="p-2 rounded-full border-solid border-2 shadow-sm border-zinc-900">
               <img height="27" width="27" src="../../assets/icons/addcircleoutline.svg" />
            </button>
         </div>
      </div>
      </div>
   </aside>
</template>

<script>

import axios from 'axios'; 

  export default {
   name:"ConsultaEquiposComponent",
   data: function () {
   return {
      listEquipo:[]
   }
   },
   methods:{
      addEquipo(){
        this.$router.push("./gestion")
      },
      close(){
         this.$router.push("/dashboard")
      },
      async getList(){
        const response = await axios.get("http://localhost:8000/api/equipo/listEquipo")
        this.listEquipo = response.data.data
    
    }
   },

   mounted(){
    this.getList();
  },
  
 }
</script>