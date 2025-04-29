<template>
  <div class="min-h-screen text-[#254159]">
    <!-- Header -->
    <header class="flex justify-between items-center p-6 bg-white shadow-sm">
      <h1 class="text-2xl font-bold text-[#F27405]">NovaKit</h1>
      <nav class="flex gap-6">
        <a href="#" class="hover:text-[#F24405]">Accueil</a>
        <a href="#" class="hover:text-[#F24405]">Marché</a>
        <a href="#" class="hover:text-[#F24405]">Contact</a>
      </nav>
    </header>

    <!-- Main content - 1 card per row -->
    <main>
      <h2 class="my-background p-12 text-white title-section">Palettes de couleurs</h2>
      <div
        class="p-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-white w-full"
      >
        <ColorsPalette />
      </div>

      <h2 class="bg-cyan-700 p-12 text-white title-section">Font-size</h2>
      <div class="flex flex-col gap-2 p-4">
        <DataTable :value="size" stripedRows tableStyle="min-width: 50rem">
          <Column field="class" header="Class"></Column>
          <Column field="style" header="Style"></Column>
        </DataTable>
        <div class="text-xs">
          <strong>text-xs</strong><br />
          Design your website.
        </div>
        <div class="text-sm">
          <strong>text-sm</strong><br />
          Design your website.
        </div>
        <div class="text-base">
          <strong>text-base</strong><br />
          Design your website.
        </div>
        <div class="text-lg">
          <strong>text-lg</strong><br />
          Design your website.
        </div>
        <div class="text-xl">
          <strong>text-xl</strong><br />
          Design your website.
        </div>
        <div class="text-2xl">
          <strong>text-2xl</strong><br />
          Design your website.
        </div>
      </div>
      <!------------ Font-family -------------->

      <h2 class="bg-cyan-800 p-12 text-white title-section">Font-family</h2>
      <!------------ DataTable font-family -------------->
      <div class="flex flex-col gap-2 p-4">
        <DataTable :value="family" stripedRows tableStyle="min-width: 50rem">
          <Column field="class" header="Class"></Column>
          <Column field="style" header="Style"></Column>
        </DataTable>
        <div class="font-sans">
          <strong>font-sans</strong><br />
          Design your website.
        </div>
        <div class="font-serif">
          <strong>font-serif</strong><br />
          Design your website.
        </div>
        <div class="font-mono">
          <strong>font-mono</strong><br />
          Design your website.
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import ColorsPalette from '@/components/ColorsPalette.vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref, onMounted } from 'vue'
import { ProductService } from '@/services/ProductService'

const family = ref()
const size = ref()

onMounted(() => {
  ProductService.getSize().then((data) => (size.value = data))
  ProductService.getProducts().then((data) => (family.value = data))
})
</script>

<style scoped>
.my-background {
  background: linear-gradient(90deg, #d32f2f, #ec407a, #1976d2, #fff176);
}

.title-section {
  font-size: var(--text-2xl);
  font-family: Arial, Helvetica, sans-serif;
}
</style>
