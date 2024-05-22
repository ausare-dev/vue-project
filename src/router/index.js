import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddUser from '../views/AddUser.vue';
import EditUser from '../views/EditUser.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/add-user',
		name: 'AddUser',
		component: AddUser,
	},
	{
		path: '/edit-user/:id',
		name: 'EditUser',
		component: EditUser,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
