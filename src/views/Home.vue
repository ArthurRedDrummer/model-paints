<template>
	<section class="container mx-auto flex space-x-10">
		<section class="w-1/5">
			<add-color/>
		</section>
		<section class="w-4/5">
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