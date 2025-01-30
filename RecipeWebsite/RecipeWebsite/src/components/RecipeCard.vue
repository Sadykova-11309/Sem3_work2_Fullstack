<template>
  <article class="recipe-card">
    <div class="card-content">
      <h3>{{ recipe.title }}</h3>
      <p class="description">{{ truncatedDescription }}</p>
      <div class="actions">
        <router-link
            :to="`/recipe/${recipe.id}`"
            class="details-link"
        >
          Подробнее
        </router-link>
        <button
            @click="toggleFavorite"
            class="favorite-btn"
            :class="{ 'is-favorite': isFavorite }"
        >
          {{ isFavorite ? 'В избранном' : 'В избранное' }}
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  computed: {
    truncatedDescription() {
      return this.recipe.description.slice(0, 100) + '...';
    },
    isFavorite() {
      return this.$store.state.favorites.some(r => r.id === this.recipe.id);
    }
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite', this.recipe);
    }
  }
}
</script>

<style scoped>
.recipe-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
  transition: transform 0.3s;
}

.recipe-card:hover {
  transform: translateY(-2px);
}

.description {
  color: #666;
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.details-link {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.favorite-btn {
  background: #eee;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.favorite-btn.is-favorite {
  background: #42b983;
  color: white;
}
</style>