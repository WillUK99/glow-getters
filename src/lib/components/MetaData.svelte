<script lang="ts">
	export let metaData: any;
</script>

<svelte:head>
	<title>{metaData.title}</title>
	<meta name="description" content={metaData.description} />
	<!-- <meta name="author" content={metaData.author} /> -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content={metaData.title} />
	<meta property="og:description" content={metaData.description} />
	<meta property="og:image" content={metaData.image} />
	<meta property="og:url" content={metaData.url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Moralio" />
	<meta property="og:locale" content="en_GB" />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- <meta name="twitter:site" content="@theblog" /> -->
	<!-- <meta name="twitter:creator" content="@theblog" /> -->
	<meta name="twitter:title" content={metaData.title} />
	<meta name="twitter:description" content={metaData.description} />
	<meta name="twitter:image" content={metaData.image} />
	<link rel="canonical" href={metaData.url} />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>
