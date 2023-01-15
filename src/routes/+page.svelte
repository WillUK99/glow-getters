<script lang="ts">
	import type { PageServerData } from './$types';

	import Banner from '$lib/components/Banner.svelte';
	import NewArticle from '$lib/components/article/NewArticle.svelte';
	import CarouselArticle from '$lib/components/article/CarouselArticle.svelte';
	import DoubleArticle from '$lib/components/article/DoubleArticle.svelte';
	import MoreArticles from '$lib/components/article/MoreArticles.svelte';

	export let data: PageServerData;

	console.log(data);
</script>

<Banner />
<NewArticle />
<CarouselArticle />
<DoubleArticle />
<MoreArticles />
