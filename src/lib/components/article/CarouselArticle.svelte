<script lang="ts">
	import type { Article } from '$lib/types';
	import { first25 } from '$lib/helpers/first25';
	import { Autoplay } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import ArticleDetails from './ArticleDetails.svelte';

	export let post: Article;

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
		<SwiperSlide class="max-h-[35rem]">
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="cursor-grab"
			/>
		</SwiperSlide>
		<SwiperSlide class="max-h-[35rem]">
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="cursor-grab"
			/>
		</SwiperSlide>
		<SwiperSlide class="max-h-[35rem]">
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="cursor-grab"
			/>
		</SwiperSlide>
		<SwiperSlide class="max-h-[35rem]">
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="cursor-grab"
			/>
		</SwiperSlide>
		<SwiperSlide class="max-h-[35rem]">
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="cursor-grab"
			/>
		</SwiperSlide>
	</Swiper>
	<ArticleDetails
		date={post.createdAt}
		title={post.title}
		excerpt={first25(post.content.text)}
		linkText="Continue reading"
		slug={post.slug}
	/>
</section>
