<template>
	<section class="flex flex-wrap mb-5 gap-x-2" v-show="active && active > 1">
		<h2 class="text-2xl pb-2 w-full">Filter</h2>
		<div class="flex gap-x-4">
			<div class="flex flex-col">
				<label class="input-label">Sort by: </label>
				<switcher :options="sortTypes" @select="setSortType"/>
			</div>
		</div>
		<div class="flex gap-x-4">
			<div class="flex flex-col">
				<label class="input-label">Find by color: </label>
				<input type="text" class="input-field" v-model="colorName" @input="searchByColor">
			</div>
		</div>
		<div class="flex gap-x-4">
			<div class="flex flex-col">
				<label class="input-label">Find by vendor: </label>
				<input type="text" class="input-field" v-model="vendorName" @input="searchByVendor">
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Switcher from '@/components/UI/Switcher';

export default {
	components: {
		Switcher
	},
	computed:   {
		...mapGetters({
			active: 'hasColors'
		})
	},
	methods:    {
		...mapMutations([
			'setSortType',
			'setSearchColor',
			'setSearchVendor'
		]),
		searchByColor() {
			this.vendorName = '';
			this.setSearchColor(this.colorName);
		},
		searchByVendor() {
			this.colorName = '';
			this.setSearchVendor(this.vendorName);
		},
	},
	data() {
		return {
			vendorName: '',
			colorName:  '',
			sortTypes:  [
				'factory',
				'name'
			]
		}
	}
}
</script>