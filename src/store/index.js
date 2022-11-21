import { createStore } from 'vuex'

import popup from '@/store/popup';

const updateColors = (color, action) => {
	let saved  = localStorage.getItem('colors');
	let colors = saved ? JSON.parse(saved) : [];

	if (action === 'add') {
		colors.push(color);
	}
	if (action === 'remove') {
		colors = colors.filter(c => c.id !== color.id);
	}

	if (colors.length === 0) {
		localStorage.removeItem('colors');
		return;
	}

	localStorage.setItem('colors', JSON.stringify(colors));
}

export default createStore({
	state() {
		return {
			sort:         'none',
			searchColor:  '',
			searchVendor: '',
			factories:    [
				'Tamiya',
				'Mr.Hobby',
				'AK Interactive'
			],
			colors:       []
		}
	},
	getters:   {
		hasColors:    state => {
			return state.colors && state.colors.length;
		},
		allFactories: state => {
			return state.factories;
		},
		allColors:    state => {
			if (state.searchColor) {
				let regExp = new RegExp(state.searchColor, 'gi');

				return state.colors.filter(c => regExp.test(c.name));
			}

			if (state.searchVendor) {
				let regExp = new RegExp(state.searchVendor, 'gi');

				return state.colors.filter(c => regExp.test(c.number));
			}

			return state.sort !== 'none'
			       ? state.colors.sort((a, b) => a[state.sort].localeCompare(b[state.sort]))
			       : state.colors;
		}
	},
	mutations: {
		setSearchColor(state, string) {
			state.searchColor = string;
		},
		setSearchVendor(state, string) {
			state.searchVendor = string;
		},
		getColors(state) {
			let saved = localStorage.getItem('colors');

			state.colors = saved ? JSON.parse(saved) : [];
		},
		setSortType(state, type) {
			state.sort = type;
		},
		addColor(state, color) {
			state.colors.push(color);
			updateColors(color, 'add');
		},
		removeColor(state, color) {
			state.colors = state.colors.filter(c => c.id !== color.id);
			updateColors(color, 'remove');
		}
	},
	actions:   {},
	modules:   {
		popup
	}
})
