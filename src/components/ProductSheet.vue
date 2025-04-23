<template>
  <div class="min-h-screen bg-[#F9FAFB] text-[#254159]">
    <!-- Header -->
    <header class="flex justify-between items-center p-6 bg-white shadow-sm">
      <h1 class="text-2xl font-bold text-[#F27405]">PackIt</h1>
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
      <h2 class="bg-red-900 p-12 text-white">Palettes de couleur</h2>
      <div class="p-6 space-y-6">
        <div class="flex flex-row p-4 items-center text-white w-full">
          <div class="flex flex-col mr-4">
            <span class="bg-[#F44336] p-4">Red</span>
            <div class="flex flex-col">
              <span class="bg-[#FFEBEE] text-black p-2"
                >red-lighten-5 <span class="m-10"></span>#FFEBEE</span
              >
              <span class="bg-[#FFCDD2] text-black p-2"
                >red-lighten-4 <span class="m-10"></span>#FFCDD2</span
              >
              <span class="bg-[#EF9A9A] text-black p-2"
                >red-lighten-3<span class="m-10"> </span>#EF9A9A</span
              >
              <span class="bg-[#E57373] p-2">red-lighten-2<span class="m-10"></span>#E57373</span>
              <span class="bg-[#EF5350] p-2">red-lighten-1 <span class="m-10"></span>#EF5350</span>
              <span class="bg-[#E53935] p-2">red-darken-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#D32F2F] p-2">red-darken-2 <span class="m-10"></span>#D32F2F</span>
              <span class="bg-[#C62828] p-2">red-darken-3 <span class="m-10"></span>#C62828</span>
              <span class="bg-[#B71C1C] p-2">red-darken-4<span class="m-10"></span>#B71C1C</span>
              <span class="bg-[#FF8A80] p-2">red-accent-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#FF5252] p-2">red-accent-2 <span class="m-10"></span>#FF5252</span>
              <span class="bg-[#FF1744] p-2">red-accent-3<span class="m-10"></span>#FF1744</span>
              <span class="bg-[#D50000] p-2">red-accent-4<span class="m-10"></span>#D50000</span>
            </div>
          </div>
          <div class="flex flex-col mr-4">
            <span class="bg-[#E91E63] p-4">pink</span>
            <div class="flex flex-col">
              <span class="bg-[#FCE4EC] text-black p-2"
                >pink-lighten-5 <span class="m-10"></span>#FFEBEE</span
              >
              <span class="bg-[#F8BBD0] text-black p-2"
                >pink-lighten-4 <span class="m-10"></span>#FFCDD2</span
              >
              <span class="bg-[#F48FB1] text-black p-2"
                >pink-lighten-3<span class="m-10"> </span>#EF9A9A</span
              >
              <span class="bg-[#F06292] p-2">pink-lighten-2<span class="m-10"></span>#F06292</span>
              <span class="bg-[#EC407A] p-2">pink-lighten-1 <span class="m-10"></span>#EC407A</span>
              <span class="bg-[#D81B60] p-2">pink-darken-1<span class="m-10"></span>#D81B60</span>
              <span class="bg-[#C2185B] p-2">pink-darken-2 <span class="m-10"></span>#C2185B</span>
              <span class="bg-[#AD1457] p-2">pink-darken-3 <span class="m-10"></span>#AD1457</span>
              <span class="bg-[#880E4F] p-2">pink-darken-4<span class="m-10"></span>#880E4F</span>
              <span class="bg-[#FF80AB] p-2">pink-accent-1<span class="m-10"></span>#FF80AB</span>
              <span class="bg-[#FF4081] p-2">pink-accent-2 <span class="m-10"></span>#FF4081</span>
              <span class="bg-[#F50057] p-2">pink-accent-3<span class="m-10"></span>#F50057</span>
              <span class="bg-[#C51162] p-2">pink-accent-4<span class="m-10"></span>#C51162</span>
            </div>
          </div>
          <div class="flex flex-col mr-4">
            <span class="bg-[#F44336] p-4">Red</span>
            <div class="flex flex-col">
              <span class="bg-[#FFEBEE] text-black p-2"
                >red-lighten-5 <span class="m-10"></span>#FFEBEE</span
              >
              <span class="bg-[#FFCDD2] text-black p-2"
                >red-lighten-4 <span class="m-10"></span>#FFCDD2</span
              >
              <span class="bg-[#EF9A9A] text-black p-2"
                >red-lighten-3<span class="m-10"> </span>#EF9A9A</span
              >
              <span class="bg-[#E57373] p-2">red-lighten-2<span class="m-10"></span>#E57373</span>
              <span class="bg-[#EF5350] p-2">red-lighten-1 <span class="m-10"></span>#EF5350</span>
              <span class="bg-[#E53935] p-2">red-darken-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#D32F2F] p-2">red-darken-2 <span class="m-10"></span>#D32F2F</span>
              <span class="bg-[#C62828] p-2">red-darken-3 <span class="m-10"></span>#C62828</span>
              <span class="bg-[#B71C1C] p-2">red-darken-4<span class="m-10"></span>#B71C1C</span>
              <span class="bg-[#FF8A80] p-2">red-accent-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#FF5252] p-2">red-accent-2 <span class="m-10"></span>#FF5252</span>
              <span class="bg-[#FF1744] p-2">red-accent-3<span class="m-10"></span>#FF1744</span>
              <span class="bg-[#D50000] p-2">red-accent-4<span class="m-10"></span>#D50000</span>
            </div>
          </div>
          <div class="flex flex-col mr-4">
            <span class="bg-[#F44336] p-4">Red</span>
            <div class="flex flex-col">
              <span class="bg-[#FFEBEE] text-black p-2"
                >red-lighten-5 <span class="m-10"></span>#FFEBEE</span
              >
              <span class="bg-[#FFCDD2] text-black p-2"
                >red-lighten-4 <span class="m-10"></span>#FFCDD2</span
              >
              <span class="bg-[#EF9A9A] text-black p-2"
                >red-lighten-3<span class="m-10"> </span>#EF9A9A</span
              >
              <span class="bg-[#E57373] p-2">red-lighten-2<span class="m-10"></span>#E57373</span>
              <span class="bg-[#EF5350] p-2">red-lighten-1 <span class="m-10"></span>#EF5350</span>
              <span class="bg-[#E53935] p-2">red-darken-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#D32F2F] p-2">red-darken-2 <span class="m-10"></span>#D32F2F</span>
              <span class="bg-[#C62828] p-2">red-darken-3 <span class="m-10"></span>#C62828</span>
              <span class="bg-[#B71C1C] p-2">red-darken-4<span class="m-10"></span>#B71C1C</span>
              <span class="bg-[#FF8A80] p-2">red-accent-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#FF5252] p-2">red-accent-2 <span class="m-10"></span>#FF5252</span>
              <span class="bg-[#FF1744] p-2">red-accent-3<span class="m-10"></span>#FF1744</span>
              <span class="bg-[#D50000] p-2">red-accent-4<span class="m-10"></span>#D50000</span>
            </div>
          </div>
          <div class="flex flex-col mr-4">
            <span class="bg-[#F44336] p-4">Red</span>
            <div class="flex flex-col">
              <span class="bg-[#FFEBEE] text-black p-2"
                >red-lighten-5 <span class="m-10"></span>#FFEBEE</span
              >
              <span class="bg-[#FFCDD2] text-black p-2"
                >red-lighten-4 <span class="m-10"></span>#FFCDD2</span
              >
              <span class="bg-[#EF9A9A] text-black p-2"
                >red-lighten-3<span class="m-10"> </span>#EF9A9A</span
              >
              <span class="bg-[#E57373] p-2">red-lighten-2<span class="m-10"></span>#E57373</span>
              <span class="bg-[#EF5350] p-2">red-lighten-1 <span class="m-10"></span>#EF5350</span>
              <span class="bg-[#E53935] p-2">red-darken-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#D32F2F] p-2">red-darken-2 <span class="m-10"></span>#D32F2F</span>
              <span class="bg-[#C62828] p-2">red-darken-3 <span class="m-10"></span>#C62828</span>
              <span class="bg-[#B71C1C] p-2">red-darken-4<span class="m-10"></span>#B71C1C</span>
              <span class="bg-[#FF8A80] p-2">red-accent-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#FF5252] p-2">red-accent-2 <span class="m-10"></span>#FF5252</span>
              <span class="bg-[#FF1744] p-2">red-accent-3<span class="m-10"></span>#FF1744</span>
              <span class="bg-[#D50000] p-2">red-accent-4<span class="m-10"></span>#D50000</span>
            </div>
          </div>
          <div class="flex flex-col mr-4">
            <span class="bg-[#F44336] p-4">Red</span>
            <div class="flex flex-col">
              <span class="bg-[#FFEBEE] text-black p-2"
                >red-lighten-5 <span class="m-10"></span>#FFEBEE</span
              >
              <span class="bg-[#FFCDD2] text-black p-2"
                >red-lighten-4 <span class="m-10"></span>#FFCDD2</span
              >
              <span class="bg-[#EF9A9A] text-black p-2"
                >red-lighten-3<span class="m-10"> </span>#EF9A9A</span
              >
              <span class="bg-[#E57373] p-2">red-lighten-2<span class="m-10"></span>#E57373</span>
              <span class="bg-[#EF5350] p-2">red-lighten-1 <span class="m-10"></span>#EF5350</span>
              <span class="bg-[#E53935] p-2">red-darken-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#D32F2F] p-2">red-darken-2 <span class="m-10"></span>#D32F2F</span>
              <span class="bg-[#C62828] p-2">red-darken-3 <span class="m-10"></span>#C62828</span>
              <span class="bg-[#B71C1C] p-2">red-darken-4<span class="m-10"></span>#B71C1C</span>
              <span class="bg-[#FF8A80] p-2">red-accent-1<span class="m-10"></span>#FF8A80</span>
              <span class="bg-[#FF5252] p-2">red-accent-2 <span class="m-10"></span>#FF5252</span>
              <span class="bg-[#FF1744] p-2">red-accent-3<span class="m-10"></span>#FF1744</span>
              <span class="bg-[#D50000] p-2">red-accent-4<span class="m-10"></span>#D50000</span>
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
      </div>
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
      <span> © 2025 PackIt. Tous droits réservés.</span>
    </footer>
  </div>
</template>
<script></script>
