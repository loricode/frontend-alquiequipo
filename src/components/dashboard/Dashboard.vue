<template>
   <Navbar/>
   <div class="flex flex-row">
      <Sidebar/>
      <div class="w-full">
        <router-view />
      </div>
   </div>
   
</template>

<script>

import Navbar from '../navegacion/Navbar.vue';
import Sidebar from '../navegacion/Sidebar.vue';

 export default {
   name:"DashboardComponent",
   components:{
      Navbar,
      Sidebar
   }
 }
</script>