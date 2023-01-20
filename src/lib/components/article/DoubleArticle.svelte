<script lang="ts">
	import { first25 } from '$lib/helpers/first25';
	import type { Article } from '$lib/types';
	import ArticleDetails from './ArticleDetails.svelte';

	export let posts: Article[];
</script>

<section class="container flex flex-col gap-20 mx-auto md:flex-row md:justify-between">
	{#each posts as post}
		<div class="flex flex-col md:w-1/2">
			<img
				src={post.imageOne.image.url}
				alt={post.imageOne.imageAlt}
				class="object-cover w-full max-h-80 md:max-h-96 xl:max-h-[30rem]"
			/>
			<ArticleDetails
				date={post.createdAt}
				title={post.title}
				excerpt={first25(post.content.text)}
				linkText="Continue reading"
				slug={post.slug}
			/>
		</div>
	{/each}
</section>
