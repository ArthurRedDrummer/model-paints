<template>
	<section
		class="fixed top-0 left-0 bg-gray-500/50 z-20"
		:class="{
			'w-full': isActive,
			'h-full': isActive,
			'flex': isActive,
			'hidden': !isActive
		}"
	>
		<div
			class="py-4 px-6 bg-white rounded m-auto"
		>
			<h2 class="text-2xl pb-5" v-text="title"/>
			<div v-text="message"/>
			<div class="pt-4">
				<button class="btn" @click.prevent="close">Ok</button>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	computed: {
		...mapGetters({
			isActive: 'popup/isActive',
			title:    'popup/title',
			message:  'popup/message'
		})
	},
	methods:  {
		...mapMutations({
			close: 'popup/close'
		})
	}
}
</script>