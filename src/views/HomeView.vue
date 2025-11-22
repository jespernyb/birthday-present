<script setup lang="ts">
import { vConfetti } from '@neoconfetti/vue'
import n1 from '../pictures/nr1.jpeg'
import n2 from '../pictures/IMG_6786.webp'
import n3 from '../pictures/IMG_6789.jpg'
import n4 from '../pictures/1DDD7638-2C4F-45DD-94A3-77A7BDAE36A1_1_105_c.jpeg'
import n5 from '../pictures/21A37D9C-881C-437E-8CD6-424E5B980FED_1_105_c.jpeg'
import oliv from '../pictures/oliv.png'
import dryckmm from '../pictures/dryckmm.png'
import temple from '../pictures/temple.png'
import QuizVue from './QuizVue.vue'
</script>

<template>
  <div class="card flex flex-col items-center overflow-hidden">
    <div class="flex flex-col items-center gap-3 pt-10 pb-10 max-h-screen">
      <h1 class="text-6xl font-mono">Här nere gömmer sig din present</h1>
      <span
        class="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center pt-3 pb-3"
        onclick="document.getElementById('my-target-section').scrollIntoView({ behavior: 'smooth' })"
      >
        <i class="pi pi-arrow-down" />
      </span>

      <div v-confetti class="flex justify-center"></div>
      <div
        class="flex flex-col border border-surface shadow-lg justify-center items-center rounded-2xl"
      >
        <Image :src="n1" alt="Image" imageClass="rounded-2xl" />
      </div>
    </div>
    <div class="h-120"></div>
    <section id="my-target-section">
      <div class="flex flex-col justify-center gap-8 max-h-screen">
        <h2
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-20 slide-in-from-r-20 animate-duration-1000',
            leaveClass: 'animate-leave fade-out-0',
          }"
          class="flex justify-center text-6xl font-mono pt-5"
        >
          Är du redo?
        </h2>
        <div
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-20 slide-in-from-l-20 animate-duration-1000',
            leaveClass: 'animate-leave fade-out-0',
          }"
          class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-130 rounded-2xl gap-4"
        >
          <Image :src="n2" alt="Image" imageClass="rounded-2xl" />
        </div>
      </div>
    </section>

    <div class="h-120"></div>
    <div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-8 max-h-screen max-w-screen pr-5 pl-5">
      <div class="flex flex-col justify-center items-center">
        <h2
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-20 slide-in-from-r-20 animate-duration-1000',
            leaveClass: 'animate-leave fade-out-0',
          }"
          class="flex text-center text-3xl font-mono max-w-80 pb-4"
        >
          Vin i mängder
        </h2>
        <div
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000',
          }"
          class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl gap-4"
        >
          <Image :src="n3" alt="Image" imageClass="rounded-2xl" />
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-col justify-center items-center">
        <div
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000',
          }"
          class="flex flex-col justify-center items-center max-w-100 gap-4"
        >
          <Image :src="n4" alt="Image" imageClass="rounded-2xl" />
        </div>
        <h2
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-20 slide-in-from-r-20 animate-duration-1000',
            leaveClass: 'animate-leave fade-out-0',
          }"
          class="flex text-center text-3xl font-mono max-w-80 p-4"
        >
          Bad finnes
        </h2>
      </div>
      <div class="flex flex-col justify-center items-center">
        <h2
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-20 slide-in-from-t-20 animate-duration-1000',
            leaveClass: 'animate-leave fade-out-0',
          }"
          class="flex text-center text-3xl font-mono max-w-80 pb-4"
        >
          En och annan gammal byggnad
        </h2>
        <div
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000',
          }"
          class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl gap-4"
        >
          <Image :src="n5" alt="Image" imageClass="rounded-2xl" />
        </div>
      </div>
    </div>
    <div class="md:h-120 h-260"></div>

    <div class="flex flex-col md:flex-row justify-center gap-8">
      <div
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000',
        }"
        class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
      >
        <Image :src="oliv"></Image>
      </div>
      <div
        v-animateonscroll="{
          enterClass: 'animate-enter fade-in-10 slide-in-from-b-50 animate-duration-1000',
          leaveClass: 'animate-leave fade-out-0',
        }"
        class="flex flex-col justify-center items-center"
      >
        <i class="bg-primary shadow-lg w-8 h-8 rounded-md p-2 pi pi-plus"></i>
      </div>

      <div
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000',
        }"
        class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
      >
        <Image :src="dryckmm"></Image>
      </div>
      <div
        v-animateonscroll="{
          enterClass: 'animate-enter fade-in-10 slide-in-from-b-50 animate-duration-1000',
          leaveClass: 'animate-leave fade-out-0',
        }"
        class="flex flex-col justify-center items-center"
      >
        <i class="bg-primary shadow-lg w-8 h-8 rounded-md p-2 pi pi-plus"></i>
      </div>
      <div
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-t-16 animate-duration-1000',
        }"
        class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
      >
        <Image :src="temple"></Image>
      </div>
    </div>

    <div class="h-120"></div>
    <div class="flex flex-col justify-center gap-8 pb-50">
      <div
        v-animateonscroll="{
          enterClass: 'animate-enter fade-in-10 slide-in-from-l-30 animate-duration-1000',
          leaveClass: 'animate-leave fade-out-0',
        }"
        class=" "
      >
        <QuizVue class="w-screen pl-10 pr-10" />
      </div>
    </div>
  </div>
</template>
