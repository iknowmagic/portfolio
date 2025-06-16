<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { projects } from '$lib/data';
	import ProjectCard from './ProjectCard.svelte';

	export let title: string;
	export let description: string;
	export let techStack: string[];
	export let category: string = 'FEATURED';

	// Get latest 3 projects (excluding current project)
	const latestProjects = projects
		.filter((p) => p.title !== title)
		.sort((a, b) => b.order - a.order)
		.slice(0, 3);
</script>

<!-- Go Back Section - Mobile First: py-6, Desktop: py-6 (25px spec) -->
<section class="py-6">
	<a href="/" class="flex items-center gap-2 hover:opacity-60 text-small transition-opacity">
		<ArrowLeft size={16} />
		GO BACK
	</a>
</section>

<!-- Hero Section - Mobile First: py-12, md: py-16, lg: py-20 (80px spec) -->
<section class="py-12 md:py-16 lg:py-20">
	<div class="items-start gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-2">
		<!-- Left: Project Title -->
		<div>
			<h1 class="uppercase heading-large">{title}</h1>
		</div>

		<!-- Right: Description - Mobile First: px-0, lg: px-10 (40px spec) -->
		<div class="px-0 lg:px-10">
			<p class="text-medium-500">{description}</p>
		</div>
	</div>
</section>

<!-- Tech Stack & Category Section - Mobile First: py-6, Desktop: py-6 (25px spec) -->
<section class="py-6">
	<div class="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-4">
		<!-- Left: Tech Stack -->
		<div>
			<span class="text-small-600">Tech Stack: </span>
			<span class="text-small">{techStack.join(', ')}</span>
		</div>

		<!-- Right: Category Pill -->
		<div>
			<span class="bg-white border border-default rounded-full badge-outline text-small badge">
				{category}
			</span>
		</div>
	</div>
</section>

<!-- Project Content Slot - Mobile First: py-12 pb-24, md: py-16 pb-32, lg: py-20 pb-37 (80px/150px spec) -->
<section class="py-12 md:py-16 lg:py-20 pb-24 md:pb-32 lg:pb-37">
	<slot />
</section>

<!-- Latest Projects Section - Mobile First: py-12 mt-16, md: py-14 mt-20, lg: py-12 mt-25 (50px/100px spec) -->
<section class="mt-16 md:mt-20 lg:mt-25 py-12 md:py-14 lg:py-12">
	<div class="divider"></div>

	<div class="py-12 md:py-14 lg:py-12">
		<div class="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-6 mb-6 lg:mb-8">
			<!-- Left: Latest Projects Title -->
			<h2 class="uppercase heading-large">LATEST PROJECTS</h2>

			<!-- Right: See All Link -->
			<a href="/" class="flex items-center gap-2 hover:opacity-60 text-small transition-opacity">
				SEE ALL
				<ArrowRight size={16} />
			</a>
		</div>

		<!-- Latest Projects Grid -->
		<div class="grid-inner-1 md:grid-inner-2 lg:grid-inner-3 border border-default">
			{#each latestProjects as project}
				<div>
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>
