<script setup lang="ts">

     type TypeButtonsHome = {id: number, label: string}

     const buttonsHome = ref<TypeButtonsHome[]>([
          {id:1, label: 'Je commande'},
          {id:2, label: "Qui sommes-nous ?"}
     ])

</script>

<template>
<div>
<div>
     <Logo />
          <div class="pt-[100px]">
               <div v-for="button in buttonsHome" :key="button.id" class="flex flex-col items-center p-2"> 
               <button class="bg-white text-purple-element  tracking-wide h-16 w-fit p-4 font-bold uppercase text-2xl rounded-full">{{button.label}}</button>
          </div>
          </div>
</div>
     <Footer />
</div>
</template>