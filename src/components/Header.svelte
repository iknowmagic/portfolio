<script lang="ts">
	import { Github, Linkedin, Twitter, Instagram } from 'lucide-svelte';
</script>

<!-- Header - Mobile First: py-6, Desktop: py-6 (25px spec) -->
<header class="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-4 py-6">
	<!-- Left: Name -->
	<a href="/" class="flex items-center space-x-2">
		<img src="/cod3naut.png" alt="logo" class="w-auto h-10" />
	</a>

	<!-- Right: Navigation and Social -->
	<div class="flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-8">
		<!-- Navigation Links -->
		<nav class="flex gap-4 lg:gap-6"></nav>

		<!-- Social Icons -->
		<div class="flex gap-4">
			<a
				href="https://github.com/iknowmagic"
				target="_blank"
				class="hover:opacity-60 transition-opacity icon-default"
			>
				<Github size={20} />
			</a>
			<a
				href="https://linkedin.com/in/cod3naut"
				target="_blank"
				class="hover:opacity-60 transition-opacity icon-default"
			>
				<Linkedin size={20} />
			</a>
		</div>
	</div>
</header>

<div class="divider divider-neutral" />
