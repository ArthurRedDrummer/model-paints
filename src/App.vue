<template>
	<header class="container mx-auto py-5 border-b mb-5">
		<h1 class="text-4xl font-bold">Model Paints</h1>
	</header>

	<router-view/>

	<popup/>
</template>

<script>
import Popup from '@/components/UI/Popup'

export default {
	components: {
		Popup
	}
}
</script>
