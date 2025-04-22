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

    <!-- Hero Section -->
    <section class="text-center py-20 bg-[#51768C] text-white">
      <h2 class="text-4xl font-extrabold mb-4">Explorez des assets digitaux uniques</h2>
      <p class="text-lg max-w-2xl mx-auto">
        Sprites 2D, illustrations, icônes et bien plus à portée de clic.
      </p>
    </section>

    <!-- Main content - 1 card per row -->
    <main class="p-6 space-y-6 max-w-3xl mx-auto">
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
      >
        <img :src="logo" :alt="item.name" class="w-full md:w-2/3 h-48 object-cover" />
        <div class="p-4 w-full flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-semibold">{{ item.name }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ item.description }}</p>
          </div>
          <div class="mt-4 text-right">
            <span class="text-[#F27405] font-bold">{{ item.price }} €</span>
          </div>
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
      <span> © 2025 PackIt. Tous droits réservés.</span>
    </footer>
  </div>
</template>

<script setup>
import logo from '@/assets/logos.png'
const items = [
  {
    id: 1,
    name: 'Pack de sprites Fantasy',
    description: 'Un set de personnages et monstres pixel art.',
    price: 150.99,
    img: '@/assets/logo.png',
  },
  {
    id: 2,
    name: 'Icônes UI modernes',
    description: 'Icônes vectorielles parfaites pour vos jeux ou apps.',
    price: 90.99,
    image: 'https://via.placeholder.com/300x200?text=UI+Icons',
  },
  {
    id: 3,
    name: 'Arrière-plans de villes futuristes',
    description: 'Backgrounds en haute qualité pour side-scrollers.',
    price: 190.99,
    image: 'https://via.placeholder.com/300x200?text=Backgrounds',
  },
  {
    id: 4,
    name: 'All For One',
    description: 'Le kit ultime',
    price: 399.99,
    image: 'https://via.placeholder.com/300x200?text=Backgrounds',
  },
]
</script>
