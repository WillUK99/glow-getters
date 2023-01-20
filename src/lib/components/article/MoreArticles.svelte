<script lang="ts">
	import type { Article } from '$lib/types';

	export let posts: Article[];
</script>

<section class="container flex flex-col mx-auto">
	<h3 class="mb-6 font-bold uppercase font-rowdies">The latest from glow getters</h3>
	{#each posts as post}
		<a
			href={`/articles/${post.slug}`}
			class="hover:text-tertiary transition flex justify-between w-full py-4 group"
			>{post.title} <span class="transition font-rowdies group-hover:-translate-x-3">→</span></a
		>
	{/each}
	<a class="mt-6 font-rowdies hover:underline" href="/articles"
		>View all articles <span class="mr-2 font-rowdies">→</span></a
	>
</section>
