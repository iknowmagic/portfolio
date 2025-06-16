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
<section class="py-12 lg:py-15">
	<div class="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-6">
		<!-- Left: Projects Title -->
		<h2 class="heading-h3">PROJECTS</h2>

		<!-- Right: Filter Pills -->
		<div class="flex flex-wrap gap-3">
			{#each filters as filter}
				<button
					class="hover:bg-black border border-default hover:border-black rounded-full hover:text-white text-small transition-colors btn btn-sm"
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

<!-- Projects Grid Container -->
<section class="mb-32 lg:mb-50">
	<!-- Clean Grid using grid-inner plugin -->
	<div class="grid-inner-1 md:grid-inner-2 lg:grid-inner-3 border-2 border-black">
		{#each filteredProjects as project}
			<div>
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
</section>
