<script lang="ts">
	import type { PageServerData } from './$types';
	import { format } from 'date-fns';

	export let data: PageServerData;
</script>

<div class="container mx-auto my-20 px-2 text-center md:text-left">
	<div class="flex flex-col gap-5">
		<p class="font-thin uppercase font-rowdies xl">
			{format(new Date(data.article.createdAt), 'MMM dd yyyy')}
		</p>
		<h2 class="text-3xl uppercase font-large font-rowdies md:text-4xl xl:text-5xl">
			{data.article.title}
		</h2>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
			<img
				src={data.article.imageOne.image.url}
				alt={data.article.imageOne.imageAlt}
				class="max-h-80 w-full object-cover xl:max-h-[35rem]"
			/>
			<img
				src={data.article.imageTwo.image.url}
				alt={data.article.imageTwo.imageAlt}
				class="max-h-80 w-full object-cover hidden md:block xl:max-h-[35rem]"
			/>
		</div>
		<div class="article__body font-poppins flex flex-col gap-5">
			{@html data.article.content.html}
		</div>
	</div>
</div>
