<template>
  <div class="home">
    <h1>Все рецепты</h1>

    <div class="recipes">
      <RecipeCard
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
          @toggle-favorite="toggleFavorite"
      />
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
    recipes() {
      return this.$store.state.recipes
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
.home {
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}


.recipe-card h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.recipe-card p {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

button {
  padding: 8px 12px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #42b983;
  color: white;
}

@media (max-width: 600px) {
  .recipes {
    grid-template-columns: 1fr;
  }
}
</style>