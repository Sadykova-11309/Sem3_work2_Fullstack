<template>
  <div class="favorites-page">
    <h1>Избранные рецепты</h1>

    <div v-if="favorites.length" class="favorites-list">
      <RecipeCard
          v-for="recipe in favorites"
          :key="recipe.id"
          :recipe="recipe"
          @toggle-favorite="toggleFavorite"
      />
    </div>

    <div v-else class="empty-state">
      <p>Здесь пока ничего нет. Добавьте рецепты в избранное!</p>
      <router-link to="/" class="home-link">На главную</router-link>
    </div>
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue'

export default {
  components: {
    RecipeCard
  },
  computed: {
    favorites() {
      return this.$store.getters.favoriteRecipes
    }
  },
  methods: {
    toggleFavorite(recipe) {
      this.$store.dispatch('toggleFavorite', recipe)
    }
  }
}
</script>

<style scoped>
.favorites-page {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.favorites-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.home-link {
  display: inline-block;
  margin-top: 1rem;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
</style>