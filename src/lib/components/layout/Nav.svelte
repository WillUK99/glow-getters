<script lang="ts">
	import { page } from '$app/stores';

	let showMenu = false;

	const toggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<div class="sticky top-0 z-50">
	<div>
		<nav class="px-2 py-2 mx-auto shadow-sm bg-primary md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between container mx-auto">
				<a
					class="flex flex-col text-xl font-thin text-gray-800 uppercase font-rowdies md:text-2xl hover:text-tertiary"
					href="/"
				>
					<span>moralio</span>
				</a>
				<!-- Mobile menu button -->
				<div on:click={toggleMenu} on:keypress={toggleMenu} class="flex md:hidden">
					<button
						type="button"
						class="text-black hover:text-tertiary focus:outline-none focus:text-tertiary"
					>
						<span class="sr-only">Toggle mobile navigation</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div
				class="py-3 font-poppins flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				<a
					class="text-gray-800 hover:text-tertiary"
					class:active={$page.url.pathname === '/'}
					href="/">Home</a
				>
				<a
					class:active={$page.url.pathname === '/articles'}
					class="text-gray-800 hover:text-tertiary"
					href="/articles">Articles</a
				>
				<!-- <a
					class:active={$page.url.pathname === '/contact'}
					class="text-gray-800 hover:text-tertiary"
					href="/contact">Contact us</a
				> -->
			</div>
		</nav>
	</div>
</div>
