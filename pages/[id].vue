<script setup lang="ts">
import { useRoute } from 'vue-router';

//#region Get Book by Id
const route = useRoute();
const bookId = route.params.id;

const { data: book } = await useFetch(`/api/books/${bookId}`);
//#endregion
</script>

<template>
   <UContainer class="flex flex-col gap-3 p-10">
      <UCard>
         <template #header>
            <h3>Title: {{ book?.title }}</h3>
         </template>

         <p>Author: {{ book?.author }}</p>
      </UCard>

      <UButton class="self-start" :icon="'i-heroicons-chevron-left'" to="/"> Back to books </UButton>
   </UContainer>
</template>

