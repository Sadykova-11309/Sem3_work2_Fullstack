<template>
  <div class="form">
    <h2>Добавить новый рецепт</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Название рецепта:</label>
        <input
            v-model="title"
            type="text"
            required
            placeholder="Например: Борщ"
        >
      </div>

      <div class="form-group">
        <label>Описание:</label>
        <textarea
            v-model="description"
            required
            placeholder="Опишите ваш рецепт"
        ></textarea>
      </div>

      <div class="form-group">
        <label>Ингредиенты:</label>
        <textarea
            v-model="ingredients"
            required
            placeholder="Например: Картошка, морковь, лук"
        ></textarea>
      </div>

      <button type="submit" class="submit-btn">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      ingredients: ''
    }
  },
  methods: {
    submitForm() {
      const newRecipe = {
        id: Date.now().toString(),
        title: this.title,
        description: this.description,
        ingredients: this.ingredients
      }


      this.$store.dispatch('addRecipe', newRecipe)
      this.title = ''
      this.description = ''
      this.ingredients = ''

      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.form {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.submit-btn {
  background: #2196F3;
  color: white;
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>