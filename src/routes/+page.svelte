<script lang="ts">
	import Header from '$components/Header.svelte';
	import Projects from '$components/Projects.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<title>Ilan Kaim - Frontend Developer</title>
	<meta
		name="description"
		content="Frontend developer with 10+ years experience building responsive web applications. Focused on mission-driven teams working towards ethical technology and social good."
	/>
</svelte:head>

<!-- Page Container with flex centering -->
<div class="flex justify-center min-h-screen">
	<div class="page-container">
		<Header />

		<!-- Hero Section -->
		<section style="padding: 40px 0;">
			<h1 class="hero-title">ILAN KAIM</h1>
		</section>

		<Projects />

		<Footer />
	</div>
</div>

<style>
	.page-container {
		max-width: 1680px;
		min-width: 320px;
		width: 100%;
		padding: 40px 60px 0 60px;
	}

	.hero-title {
		font-size: clamp(3rem, 12vw, 8rem);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.02em;
		width: 100%;
	}

	@media (max-width: 768px) {
		.page-container {
			padding: 40px 30px 0 30px;
		}
	}

	@media (max-width: 480px) {
		.page-container {
			padding: 40px 20px 0 20px;
		}
	}
</style>
