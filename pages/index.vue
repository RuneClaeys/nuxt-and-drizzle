<script lang="ts" setup>
import type { z } from 'zod';
import { createBookScheme, type Book } from '~/shared/models/book.interface';

//#region Books
const { data: books } = useFetch('/api/books');
//#endregion

//#region New Book
const newBook = ref<z.output<typeof createBookScheme>>({ author: '', title: '' });

async function saveBook() {
   const response = await $fetch('/api/books', { method: 'post', body: newBook.value });
   books.value?.push(response);
   newBook.value = { title: '', author: '' };
}
//#endregion

//#region Delete Book
async function deleteBook(book: Book) {
   await $fetch(`/api/books/${book.id}`, { method: 'delete' });
   const bookIndex = (books.value ?? []).findIndex((b) => b.id === book.id);
   if (bookIndex !== -1) books.value?.splice(bookIndex, 1);
}
//#endregion
</script>

<template>
   <UContainer class="flex flex-col gap-3 p-10">
      <UCard>
         <template #header>
            <h3>Add a book</h3>
         </template>

         <UForm :schema="createBookScheme" :state="newBook" class="space-y-4" @submit="saveBook">
            <UFormGroup label="Title" name="title">
               <UInput v-model="newBook.title" />
            </UFormGroup>

            <UFormGroup label="Author" name="author">
               <UInput v-model="newBook.author" />
            </UFormGroup>

            <UButton type="submit"> Submit </UButton>
         </UForm>
      </UCard>

      <UCard>
         <template #header>
            <h3>Your books</h3>
         </template>

         <UTable
            :rows="books ?? []"
            :columns="[
               { key: 'id', label: 'ID' },
               { key: 'title', label: 'Title' },
               { key: 'author', label: 'Author' },
               { key: 'createdAt', label: 'Created At' },
               { key: 'info', label: '' },
               { key: 'delete', label: '' },
            ]"
         >
            <template #info-data="{ row: book }">
               <UButton :to="`/${book.id}`" icon="i-heroicons-information-circle" size="sm" square variant="solid" />
            </template>

            <template #delete-data="{ row: book }">
               <UButton @click="deleteBook(book)" icon="i-heroicons-trash" size="sm" color="red" square variant="solid" />
            </template>
         </UTable>
      </UCard>
   </UContainer>
</template>

