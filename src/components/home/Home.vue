<template>

   <div class="min-h-screen flex justify-center sm:justify-evenly">

     <div class="flex w-full justify-center content-center flex-wrap items-center">

     <div  class="w-full  xl:w-3/12 md:w-1/2 h-1/4 shadow-sm bg-white hover:bg-slate-200 p-2 m-2 rounded" v-for="itemModule in listModules" :key="itemModule.id" @click="redirigir(itemModule.path)"> 
        <div class="text-indigo-950 text-2xl">{{ itemModule.title }}</div> 
        <img class="m-auto h-12 w-12 mb-3" src="../../assets/logo.png"  alt="logo"/>
      </div>

  </div>
</div>
</template>

<script>
   
export default {
 name:"HomeComponent",
 data: function () {
   return {
     listModules:[
      { id:"1", title:"Equipos", dsc:"Alquiler equipo", path:"/dashboard"},
     /* { id:"2", title:"Seguridad", dsc:"", path:""},
      { id:"3", title:"Financiamiento", dsc:"", path:""},
      { id:"4", title:"Cajas", dsc:"", path:""},
      { id:"5", title:"Parametros", dsc:"", path:""}*/
   ]
   }
},
methods: {   

redirigir(pahtParam){
  
  this.$router.push(pahtParam)
}

},
}

</script>
