<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { projects } from '$lib/data';
	import ProjectCard from './ProjectCard.svelte';

	// Optional prop to manually exclude a project, falls back to route-based detection
	export let excludeProject: string | null = null;

	// Determine which project to exclude based on current route
	$: currentRoute = $page.url.pathname;
	$: currentProjectId = getCurrentProjectId(currentRoute);
	$: idToExclude = excludeProject || currentProjectId;

	// Get 3 projects excluding the current one
	$: otherProjects = projects
		.filter((p) => p.id !== idToExclude)
		.sort((a, b) => b.order - a.order)
		.slice(0, 3);

	function getCurrentProjectId(route: string): string | null {
		// Map routes to project IDs
		const routeProjectMap: Record<string, string> = {
			'/portfolio': 'portfolio'
			// Add more routes as you create individual project pages
			// '/whatstherush': 'whatstherush',
			// '/json-visualizer': 'json-visualizer',
		};

		return routeProjectMap[route] || null;
	}
</script>

<!-- Other Projects Section - Mobile First: py-12 mt-16, md: py-14 mt-20, lg: py-12 mt-25 -->
<section class="mt-16 md:mt-20 lg:mt-25 py-12 md:py-14 lg:py-12">
	<div class="divider"></div>

	<div class="py-12 md:py-14 lg:py-12">
		<div class="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-6 mb-6 lg:mb-8">
			<!-- Left: Other Projects Title -->
			<h2 class="uppercase heading-large">OTHER PROJECTS</h2>

			<!-- Right: See All Link -->
			<a href="/" class="flex items-center gap-2 hover:opacity-60 text-small transition-opacity">
				SEE ALL
				<ArrowRight size={16} />
			</a>
		</div>

		<!-- Other Projects Grid -->
		<div class="grid-inner-1 md:grid-inner-2 lg:grid-inner-3 border border-default">
			{#each otherProjects as project}
				<div>
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>
