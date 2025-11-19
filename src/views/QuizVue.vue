<script setup lang="ts">
import { ref } from 'vue'
import { vConfetti } from '@neoconfetti/vue'

// En array som håller alla meddelanden
const messages = ref({
  text: 'Kan du gissa vilket resmål?',
})

// Användarens nuvarande gissning i textrutan
const userGuess = ref('')
const isLoading = ref(false)
const correctGuess = ref(false)

// Funktion som körs när användaren skickar
async function handleSend() {
  if (!userGuess.value) return

  isLoading.value = true

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess: userGuess.value }),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    correctGuess.value = data.correct
    messages.value = { text: data.answer }
  } catch (error) {
    console.error('Error fetching quiz response:', error)
    messages.value = {
      text: 'Ursäkta, jag har lite tekniska problem... Prova igen!',
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-screen max-h-180">
    <div class="flex justify-center items-center overflow-y-auto h-[400px]">
      <div v-if="isLoading">
        <span class="text-center text-[3vw] font-mono" class_name="animate-pulse">...</span>
      </div>
      <div v-else-if="!isLoading">
        <span class="text-center text-[3vw] font-mono"> {{ messages.text }}</span>
      </div>
    </div>

    <div v-if="correctGuess" class="flex justify-center items-center">
      <div v-confetti class=""></div>
    </div>
    <form @submit.prevent="handleSend" class="flex flex-col items-center gap-4">
      <input
        v-model="userGuess"
        type="text"
        placeholder="Gissa en stad..."
        :disabled="isLoading"
        class="font-mono text-center rounded-md shadow-md hover:shadow-xl"
      />
      <button
        type="submit"
        :disabled="isLoading"
        class="self-center w-20 h-10 rounded-md shadow-md text-primary-contrast bg-primary hover:bg-primary-emphasis hover:shadow-xl"
      >
        Skicka
      </button>
    </form>
  </div>
</template>
