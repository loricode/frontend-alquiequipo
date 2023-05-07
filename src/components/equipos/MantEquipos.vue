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

         <div class="flex flex-row flex-wrap">
           
            <div class="md:w-6/12 p-1">
              <input
               v-model="formValues.code"
               class="p-2 m-1 w-full border-gray-500 border rounded"
               placeholder="Codigo" />
            </div>   
         
            <div class="md:w-6/12 p-1">
              <input
               v-model="formValues.name" 
               class="p-2 m-1 w-full border-gray-500 border rounded"
               placeholder="Nombre"/>
            </div>

            <div class="md:w-6/12 p-1">
              <input
                v-on:change="handleChange" 
                type="file"
                accept="image/*"
                class="p-5px m-1 w-full border-gray-500 border rounded"
                placeholder="Imagen"/>
            </div>

            <div class="md:w-6/12 p-1">
               <input 
                v-model="formValues.quantity"
                 class="p-2 m-1 w-full border-gray-500 border rounded" 
                 placeholder="Cantidad" />
            </div>

            <div class="md:w-full p-1">
              <textarea 
              v-model="formValues.description"
               class="p-1 m-1 w-full border-gray-500 border rounded"
               placeholder="Descripcion"></textarea>
            </div>
   


         </div>


      </div>
      
   </aside>

</template>

<script>
  export default {
   name:"MantEquiposComponent",
   data:() =>({
     formValues:{
       name:"",
       code:"", 
      description:"", image:"", quantity:"" }
   }),
   methods:{
      regresar(){
        this.$router.back()
      },
      handleChange(event){
        console.log(event)
      }
   }
 }
</script>