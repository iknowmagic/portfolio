<script lang="ts">
	import { Github, Linkedin, Twitter, Instagram } from 'lucide-svelte';
</script>

<!-- Header -->
<header class="flex justify-between items-center" style="padding: 25px 0;">
	<!-- Left: Name -->
	<h1 class="heading-h5">ILAN KAIM</h1>

	<!-- Right: Navigation and Social -->
	<div class="flex items-center gap-8">
		<!-- Navigation Links -->
		<nav class="flex gap-6">
			<a href="#" class="text-medium">Magazine</a>
			<a href="#" class="text-medium">Authors</a>
			<a href="#" class="text-medium">Podcast</a>
		</nav>

		<!-- Social Icons -->
		<div class="flex gap-4">
			<a href="https://github.com/iknowmagic" target="_blank" class="icon-default">
				<Github size={20} />
			</a>
			<a href="https://linkedin.com/in/cod3naut" target="_blank" class="icon-default">
				<Linkedin size={20} />
			</a>
			<a href="#" class="icon-default">
				<Twitter size={20} />
			</a>
			<a href="#" class="icon-default">
				<Instagram size={20} />
			</a>
		</div>
	</div>
</header>
