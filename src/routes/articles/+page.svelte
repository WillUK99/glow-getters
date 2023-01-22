<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { first25 } from '$lib/helpers/first25';

	import ArticleDetails from '$lib/components/article/ArticleDetails.svelte';
	import MetaData from '$lib/components/MetaData.svelte';

	export let data: PageData;

	const title = 'Moralio - Read the latest and greatest articles.';
	const description =
		'Moralio - Find informative and engaging articles on a wide range of topics. Our expertly curated selection will educate and entertain you.';
</script>

<MetaData
	metaData={{
		title: `${title}`,
		description: `${description}`,
		image: `${data.articles[0].imageOne.image.url}`,
		url: `${$page.url}`
	}}
/>
<div class="container mx-auto">
	<h1
		class="mt-20 text-6xl font-bold text-center uppercase font-rowdies md:text-7xl xl:text-9xl xl:translate-y-0 xl:mb-10"
	>
		{title}
	</h1>
	<section class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
		{#each data.articles as article}
			<div>
				<img
					src={article.imageOne.image.url}
					alt={article.imageOne.imageAlt}
					class="object-cover w-full max-h-96 lg:max-h-[30rem]"
				/>
				<ArticleDetails
					date={article.createdAt}
					title={article.title}
					excerpt={first25(article.content.text)}
					linkText="Continue reading"
					slug={article.slug}
				/>
			</div>
		{/each}
	</section>
</div>
