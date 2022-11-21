<template>
	<section v-show="active && colors.length">
		<h2 class="text-2xl pb-5">Paints</h2>
		<ul class="list flex flex-col flex-wrap gap-y-2">
			<li class="item flex justify-items-start items-center border-b pb-2 gap-x-4" v-for="color in colors" :key="colorKey(color)">
				<h3 class="text-m font-semibold" v-text="color.name"/>
				<p class="number text-m" v-text="color.number"/>
				<p class="text-m text-gray-400" v-text="color.factory"/>
				<button class="button mr-0 ml-auto" @click.prevent="removeColor(color)">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
					</svg>
				</button>
			</li>
		</ul>
	</section>

	<section v-show="!active || colors.length === 0">
		<h2 class="text-xl text-center py-5">No paints</h2>
	</section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	computed: {
		...mapGetters({
			active: 'hasColors',
			colors: 'allColors'
		})
	},
	methods:  {
		...mapMutations([
			'removeColor'
		]),
		colorKey(color) {
			let factory = color.factory.toLowerCase().split(' ').join('-');
			let name    = color.name.toLowerCase().split(' ').join('-');

			return `${ factory }-color-${ name }`;
		}
	}
}
</script>

<style scoped>
@media print {
	h2 {
		display: none;
	}

	ul {
		display: flex;
		flex-flow: row wrap;
	}

	li {
		border: 1px solid #000000;
		width: 2.5cm;
		height: 3.2cm;
		padding: 0.2cm 0.4cm;
		flex-flow: column nowrap;
		margin: 0.1cm 0.1cm 0.2cm;
	}

	h3 {
		font-size: 10px;
		text-align: center;
	}

	p {
		font-size: 10px;
		text-align: center;
	}

	p.number {
		font-size: 16px;
		padding: 0.1cm 0;
	}

	button {
		display: none;
	}
}
</style>