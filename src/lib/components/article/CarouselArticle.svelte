<script lang="ts">
	import type { Article } from '$lib/types';
	import { first25 } from '$lib/helpers/first25';
	import { Autoplay } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import ArticleDetails from './ArticleDetails.svelte';

	export let post: Article;
	export let images: any;

	import 'swiper/css';
</script>

<section class="container mx-auto">
	<Swiper
		modules={[Autoplay]}
		loop
		spaceBetween={10}
		slidesPerView={2}
		autoplay={true}
		speed={750}
		freeMode={true}
		breakpoints={{
			640: {
				slidesPerView: 3
			}
		}}
	>
		{#each images as image}
			<SwiperSlide class="max-h-[35rem]">
				<img src={image.image.url} alt={image.image.imageAlt} class="cursor-grab" />
			</SwiperSlide>
		{/each}
	</Swiper>
	<ArticleDetails
		date={post.createdAt}
		title={post.title}
		excerpt={first25(post.content.text)}
		linkText="Continue reading"
		slug={post.slug}
	/>
</section>
