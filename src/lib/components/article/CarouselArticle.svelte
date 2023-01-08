<script lang="ts">
	import { Autoplay } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import ArticleDetails from './ArticleDetails.svelte';
</script>

<section>
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
		<SwiperSlide>
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
			/>
		</SwiperSlide>
	</Swiper>
	<ArticleDetails
		date="Jan 13, 2023"
		title="Lorem, ipsum dolor sit amet."
		excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi cum non eos id magni excepturi vitae perspiciatis officiis placeat."
		linkText="Read more"
		slug="article"
	/>
</section>
