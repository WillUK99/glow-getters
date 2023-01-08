<script lang="ts">
	import ArticleDetails from './ArticleDetails.svelte';
</script>

<section class="container flex flex-col gap-20">
	<div class="flex flex-col">
		<img
			src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
			alt="some alt text here"
			class="object-cover w-full max-h-80 "
		/>
		<ArticleDetails
			date="Jan 13, 2023"
			title="Lorem, ipsum dolor sit amet."
			linkText="Read more"
			slug="article"
		/>
	</div>
	<div class="flex flex-col">
		<img
			src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
			alt="some alt text here"
			class="object-cover w-full max-h-80 "
		/>
		<ArticleDetails
			date="Jan 13, 2023"
			title="Lorem, ipsum dolor sit amet."
			linkText="Read more"
			slug="article"
		/>
	</div>
</section>
