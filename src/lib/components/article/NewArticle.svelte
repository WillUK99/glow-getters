<script lang="ts">
	import type { Article } from '$lib/types';
	import { first25 } from '$lib/helpers/first25';
	import ArticleDetails from './ArticleDetails.svelte';

	export let post: Article;
</script>

<section class="container mx-auto">
	<ArticleDetails
		date={post.createdAt}
		title={post.title}
		excerpt={first25(post.content.text)}
		linkText="Continue reading"
		slug={post.slug}
	/>
</section>
