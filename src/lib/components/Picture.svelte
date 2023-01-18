<script>
	export let image;
	export let alt;
	export let width;
	export let height;
	export let loading = "auto";

	function generateSrcset(filetype) {
		return filetype.map(({ src, w }) => `${src} ${w}w`).join(",");
	}

	function generatePlaceholder(width, height) {
		return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}' width='${width}' height='${height}' %3E%3C/svg%3E`;
	}
</script>

<picture>
	{#await image}
		<img
			src={generatePlaceholder(width, height)}
			{alt}
			{width}
			{height}
			{loading}
		/>
	{:then res}
		{#if res?.sources?.avif}
			<source
				srcset={generateSrcset(res.sources.avif)}
				type="image/avif"
			/>
		{/if}
		{#if res?.sources?.webp}
			<source
				srcset={generateSrcset(res.sources.webp)}
				type="image/webp"
			/>
		{/if}
		<img
			src={res?.fallback?.src || generatePlaceholder(width, height)}
			{alt}
			{width}
			{height}
			{loading}
		/>
	{/await}
</picture>
