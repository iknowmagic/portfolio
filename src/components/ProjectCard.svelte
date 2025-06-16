<script lang="ts">
	import type { Project } from '$lib/data';

	export let project: Project;

	function getProjectTag(project: Project) {
		return project.tags[0] || 'featured';
	}

	function handleClick() {
		if (project.link) {
			if (project.link.startsWith('/')) {
				// Internal link - use SvelteKit navigation
				window.location.href = project.link;
			} else {
				// External link - open in new tab
				window.open(project.link, '_blank');
			}
		}
	}
</script>

<!-- Card Container - Mobile First: p-6, md: p-8, lg: p-10 (40px spec) -->
<section
	class="hover:bg-gray-50 p-6 md:p-8 lg:p-10 transition-colors cursor-pointer"
	on:click={handleClick}
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
	tabindex="0"
	role="button"
	aria-label="View {project.title} project"
>
	<!-- Card Navigation Section -->
	<div class="flex justify-end">
		<span
			class="bg-white hover:bg-black border border-default rounded-full badge-outline hover:text-white text-small transition-colors cursor-pointer badge"
		>
			{getProjectTag(project).toUpperCase()}
		</span>
	</div>

	<!-- Project Image - Mobile First: my-4, md: my-5, lg: my-5 (20px spec) -->
	<div
		class="flex justify-center items-center bg-gray-300 my-4 md:my-5 lg:my-5 w-full aspect-square"
	>
		<span class="text-gray-600 text-small">{project.title}</span>
	</div>

	<!-- Project Title -->
	<h3 class="heading-h4">
		{project.title}
	</h3>

	<!-- Project Description - Mobile First: py-4 min-h-20, md: py-5 min-h-24, lg: py-5 min-h-25 (20px/100px spec) -->
	<div class="py-4 md:py-5 lg:py-5">
		<p class="text-default">
			{project.description}
		</p>
	</div>

	<!-- Features - Mobile First: py-6, md: py-8, lg: py-10 (40px spec) -->
	<div class="py-6 md:py-8 lg:py-10">
		{#if project.features.length > 0}
			<span class="text-small-600">Features: </span>
			<span class="text-small">{project.features.join(', ')}</span>
		{/if}
	</div>
</section>
