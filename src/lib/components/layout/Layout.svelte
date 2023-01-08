<script lang="ts">
	import Nav from '$lib/components/layout/Nav.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div>
	<Nav />
	<slot />
	<Footer />
</div>
