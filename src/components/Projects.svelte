<script lang="ts">
	import { projects, filters } from '$lib/data';
	import ProjectCard from './ProjectCard.svelte';

	let selectedFilter = 'ALL';

	$: filteredProjects =
		selectedFilter === 'ALL'
			? projects.sort((a, b) => b.order - a.order)
			: projects
					.filter((project) =>
						selectedFilter === 'FEATURED'
							? project.tags.includes('featured')
							: project.tags.includes(selectedFilter.toLowerCase())
					)
					.sort((a, b) => b.order - a.order);

	function selectFilter(filter: string) {
		selectedFilter = filter;
	}
</script>

<!-- Projects Navigation -->
<section style="padding: 60px 0;">
	<div class="flex justify-between items-center">
		<!-- Left: Projects Title -->
		<h2 class="heading-h3">PROJECTS</h2>

		<!-- Right: Filter Pills -->
		<div class="flex gap-3">
			{#each filters as filter}
				<button
					class="border border-default rounded-full text-small btn btn-sm"
					class:bg-black={selectedFilter === filter}
					class:text-white={selectedFilter === filter}
					class:border-black={selectedFilter === filter}
					on:click={() => selectFilter(filter)}
				>
					{filter}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Projects Container - Individual borders approach -->
<section style="margin-bottom: 200px;">
	<!-- Projects Grid Container -->
	<div class="sm:grid-inner-1 md:grid-inner-2 lg:grid-inner-3 border-2 border-black">
		{#each filteredProjects as project, index}
			<div class="">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
</section>
