<template>
  <div class="min-h-screen bg-[#cdddef] text-[#254159]">
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
        <!-- Gerer avec grid ? -->
        <!------------------------------------ ROUGE --------------------------->
        <div class="flex flex-col mr-4">
          <!-- OK -->
          <span class="bg-[#F44336] p-4">Red</span>

          <span class="bg-[#FFEBEE] flex justify-between items-center text-black p-4"
            >red-lighten-5 <span></span>#FFEBEE</span
          >
          <span class="bg-[#FFCDD2] flex justify-between items-center text-black p-4"
            >red-lighten-4 <span></span>#FFCDD2</span
          >
          <span class="bg-[#EF9A9A] flex justify-between items-center text-black p-4"
            >red-lighten-3<span> </span>#EF9A9A</span
          >
          <span class="bg-[#E57373] flex justify-between items-center p-4"
            >red-lighten-2<span></span>#E57373</span
          >
          <span class="bg-[#EF5350] flex justify-between items-center p-4"
            >red-lighten-1 <span></span>#EF5350</span
          >
          <span class="bg-[#E53935] flex justify-between items-center p-4"
            >red-darken-1<span></span>#FF8A80</span
          >
          <span class="bg-[#D32F2F] flex justify-between items-center p-4"
            >red-darken-2 <span></span>#D32F2F</span
          >
          <span class="bg-[#C62828] flex justify-between items-center p-4"
            >red-darken-3 <span></span>#C62828</span
          >
          <span class="bg-[#B71C1C] flex justify-between items-center p-4"
            >red-darken-4<span></span>#B71C1C</span
          >
          <span class="bg-[#FF8A80] flex justify-between items-center p-4"
            >red-accent-1<span></span>#FF8A80</span
          >
          <span class="bg-[#FF5252] flex justify-between items-center p-4"
            >red-accent-2 <span></span>#FF5252</span
          >
          <span class="bg-[#FF1744] flex justify-between items-center p-4"
            >red-accent-3<span></span>#FF1744</span
          >
          <span class="bg-[#D50000] flex justify-between items-center p-4"
            >red-accent-4<span></span>#D50000</span
          >
        </div>
        <!------------------------------------ ROSE --------------------------->
        <div class="flex flex-col mr-4">
          <span class="bg-[#E91E63] p-4">pink</span>

          <span class="bg-[#FCE4EC] flex justify-between items-center text-black p-4"
            >pink-lighten-5 <span></span>#FFEBEE</span
          >
          <span class="bg-[#F8BBD0] flex justify-between items-center text-black p-4"
            >pink-lighten-4 <span></span>#FFCDD2</span
          >
          <span class="bg-[#F48FB1] flex justify-between items-center text-black p-4"
            >pink-lighten-3<span> </span>#EF9A9A</span
          >
          <span class="bg-[#F06292] flex justify-between items-center p-4"
            >pink-lighten-2<span></span>#F06292</span
          >
          <span class="bg-[#EC407A] flex justify-between items-center p-4"
            >pink-lighten-1 <span></span>#EC407A</span
          >
          <span class="bg-[#D81B60] flex justify-between items-center p-4"
            >pink-darken-1<span></span>#D81B60</span
          >
          <span class="bg-[#C2185B] flex justify-between items-center p-4"
            >pink-darken-2 <span></span>#C2185B</span
          >
          <span class="bg-[#AD1457] flex justify-between items-center p-4"
            >pink-darken-3 <span></span>#AD1457</span
          >
          <span class="bg-[#880E4F] flex justify-between items-center p-4"
            >pink-darken-4<span></span>#880E4F</span
          >
          <span class="bg-[#FF80AB] flex justify-between items-center p-4"
            >pink-accent-1<span></span>#FF80AB</span
          >
          <span class="bg-[#FF4081] flex justify-between items-center p-4"
            >pink-accent-2 <span></span>#FF4081</span
          >
          <span class="bg-[#F50057] flex justify-between items-center p-4"
            >pink-accent-3<span></span>#F50057</span
          >
          <span class="bg-[#C51162] flex justify-between items-center p-4"
            >pink-accent-4<span></span>#C51162</span
          >
        </div>

        <!--- purple -->
        <div class="flex flex-col mr-4">
          <span class="bg-[#9C27B0] p-4">purple</span>

          <span class="bg-[#F3E5F5] flex justify-between items-center text-black p-4"
            >purple-lighten-5 <span></span>#F3E5F5</span
          >
          <span class="bg-[#E1BEE7] flex justify-between items-center text-black p-4"
            >purple-lighten-4 <span></span>#E1BEE7</span
          >
          <span class="bg-[#CE93D8] flex justify-between items-center text-black p-4"
            >purple-lighten-3<span> </span>#CE93D8</span
          >
          <span class="bg-[#BA68C8] flex justify-between items-center p-4"
            >purple-lighten-2<span></span>#BA68C8
          </span>
          <span class="bg-[#AB47BC] flex justify-between items-center p-4"
            >purple-lighten-1 <span></span>#AB47BC</span
          >
          <span class="bg-[#8E24AA] flex justify-between items-center p-4"
            >purple-darken-1<span></span>#8E24AA</span
          >
          <span class="bg-[#7B1FA2] flex justify-between items-center p-4"
            >purple-darken-2 <span></span>#7B1FA2</span
          >
          <span class="bg-[#6A1B9A] flex justify-between items-center p-4"
            >purple-darken-3 <span></span>#6A1B9A</span
          >
          <span class="bg-[#4A148C] flex justify-between items-center p-4"
            >purple-darken-4<span></span>#4A148C</span
          >
          <span class="bg-[#EA80FC] flex justify-between items-center p-4"
            >purple-accent-1<span></span>#EA80FC</span
          >
          <span class="bg-[#E040FB] flex justify-between items-center p-4"
            >purple-accent-2 <span></span>#E040FB</span
          >
          <span class="bg-[#D500F9] flex justify-between items-center p-4"
            >purple-accent-3<span></span>#D500F9</span
          >
          <span class="bg-[#AA00FF] flex justify-between items-center p-4"
            >purple-accent-4<span></span>#AA00FF</span
          >
        </div>
        <!------------------------------------ BLEU --------------------------->
        <div class="flex flex-col mr-4">
          <span class="bg-[#2196F3] p-4">blue</span>

          <span class="bg-[#E3F2FD] flex justify-between items-center text-black p-4"
            >blue-lighten-5 <span></span>#E3F2FD</span
          >
          <span class="bg-[#BBDEFB] flex justify-between items-center text-black p-4"
            >blue-lighten-4 <span></span>#BBDEFB</span
          >
          <span class="bg-[#90CAF9] flex justify-between items-center text-black p-4"
            >blue-lighten-3<span> </span>#90CAF9</span
          >
          <span class="bg-[#64B5F6] flex justify-between items-center p-4"
            >blue-lighten-2<span></span>#64B5F6</span
          >
          <span class="bg-[#42A5F5] flex justify-between items-center p-4"
            >blue-lighten-1 <span></span>#42A5F5</span
          >
          <span class="bg-[#1E88E5] flex justify-between items-center p-4"
            >blue-darken-1<span></span>#1E88E5</span
          >
          <span class="bg-[#1976D2] flex justify-between items-center p-4"
            >blue-darken-2 <span></span>#1976D2</span
          >
          <span class="bg-[#1565C0] flex justify-between items-center p-4"
            >blue-darken-3 <span></span>#1565C0</span
          >
          <span class="bg-[#0D47A1] flex justify-between items-center p-4"
            >blue-darken-4<span></span>#0D47A1</span
          >
          <span class="bg-[#82B1FF] flex justify-between items-center p-4"
            >blue-accent-1<span></span>#82B1FF</span
          >
          <span class="bg-[#448AFF] flex justify-between items-center p-4"
            >blue-accent-2 <span></span>#448AFF</span
          >
          <span class="bg-[#2979FF] flex justify-between items-center p-4"
            >blue-accent-3<span></span>#2979FF</span
          >
          <span class="bg-[#2962FF] flex justify-between items-center p-4"
            >blue-accent-4<span></span>#2962FF</span
          >
        </div>

        <!------------------------ JAUNE ------------->
        <div class="flex flex-col mr-4">
          <span class="bg-[#FFEB3B] p-4">Yellow</span>

          <span class="bg-[#FFFDE7] flex justify-between items-center text-black p-4"
            >Yellow-lighten-5 <span></span>#FFFDE7</span
          >
          <span class="bg-[#FFF9C4] flex justify-between items-center text-black p-4"
            >Yellow-lighten-4 <span></span>#FFF9C4</span
          >
          <span class="bg-[#FFF59D] flex justify-between items-center text-black p-4"
            >Yellow-lighten-3<span> </span>#FFF59D</span
          >
          <span class="bg-[#FFF176] flex justify-between items-center text-black p-4"
            >Yellow-lighten-2<span></span>#FFF176</span
          >
          <span class="bg-[#FFEE58] flex justify-between items-center text-black p-4"
            >Yellow-lighten-1 <span></span>#FFEE58</span
          >
          <span class="bg-[#FDD835] flex justify-between items-center text-black p-4"
            >Yellow-darken-1<span></span>#FDD835
          </span>
          <span class="bg-[#FBC02D] flex justify-between items-center text-black p-4"
            >Yellow-darken-2 <span></span>#FBC02D</span
          >
          <span class="bg-[#F9A825] flex justify-between items-center text-black p-4"
            >Yellow-darken-3 <span></span>#F9A825</span
          >
          <span class="bg-[#F57F17] flex justify-between items-center text-black p-4"
            >Yellow-darken-4<span></span>#F57F17</span
          >
          <span class="bg-[#FFFF8D] flex justify-between items-center text-black p-4"
            >Yellow-accent-1<span></span>#FFFF8D</span
          >
          <span class="bg-[#FFFF00] flex justify-between items-center text-black p-4"
            >Yellow-accent-2 <span></span>#FFFF00</span
          >
          <span class="bg-[#FFEA00] flex justify-between items-center text-black p-4"
            >Yellow-accent-3<span></span>#FFEA00</span
          >
          <span class="bg-[#FFD600] flex justify-between items-center text-black p-4"
            >Yellow-accent-4<span></span>#FFD600</span
          >
        </div>
        <div class="flex flex-col mr-4">
          <span class="bg-[#4CAF50] p-4">vert</span>

          <span class="bg-[#E8F5E9] flex justify-between items-center text-black p-4"
            >green-lighten-5 <span></span>#E8F5E9</span
          >
          <span class="bg-[#C8E6C9] flex justify-between items-center text-black p-4"
            >green-lighten-4 <span></span>#C8E6C9</span
          >
          <span class="bg-[#A5D6A7] flex justify-between items-center text-black p-4"
            >green-lighten-3<span> </span>#A5D6A7</span
          >
          <span class="bg-[#81C784] flex justify-between items-center p-4"
            >green-lighten-2<span></span>#81C784</span
          >
          <span class="bg-[#66BB6A] flex justify-between items-center p-4"
            >green-lighten-1 <span></span>#66BB6A</span
          >
          <span class="bg-[#43A047] flex justify-between items-center p-4"
            >green-darken-1<span></span>#43A047</span
          >
          <span class="bg-[#388E3C] flex justify-between items-center p-4"
            >green-darken-2 <span></span>#388E3C</span
          >
          <span class="bg-[#2E7D32] flex justify-between items-center p-4"
            >green-darken-3 <span></span>#2E7D32</span
          >
          <span class="bg-[#1B5E20] flex justify-between items-center p-4"
            >green-darken-4<span></span>#1B5E20</span
          >
          <span class="bg-[#B9F6CA] flex justify-between items-center text-black p-4"
            >green-accent-1<span></span>#B9F6CA</span
          >
          <span class="bg-[#69F0AE] flex justify-between items-center text-black p-4"
            >green-accent-2 <span></span>#69F0AE</span
          >
          <span class="bg-[#00E676] flex justify-between items-center text-black p-4"
            >green-accent-3<span></span>#00E676</span
          >
          <span class="bg-[#00C853] flex justify-between items-center text-black p-4"
            >green-accent-4<span></span>#00C853</span
          >
        </div>
        <!----------------- GREY ------------->
        <div class="flex flex-col mr-4">
          <span class="bg-[#9E9E9E] p-4">grey</span>

          <span class="bg-[#FAFAFA] flex justify-between items-center text-black p-4"
            >grey-lighten-5 <span></span>#FAFAFA</span
          >
          <span class="bg-[#F5F5F5] flex justify-between items-center text-black p-4"
            >grey-lighten-4 <span></span>#F5F5F5</span
          >
          <span class="bg-[#EEEEEE] flex justify-between items-center text-black p-4"
            >grey-lighten-3<span> </span>#EEEEEE</span
          >
          <span class="bg-[#E0E0E0] flex justify-between items-center text-black p-4"
            >grey-lighten-2<span></span>#E0E0E0</span
          >
          <span class="bg-[#BDBDBD] flex justify-between items-center p-4"
            >grey-lighten-1 <span></span>#BDBDBD</span
          >
          <span class="bg-[#757575] flex justify-between items-center p-4"
            >grey-darken-1<span></span>#757575</span
          >
          <span class="bg-[#616161] flex justify-between items-center p-4"
            >grey-darken-2 <span></span>#616161</span
          >
          <span class="bg-[#424242] flex justify-between items-center p-4"
            >grey-darken-3 <span></span>#424242</span
          >
          <span class="bg-[#212121] flex justify-between items-center p-4"
            >grey-darken-4<span></span>#212121</span
          >
        </div>
        <!-- BLACK AND WHITE -->
        <div class="flex flex-col mr-4">
          <span class="bg-[#FFEB3B] p-4">Shades</span>

          <span class="bg-[#000000] flex justify-between items-center text-white p-4"
            >Black <span></span>#000000</span
          >
          <span class="bg-[#FFFFFF] flex justify-between items-center text-black p-4"
            >White <span></span>#FFFFFF</span
          >
          <span class="bg-[#FFFFFF00] flex justify-between items-center text-black p-4"
            >Transparent<span> </span>#FFFFFF00</span
          >
        </div>

        <!-- VERT -->
      </div>
      <!------------ TEXT AND TYPOGRAPHY -------------->
      <!------------ Font-size  -------------->
      <div><h2 class="bg-cyan-700 p-12 text-white title-section">Font-size</h2></div>

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

      <div><h2 class="bg-cyan-800 p-12 text-white title-section">Font-family</h2></div>
      <!------------ DataTable font-family -------------->
      <div class="flex flex-col gap-2 p-4">
        <DataTable :value="products" stripedRows tableStyle="min-width: 50rem">
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

    <!-- Footer -->
    <footer
      class="bg-[#51768C] flex flex-col text-center justify-center text-sm text-white mt-12 py-6"
    >
      <span
        >Made with <span class="pi pi-heart-fill ml-0.5 text-2xl" style="color: #f27405"></span
      ></span>
      <span> © 2025 NovaKit. Tous droits réservés.</span>
    </footer>
  </div>
</template>
<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref, onMounted } from 'vue'
import { ProductService } from '@/services/ProductService'

const products = ref()
const size = ref()

onMounted(() => {
  ProductService.getSize().then((data) => (size.value = data))
  ProductService.getProducts().then((data) => (products.value = data))
})

/*const fonts = [
  {
    Class: 'font-sans',
    Style: 'font-family: var(--font-sans);',
  },
  {
    Class: 'font-serif',
    Style: 'font-family: var(--font-serif);',
  },
  {
    Class: 'font-mono',
    Style: 'font-family: var(--font-mono);',
  },
]
  */
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
