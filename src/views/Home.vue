<template>
	<section class="main container mx-auto flex space-x-10">
		<section class="aside w-1/5">
			<add-color/>
		</section>
		<section class="data w-4/5">
			<filter-color/>
			<colors/>
		</section>
	</section>
</template>

<script>
import { mapMutations } from 'vuex';
import AddColor from '@/components/AddColor';
import FilterColor from '@/components/FilterColor';
import Colors from '@/components/Colors';

export default {
	components: {
		AddColor,
		FilterColor,
		Colors
	},
	methods:    {
		...mapMutations([
			'getColors'
		])
	},
	mounted() {
		this.getColors();
	}
}
</script>

<style scoped>
@media print {
	.main {
		width: 100%;
		margin: 0;
		display: block;
	}

	.data {
		width: 100%;
	}

	.aside {
		display: none;
	}
}
</style>