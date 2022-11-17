export default {
	namespaced: true,
	state() {
		return {
			isActive: false,
			title:    '',
			message:  ''
		}
	},
	getters:   {
		isActive: state => state.isActive,
		title:    state => state.title,
		message:  state => state.message
	},
	mutations: {
		open(state, {title, message}) {
			state.title    = title;
			state.message  = message;
			state.isActive = true;
		},
		close(state) {
			state.title    = '';
			state.message  = '';
			state.isActive = false;
		}
	}
}