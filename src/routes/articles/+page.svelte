<script lang="ts">
	import ArticleDetails from '$lib/components/article/ArticleDetails.svelte';
</script>

<div class="container mx-auto">
	<h1
		class="mt-20 text-6xl font-bold text-center uppercase font-rowdies md:text-7xl xl:text-9xl xl:translate-y-0 xl:mb-10"
	>
		Lorem ipsum dolor sit amet consectetur.
	</h1>
	<section class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
		<div>
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="object-cover w-full max-h-96 lg:max-h-[30rem]"
			/>
			<ArticleDetails
				date="Jan 13, 2023"
				title="Lorem, ipsum dolor sit amet."
				excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi cum non eos id magni excepturi vitae perspiciatis officiis placeat."
				linkText="Read more"
				slug="article"
			/>
		</div>
		<div>
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="object-cover w-full max-h-96 lg:max-h-[30rem]"
			/>
			<ArticleDetails
				date="Jan 13, 2023"
				title="Lorem, ipsum dolor sit amet."
				excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi cum non eos id magni excepturi vitae perspiciatis officiis placeat."
				linkText="Read more"
				slug="article"
			/>
		</div>
		<div>
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="object-cover w-full max-h-96 lg:max-h-[30rem]"
			/>
			<ArticleDetails
				date="Jan 13, 2023"
				title="Lorem, ipsum dolor sit amet."
				excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi cum non eos id magni excepturi vitae perspiciatis officiis placeat."
				linkText="Read more"
				slug="article"
			/>
		</div>
	</section>
</div>
