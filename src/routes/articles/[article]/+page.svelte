<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container mx-auto my-20 px-2 text-center md:text-left">
	<div class="flex flex-col gap-5">
		<p class="font-thin uppercase font-rowdies xl">Jan 5, 2023</p>
		<h2 class="text-3xl uppercase font-large font-rowdies md:text-4xl xl:text-5xl">
			{$page.params.article}: Lorem, ipsum dolor.
		</h2>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="max-h-80 w-full object-cover xl:max-h-[35rem]"
			/>
			<img
				src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1296&q=60"
				alt="some alt text here"
				class="max-h-80 w-full object-cover hidden md:block xl:max-h-[35rem]"
			/>
		</div>
		<div class="font-poppins flex flex-col gap-5">
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptatibus quas id
				exercitationem suscipit placeat eum architecto deserunt accusantium natus labore dignissimos
				possimus, dolor ex. Quisquam dolores ratione illum totam.
			</p>
			<h3 class="font-thin uppercase font-rowdies">Lorem, ipsum dolor.</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, omnis!</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic culpa corporis excepturi
				assumenda distinctio, error ipsa. Repellat totam maiores modi laborum perspiciatis
				voluptatum perferendis, accusamus error dolor impedit dignissimos ea quam distinctio aut
				culpa quisquam fugit. Ducimus deleniti tempore voluptatem recusandae eligendi ullam non
				molestias ipsum, reiciendis dolor, harum ipsa.
			</p>
			<img
				src="https://images.unsplash.com/photo-1608068811588-3a67006b7489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
				alt="some alt text here"
				class="w-full object-cover max-h-80 xl:max-h-[35rem]"
			/>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates quidem cum quas
				ipsa facilis!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, culpa. Praesentium animi
				quia distinctio quae ipsam neque alias omnis delectus commodi totam soluta, voluptates
				maxime minus iusto fuga molestias voluptatibus sit, dolorem doloribus et placeat?
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, ea in distinctio eveniet
				et nobis consequuntur possimus corrupti adipisci ullam quos vitae dicta libero odit amet
				voluptatum numquam. Reprehenderit, laudantium?
			</p>
		</div>
	</div>
</div>
