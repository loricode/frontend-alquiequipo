<template>
   <aside class="w-1/4 h-[88.5vh] flex items-center flex-col justify-center p-2 bg-white shadow-lg shadow-black/15">
      
      <h1 class="pb-3 font-bold text-2xl">Modulo Equipos</h1>

      <ul class="text-gray-500 list-inside dark:text-gray-400">
        <li>
           <h1 class="font-bold text-xl">Menu</h1> 
           <ul class="text-start font-semibold mt-2 pl-2 space-y-1 list-inside">
             <li @click="goPage" class="hover:bg-gray-300 cursor-pointer">
              <router-link to="/consulta">Listado Equipos</router-link>
            </li>
             <li>Vista 2</li>
             <li>Vista 3</li>
           </ul>
         </li>
     </ul>
   </aside>
</template>

<script>
  export default {
   name:"SidebarComponent",
   methods:{
      goPage(){
        this.$router.push("./dashboard/consulta")
      }
   }
 }
</script>