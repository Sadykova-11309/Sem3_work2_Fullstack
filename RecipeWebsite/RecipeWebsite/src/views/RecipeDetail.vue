<template>
  <div class="recipe-detail">
    <div v-if="recipe" class="detail-container">
      <h1>{{ recipe.title }}</h1>
      <p class="description">{{ recipe.description }}</p>

      <div class="ingredients-section">
        <h2>Ингредиенты:</h2>
        <p>{{ recipe.ingredients }}</p>
      </div>

      <router-link to="/" class="back-link">← На главную</router-link>
    </div>

    <div v-else class="not-found">
      <h2>Рецепт не найден</h2>
      <router-link to="/">Вернуться на главную</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recipe() {
      return this.$store.getters.getRecipeById(this.$route.params.id);
    }
  }
}
</script>

<style scoped>
.recipe-detail {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.detail-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.description {
  color: #666;
  font-size: 1.1rem;
  margin: 1rem 0;
}

.ingredients-section {
  margin: 2rem 0;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
}

ul, ol {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.back-link {
  display: inline-block;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: 2px solid #42b983;
  border-radius: 4px;
  transition: all 0.3s;
}

.back-link:hover {
  background: #42b983;
  color: white;
}

.not-found {
  text-align: center;
  padding: 2rem;
}
</style>