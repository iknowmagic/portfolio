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

<!-- Projects Container with border -->
<section class="border border-default" style="margin-bottom: 200px;">
	<!-- Projects Grid Container -->
	<div class="projects-grid">
		{#each filteredProjects as project, index}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
	/* Projects Grid Layout - Table-like structure */
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.projects-grid :global(article) {
		border-right: 1px solid var(--border--default);
		border-bottom: 1px solid var(--border--default);
	}

	/* Remove borders on edges to avoid double borders with container */
	.projects-grid :global(article:nth-child(3n)) {
		border-right: none;
	}

	.projects-grid :global(article:nth-last-child(-n + 3)) {
		border-bottom: none;
	}

	/* Responsive adjustments */
	@media (max-width: 1024px) {
		.projects-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.projects-grid :global(article:nth-child(3n)) {
			border-right: 1px solid var(--border--default);
		}

		.projects-grid :global(article:nth-child(2n)) {
			border-right: none;
		}

		.projects-grid :global(article:nth-last-child(-n + 3)) {
			border-bottom: 1px solid var(--border--default);
		}

		.projects-grid :global(article:nth-last-child(-n + 2)) {
			border-bottom: none;
		}
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: repeat(1, 1fr);
		}

		.projects-grid :global(article) {
			border-right: none;
			border-bottom: 1px solid var(--border--default);
		}

		.projects-grid :global(article:last-child) {
			border-bottom: none;
		}
	}

	/* Override DaisyUI button styles to maintain monochrome design */
	.btn {
		background-color: white;
		color: var(--text--default);
	}

	.btn:hover {
		background-color: var(--background--primary);
		color: var(--text--inverse);
	}
</style>
