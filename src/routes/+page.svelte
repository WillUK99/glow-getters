<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import Banner from '$lib/components/Banner.svelte';
	import NewArticle from '$lib/components/article/NewArticle.svelte';
	import CarouselArticle from '$lib/components/article/CarouselArticle.svelte';
	import DoubleArticle from '$lib/components/article/DoubleArticle.svelte';
	import MoreArticles from '$lib/components/article/MoreArticles.svelte';
	import MetaData from '$lib/components/MetaData.svelte';

	export let data: PageData;
	console.log(data);
</script>

<MetaData
	metaData={{
		title: `${data.homepage.title}`,
		description: `${data.homepage.metaDescription}`,
		image: `${data.articles[0].imageOne.image.url}`,
		url: `${$page.url}`
	}}
/>
<Banner post={data.articles[0]} title={data.homepage.title} />
<NewArticle post={data.articles[1]} />
<CarouselArticle post={data.articles[2]} images={data.images} />
<DoubleArticle posts={[data.articles[3], data.articles[4]]} />
<MoreArticles posts={[data.articles[5], data.articles[6], data.articles[7]]} />
