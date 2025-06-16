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

<section
	style="padding: 40px;"
	class="hover:bg-gray-50 transition-colors"
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

	<!-- Project Image - 1:1 ratio, full width -->
	<div
		class="flex justify-center items-center bg-gray-300 w-full aspect-square"
		style="margin: 20px 0;"
	>
		<span class="text-gray-600 text-small">{project.title}</span>
	</div>

	<!-- Project Title -->
	<h3 class="heading-h3">
		{project.title}
	</h3>

	<!-- Project Description - Fixed height -->
	<div style="padding: 20px 0; min-height: 100px;">
		<p class="text-default">
			{project.description}
		</p>
	</div>

	<!-- Tech Stack -->
	<div style="padding: 40px 0;">
		{#if project.techStack.length > 0}
			<span class="text-small-600">Tech Stack: </span>
			<span class="text-small">{project.techStack.join(', ')}</span>
		{/if}
	</div>
</section>
