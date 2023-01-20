<script lang="ts">
	import type { PageServerData } from './$types';

	import Banner from '$lib/components/Banner.svelte';
	import NewArticle from '$lib/components/article/NewArticle.svelte';
	import CarouselArticle from '$lib/components/article/CarouselArticle.svelte';
	import DoubleArticle from '$lib/components/article/DoubleArticle.svelte';
	import MoreArticles from '$lib/components/article/MoreArticles.svelte';

	export let data: PageServerData;
</script>

<Banner post={data.articles[0]} />
<NewArticle post={data.articles[1]} />
<CarouselArticle post={data.articles[2]} />
<DoubleArticle posts={[data.articles[3], data.articles[4]]} />
<MoreArticles posts={[data.articles[5], data.articles[6], data.articles[7]]} />
