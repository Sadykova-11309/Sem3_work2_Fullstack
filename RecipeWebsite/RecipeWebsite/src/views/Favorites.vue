<template>
  <div class="favorites">
    <h1>Избранные рецепты</h1>

    <div v-if="favorites.length" class="favorites-list">
      <div
          v-for="recipe in favorites"
          :key="recipe.id"
          class="recipe-card"
      >
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.description }}</p>
        <button @click="viewRecipe(recipe.id)">Посмотреть</button>
      </div>
    </div>

    <div v-else class="empty">
      <p>Здесь пока ничего нет</p>
      <router-link to="/">На главную</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.state.favorites
    }
  },
  methods: {
    viewRecipe(id) {
      this.$router.push(`/recipe/${id}`)
    }
  }
}
</script>

<style scoped>
.favorites {
  padding: 20px;
}

.empty {
  text-align: center;
  margin-top: 50px;
}

.empty a {
  color: #42b983;
  text-decoration: none;
}

.favorites-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
</style>