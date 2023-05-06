<template>

   <div class="w-full flex justify-between bg-white p-2 shadow-lg shadow-black/15 rounded">

      <div>
        <button class="p-2 font-bold shadow-sm bg-slate-200 rounded ">
          Guardar
         </button>
       </div>

      <button @click="regresar" class="p-2">
       <img height="27" width="27" src="../../assets/icons/arrowbackoutline.svg" />
     </button>

   </div>

   <aside class="w-full flex items-center p-2 flex-col">
   
      <div class="text-start w-full mb-3">
             <h2 class="text-3xl font-bold">Mantenimiento equipo</h2>
             <h4 class="text-xl font-medium">Gestione los equipos.</h4>
      </div>

      <div class="w-full bg-white p-2 shadow-lg shadow-black/15 rounded">

         <div class="flex flex-row">
 
            <input class="p-2 m-1 mb-3 w-full border-gray-500 border rounded" placeholder="Nombre" />
            <input class="p-2 m-1 mb-3 w-full border-gray-500 border rounded" placeholder="Descripcion" />
            <input class="p-2 m-1 mb-3 w-full border-gray-500 border rounded" placeholder="categoria"/>

         </div>


      </div>
      
   </aside>

</template>

<script>
  export default {
   name:"MantEquiposComponent",
   methods:{
      regresar(){
        this.$router.back()
      }
   }
 }
</script>