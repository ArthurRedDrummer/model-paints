<template>
	<form class="sticky top-0" @submit.prevent="addNewColor">
		<h2 class="text-2xl pb-2">Add Paint</h2>
		<div class="flex flex-col gap-x-4">
			<div class="flex flex-col pb-3">
				<label class="input-label">Factory</label>
				<switcher :options="allFactories" :empty="true" @select="selectFactory"/>
			</div>
			<div class="flex flex-col pb-3">
				<label class="input-label">Vendor Code</label>
				<input class="input-field" type="text" v-model="number">
			</div>
			<div class="flex flex-col pb-3">
				<label class="input-label">Color</label>
				<input class="input-field" type="text" v-model="name">
			</div>
		</div>
		<div class="flex flex-col pt-2">
			<input class="btn" type="submit" value="Add">
		</div>
	</form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Switcher from '@/components/UI/Switcher';

export default {
	components: {Switcher},
	computed:   {
		...mapGetters([
			'allFactories'
		])
	},
	methods:    {
		...mapMutations({
			add:   'addColor',
			alert: 'popup/open'
		}),
		generateId() {
			let d  = (new Date().getTime()) / 1000000;
			let _d = Math.floor(d);

			return Math.floor((d - _d) * 1000000);
		},
		selectFactory(selected) {
			this.factory = selected;
		},
		addNewColor() {

			if (!this.factory) {
				this.alert({
					title: 'Warning!',
					message: 'Please, select color paint factory.'
				});
				return false;
			}

			if (!this.number) {
				this.alert({
					title: 'Warning!',
					message: 'Please, enter color paint vendor.'
				});
				return false;
			}

			if (!this.name) {
				this.alert({
					title: 'Warning!',
					message: 'Please, enter color name.'
				});
				return false;
			}

			this.add({
				id:      this.generateId(),
				factory: this.factory,
				number:  this.number,
				name:    this.name
			});
			this.clearForm();
		},
		clearForm() {
			this.number  = '';
			this.name    = '';
		}
	},
	data() {
		return {
			factory: '',
			number:  '',
			name:    ''
		}
	}
}
</script>