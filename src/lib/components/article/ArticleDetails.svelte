<script lang="ts">
	export let date: string;
	export let title: string;
	export let excerpt: string = '';
	export let linkText: string;
	export let slug: string;
</script>

<div class="container flex flex-col gap-5 mt-2 text-center">
	<p class="font-thin uppercase font-rowdies">{date}</p>
	<h2 class="text-3xl uppercase font-large font-rowdies">{title}</h2>
	{#if excerpt}
		<p class="font-medium font-poppins">{excerpt}</p>
	{/if}
	<a href={`/articles/${slug}`} class="font-medium font-rowdies hover:underline">{linkText} →</a>
</div>
