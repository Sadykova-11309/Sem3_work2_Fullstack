<template>
  <div class="add-recipe">
    <h2>Добавить рецепт</h2>
    <RecipeForm />
  </div>
</template>

<script>
import RecipeForm from '@/components/RecipeForm.vue'

export default {
  components: {
    RecipeForm
  }
}
</script>

<style scoped>
.add-recipe {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}
</style>