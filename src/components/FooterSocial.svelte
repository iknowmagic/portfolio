<script lang="ts">
	import { Github, Linkedin, Twitter, Instagram } from 'lucide-svelte';
</script>

<!-- Social Icons Section - Mobile First: py-6, md: py-8, lg: py-10 (40px spec) -->
<div class="flex justify-center lg:justify-end py-6 md:py-8 lg:py-10">
	<div class="flex gap-4">
		<a
			href="https://github.com/iknowmagic"
			target="_blank"
			class="hover:opacity-60 transition-opacity icon-inverse"
		>
			<Github size={20} />
		</a>
		<a
			href="https://linkedin.com/in/cod3naut"
			target="_blank"
			class="hover:opacity-60 transition-opacity icon-inverse"
		>
			<Linkedin size={20} />
		</a>
	</div>
</div>
