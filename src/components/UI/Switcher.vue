<!--suppress HtmlUnknownAttribute -->
<template>
	<div class="relative" v-click-outside="close">
		<div class="input-field pr-12 relative cursor-pointer" @click.prevent="toggle">
			{{ selected }}
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 absolute top-1/4 right-2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
			</svg>
		</div>
		<ul
			class="absolute top-full left-0 w-full bg-white border z-10 border-emerald-800 py-1 px-2"
			:class="{
				'hidden': !active
			}"
		>
			<li
				class="cursor-pointer"
				v-for="option in options"
				v-text="option"
				:key="`switcher-option-${option}`"
				@click.prevent="select(option)"
			/>
		</ul>
	</div>
</template>

<script>
export default {
	props:   [
		'options',
		'empty'
	],
	methods: {
		toggle() {
			this.active = !this.active;
		},
		close() {
			this.active = false;
		},
		select(option) {
			this.selected = option;
			this.$emit('select', option);
			this.close();
		},
		clear() {
			this.selected = 'Select...';
		}
	},
	data() {
		return {
			selected: 'Select...',
			active:   false
		}
	},
	mounted() {
		if (!this.empty) {
			this.selected = this.options.at(0);
			this.select(this.selected);
		}
	}
}
</script>