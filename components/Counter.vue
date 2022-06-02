<script setup lang="ts">
// je veux decrementer sans passer en dessous de 1
// je veux incrementer sans passer au dessus de 15
const currentPerson = ref(1)
const currentGrams = ref(100)

function incrementPerson(){
    if (currentPerson.value < 15) {
    currentPerson.value++
    }
}
    function decrementPerson(){
        if (currentPerson.value > 1) {
        currentPerson.value --
        }
    }

function incrementGrams(){
    if (currentGrams.value < 300) {
    currentGrams.value = currentGrams.value + 50
    }
}

function decrementGrams(){
    if (currentGrams.value > 100) {
    currentGrams.value = currentGrams.value -= 50
    }
}





</script>

<template>
  <div class="flex justify-center uppercase pt-12 pb-4">
    <p class="font-bold text-white tracking-[.10em] text-2xl">nombre de</p>
    <p class="pl-2 font-['Knewave'] text-2xl tracking-[.25em] text-yellow-dark">
      personnes
    </p>
  </div>
  <div class="flex justify-center items-center">
    <div
      class="w-10 h-10 bg-white flex justify-center rounded-full items-center text-yellow-dark"
    >
      <RIcon name="Minus" class="w-8" @click="decrementPerson"/>
    </div>
    <div
      class="w-36 h-36 mx-8 bg-yellow-light rounded-xl flex justify-center items-center"
    >
    <p class="text-8xl text-purple-element">{{currentPerson}}</p>
    </div>
    <div>
      <div
        class="w-10 h-10 bg-white flex justify-center rounded-full items-center text-yellow-dark"
      >
        <RIcon name="Plus" class="w-8" @click="incrementPerson"/>
      </div>
    </div>
  </div>

  <div class="flex flex-col justify-center items-center uppercase pt-12 pb-4">
    <div class="flex justify-center">
      <p class="font-bold text-white tracking-[.10em] text-2xl">nombre de</p>
      <p
        class="pl-2 font-['Knewave'] text-2xl tracking-[.25em] text-yellow-dark"
      >
        grammes
      </p>
    </div>
    <p class="font-bold text-white tracking-[.10em] text-2xl">par personne</p>
  </div>
  <div class="flex justify-center items-center pb-12">
    <div
      class="w-10 h-10 bg-white flex justify-center rounded-full items-center text-yellow-dark"
    >
      <RIcon name="Minus" class="w-8" @click="decrementGrams"/>
    </div>
    <div
      class="w-36 h-[45px] mx-8 bg-yellow-light rounded-xl flex justify-center items-center"
    >
      <p class="text-2xl text-purple-element font-bold">{{currentGrams}}</p>
    </div>
    <div>
      <div
        class="w-10 h-10 bg-white flex justify-center rounded-full items-center text-yellow-dark"
      >
        <RIcon name="Plus" class="w-8" @click="incrementGrams" />
      </div>
    </div>
  </div>
</template>
