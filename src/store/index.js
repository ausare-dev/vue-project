import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

const store = createStore({
	state: {
		users: [
				{
					id: uuidv4(),
					firstName: 'Иван',
					lastName: 'Иванов',
					dateOfBirth: '1990-01-01',
				},
				{
					id: uuidv4(),
					firstName: 'Мария',
					lastName: 'Петрова',
					dateOfBirth: '1985-05-10',
				},
				{
					id: uuidv4(),
					firstName: 'Ольга',
					lastName: 'Сидорова',
					dateOfBirth: '1988-07-15',
				},
			],
	},
	mutations: {
		ADD_USER(state, user) {
			state.users.push(user);
		},
		UPDATE_USER(state, updatedUser) {
			const index = state.users.findIndex(user => user.id === updatedUser.id);
			if (index !== -1) {
				state.users[index] = updatedUser;
			}
		},
		DELETE_USER(state, userId) {
			state.users = state.users.filter(user => user.id !== userId);
		},
	},
	actions: {
		addUser({ commit }, user) {
			user.id = uuidv4();
			commit('ADD_USER', user);
		},
		updateUser({ commit }, user) {
			commit('UPDATE_USER', user);
		},
		deleteUser({ commit }, userId) {
			commit('DELETE_USER', userId);
		},
	},
	getters: {
		getUsers: state => state.users,
		getUserById: state => id => state.users.find(user => user.id === id),
		getUsersByName: state => name =>
			state.users.filter(
				user => user.firstName.includes(name) || user.lastName.includes(name)
			),
	},
});

export default store;
