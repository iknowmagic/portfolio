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

<!-- Go Back Section -->
<section style="padding: 25px 0;">
	<a href="/" class="flex items-center gap-2 hover:opacity-60 text-small transition-opacity">
		<ArrowLeft size={16} />
		GO BACK
	</a>
</section>

<!-- Hero Section -->
<section style="padding: 80px 0;">
	<div class="items-start gap-8 grid grid-cols-1 lg:grid-cols-2">
		<!-- Left: Project Title -->
		<div>
			<h1 class="uppercase heading-large">{title}</h1>
		</div>

		<!-- Right: Description -->
		<div style="padding: 0 40px;">
			<p class="text-medium-500">{description}</p>
		</div>
	</div>
</section>

<!-- Tech Stack & Category Section -->
<section style="padding: 25px 0;">
	<div class="flex justify-between items-center">
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

<!-- Project Content Slot -->
<section style="padding: 80px 0 150px 0;">
	<slot />
</section>

<!-- Latest Projects Section -->
<section style="padding: 50px 0; margin-top: 100px;">
	<div class="divider"></div>

	<div style="padding: 50px 0;">
		<div class="flex justify-between items-center mb-8">
			<!-- Left: Latest Projects Title -->
			<h2 class="uppercase heading-large">LATEST PROJECTS</h2>

			<!-- Right: See All Link -->
			<a href="/" class="flex items-center gap-2 hover:opacity-60 text-small transition-opacity">
				SEE ALL
				<ArrowRight size={16} />
			</a>
		</div>

		<!-- Latest Projects Grid -->
		<div class="gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-default">
			{#each latestProjects as project, index}
				<div class="border-default border-r last:border-r-0">
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>
