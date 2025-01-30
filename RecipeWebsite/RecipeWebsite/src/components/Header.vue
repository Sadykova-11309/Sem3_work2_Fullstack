<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="logo">Recipe App</router-link>
      <div class="links">
        <router-link to="/add-recipe" class="nav-link">
          Добавить рецепт
        </router-link>
        <router-link to="/favorites" class="nav-link">
          Избранное ({{ favoriteCount }})
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    favoriteCount() {
      return this.$store.getters.favoriteRecipes.length
    }
  }
}
</script>

<style scoped>
.header {
  background: #2c3e50;
  padding: 1rem;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
}

.links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav-link:hover {
  background: #34495e;
}
</style>