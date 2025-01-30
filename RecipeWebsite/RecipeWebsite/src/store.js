import { createStore } from 'vuex';

const store = createStore({
    state: {
        recipes: [
            {
                id: '1',
                title: 'Спагетти Карбонара',
                description: 'Классическое итальянское блюдо с панчеттой, яйцами и сыром Пекорино.',
                ingredients: 'Спагетти 200 г, Панчетта 150 г, Яйца 2 шт, Сыр Пекорино 50 г, Чеснок 2 зубчика, Соль, перец по вкусу'
            },
            {
                id: '2',
                title: 'Омлет с овощами',
                description: 'Лёгкий и полезный завтрак с помидорами, перцем и зеленью.',
                ingredients: 'Яйца 3 шт, Помидор 1 шт, Перец болгарский 1 шт, Лук зелёный 20 г, Молоко 50 мл, Соль, перец по вкусу'
            },
            {
                id: '3',
                title: 'Тыквенный суп-пюре',
                description: 'Нежный и ароматный суп из тыквы с добавлением сливок и специй.',
                ingredients: 'Тыква 500 г, Лук репчатый 1 шт, Чеснок 2 зубчика, Сливки 200 мл, Оливковое масло 2 ст.л., Соль, перец, мускатный орех по вкусу'
            },
            {
                id: '4',
                title: 'Паста Болоньезе',
                description: 'Итальянская паста с мясным соусом и томатами',
                ingredients: 'Спагетти 250 г, Говяжий фарш 300 г, Томаты в собственном соку 400 г, Лук 1 шт, Морковь 1 шт, Чеснок 2 зубчика, Оливковое масло 2 ст.л., Соль, перец, базилик'
            },
            {
                id: '5',
                title: 'Греческий салат',
                description: 'Классический салат с сыром фета и свежими овощами',
                ingredients: 'Помидоры 2 шт, Огурцы 2 шт, Лук красный 1 шт, Сыр фета 150 г, Маслины 100 г, Оливковое масло 3 ст.л., Лимонный сок 1 ст.л., Соль, орегано'
            },
            {
                id: '6',
                title: 'Шоколадный мусс',
                description: 'Нежный десерт из темного шоколада',
                ingredients: 'Тёмный шоколад 200 г, Яйца 4 шт, Сахар 50 г, Сливочное масло 50 г, Ванильный экстракт 1 ч.л.'
            },
            {
                id: '7',
                title: 'Курица карри',
                description: 'Ароматное блюдо индийской кухни',
                ingredients: 'Куриное филе 500 г, Лук 2 шт, Чеснок 3 зубчика, Имбирь 20 г, Помидоры 2 шт, Кокосовое молоко 400 мл, Масло растительное 2 ст.л., Порошок карри 2 ст.л., Соль, кинза'
            },
            {
                id: '8',
                title: 'Рататуй',
                description: 'Французское овощное рагу из Прованса',
                ingredients: 'Баклажаны 2 шт, Цукини 2 шт, Помидоры 4 шт, Лук 1 шт, Чеснок 3 зубчика, Оливковое масло 4 ст.л., Тимьян, Соль, перец'
            }
        ],
        favorites: []
    },
    mutations: {
        ADD_RECIPE(state, recipe) {
            state.recipes.push(recipe);
        },
        ADD_TO_FAVORITES(state, recipe) {
            if (!state.favorites.some(r => r.id === recipe.id)) {
                state.favorites.push(recipe);
            }
        },
        REMOVE_FROM_FAVORITES(state, recipeId) {
            state.favorites = state.favorites.filter(r => r.id !== recipeId);
        }
    },
    actions: {
        addRecipe({ commit }, recipe) {
            commit('ADD_RECIPE', recipe);
        },
        toggleFavorite({ commit, state }, recipe) {
            if (state.favorites.some(r => r.id === recipe.id)) {
                commit('REMOVE_FROM_FAVORITES', recipe.id);
            } else {
                commit('ADD_TO_FAVORITES', recipe);
            }
        }
    },
    getters: {
        allRecipes: (state) => state.recipes,
        favoriteRecipes: (state) => state.favorites,
        getRecipeById: (state) => (id) => {
            return state.recipes.find(recipe => recipe.id === id);
        }
    }
});

export default store;