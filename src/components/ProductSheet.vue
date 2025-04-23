<template>
  <div class="min-h-screen bg-[#F9FAFB] text-[#254159]">
    <!-- Header -->
    <header class="flex justify-between items-center p-6 bg-white shadow-sm">
      <h1 class="text-2xl font-bold text-[#F27405]">NovaKit</h1>
      <nav class="flex gap-6">
        <a href="#" class="hover:text-[#F24405]">Accueil</a>
        <a href="#" class="hover:text-[#F24405]">Marché</a>
        <a href="#" class="hover:text-[#F24405]">Contact</a>
      </nav>
    </header>

    <!-- Catch Section 
    <section class="text-center py-20 bg-[#51768C] text-white">
      <h2 class="text-4xl font-extrabold mb-4">Explorez des assets digitaux uniques</h2>
      <p class="text-lg max-w-2xl mx-auto">
        Sprites 2D, illustrations, icônes et bien plus à portée de clic.
      </p>
    </section>
-->
    <!-- Main content - 1 card per row -->
    <main>
      <h2 class="my-background p-12 text-white">Palettes de couleur</h2>
      <div class="p-4 grid grid-cols-4 gap-4 items-center text-white w-full">
        <!-- Gerer avec grid ? -->
        <!------------------------------------ ROUGE --------------------------->
        <div class="flex flex-col mr-4">
          <!-- OK -->
          <span class="bg-[#F44336] p-4">Red</span>
          <div class="flex flex-col">
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
        </div>
        <!------------------------------------ ROSE --------------------------->
        <div class="flex flex-col mr-4">
          <span class="bg-[#E91E63] p-4">pink</span>
          <div class="flex flex-col">
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
        </div>
        <!------------------------------------ BLEU --------------------------->
        <div class="flex flex-col mr-4">
          <span class="bg-[#2196F3] p-4">blue</span>
          <div class="flex flex-col">
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
        </div>

        <!------------------------------------ JAUNE --------------------------->
        <div class="flex flex-col mr-4">
          <span class="bg-[#FFEB3B] p-4">Yellow</span>
          <div class="flex flex-col">
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
        </div>
      </div>

      <!--
        <div class="flex flex-col mr-4">
          <span class="bg-[#673AB7]">Sections Font</span>
          <span class="bg-[#EDE7F6]">Section Icons</span>
          <span class="bg-[#D1C4E9]">GodPack</span>
          <span class="bg-[#B39DDB]">Section Couleur</span>
          <span class="bg-[#9575CD]">Sections Font</span>
          <span class="bg-[#7E57C2]">Section Icons</span>
          <span>GodPack</span>
        </div>
        <div class="flex flex-col mr-4">
          <span class="bg-[#B2EBF2]">Sections Font</span>
          <span class="bg-[#80DEEA]">Section Icons</span>
          <span class="bg-[#4DD0E1]">GodPack</span>
          <span class="bg-[#26C6DA]">Section Couleur</span>
          <span class="bg-[#00ACC1]">Sections Font</span>
          <span class="bg-[#0097A7]">Section Icons</span>
          <span>GodPack</span>
        </div>
        <div class="flex flex-col mr-4">
          <span class="bg-[#B2DFDB]">Sections Font</span>
          <span class="bg-[#80CBC4]">Section Icons</span>
          <span class="bg-[#4DB6AC]">GodPack</span>
          <span class="bg-[#26A69A]">Section Couleur</span>
          <span class="bg-[#00897B]">Sections Font</span>
          <span class="bg-[#00796B]">Section Icons</span>
          <span>GodPack</span>
        </div>
        <div class="flex flex-col mr-4">
          <span class="bg-[#B2DFDB]">Sections Font</span>
          <span class="bg-[#80CBC4]">Section Icons</span>
          <span class="bg-[#4DB6AC]">GodPack</span>
          <span class="bg-[#26A69A]">Section Couleur</span>
          <span class="bg-[#00897B]">Sections Font</span>
          <span class="bg-[#00796B]">Section Icons</span>
          <span>GodPack</span>
        </div>
        <div class="flex flex-col mr-4">
          <span class="bg-[#B2DFDB]">Sections Font</span>
          <span class="bg-[#80CBC4]">Section Icons</span>
          <span class="bg-[#4DB6AC]">GodPack</span>
          <span class="bg-[#26A69A]">Section Couleur</span>
          <span class="bg-[#00897B]">Sections Font</span>
          <span class="bg-[#00796B]">Section Icons</span>
          <span>GodPack</span>
        </div>
        <div class="flex flex-col mr-4">
          <span class="bg-[#B2DFDB]">Sections Font</span>
          <span class="bg-[#80CBC4]">Section Icons</span>
          <span class="bg-[#4DB6AC]">GodPack</span>
          <span class="bg-[#26A69A]">Section Couleur</span>
          <span class="bg-[#00897B]">Sections Font</span>
          <span class="bg-[#00796B]">Section Icons</span>
          <span>GodPack</span>
        </div>
         -->

      <div><h2 class="bg-cyan-700 p-12 text-white">Font - Typography</h2></div>
      <div><h2 class="bg-cyan-800 p-12 text-white">Title</h2></div>
      <div><h2 class="bg-red-800 p-12 text-white">Body</h2></div>
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
<script></script>
<style scoped>
.my-background {
  background: linear-gradient(90deg, #d32f2f, #ec407a, #1976d2, #fff176);
}
</style>
