<script lang="ts">
	import { first25 } from '$lib/helpers/first25';
	import type { Article } from '$lib/types';
	import { format } from 'date-fns';

	export let post: Article;
	export let title: string;
</script>

<section class="mt-0 md:mt-10">
	<div class="container mx-auto text-center">
		<h1
			class="z-10 text-6xl font-bold text-center uppercase font-rowdies md:text-7xl xl:text-9xl xl:mb-10"
		>
			{title}
		</h1>
		<div class="flex flex-col w-full gap-5 xl:grid xl:grid-cols-2 xl:text-left">
			<img src={post.imageOne.image.url} alt={post.imageOne.imageAlt} />
			<div class="flex flex-col justify-center xl:gap-7">
				<p class="font-thin uppercase font-rowdies xl">
					{format(new Date(post.createdAt), 'MMM dd yyyy')}
				</p>
				<h2
					class="text-3xl uppercase font-large text-tertiary font-rowdies md:text-4xl xl:text-5xl"
				>
					{post.title}
				</h2>
				<p class="font-medium font-poppins">
					{first25(post.content.text)}
				</p>
				<a href={`/articles/${post.slug}`} class="font-medium font-rowdies hover:underline"
					>Continue reading →</a
				>
			</div>
		</div>
	</div>
</section>
