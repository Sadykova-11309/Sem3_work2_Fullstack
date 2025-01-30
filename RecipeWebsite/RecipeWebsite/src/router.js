import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import RecipeDetail from '@/views/RecipeDetail.vue';
import AddRecipe from '@/views/AddRecipe.vue';
import Favorites from '@/views/Favorites.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/recipe/:id',
        name: 'RecipeDetail',
        component: RecipeDetail,
        props: true
    },
    {
        path: '/add-recipe',
        component: AddRecipe
    },
    {
        path: '/favorites',
        component: Favorites
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

