<script lang="ts">
	import type { Project } from '$lib/data';
	import { ExternalLink } from 'lucide-svelte';

	export let project: Project;

	function getProjectTag(project: Project) {
		return project.tags[0] || 'featured';
	}

	// Check if the link is external
	$: isExternalLink =
		project.link && (project.link.startsWith('http') || project.link.startsWith('https'));
</script>

<section class="relative">
	{#if project.link}
		<a
			href={project.link}
			target={isExternalLink ? '_blank' : undefined}
			rel={isExternalLink ? 'noopener noreferrer' : undefined}
			class="block hover:bg-gray-50 p-6 md:p-12 lg:p-10 pt-12 transition-colors"
			aria-label="View {project.title} project"
		>
			<!-- External Link Icon - positioned absolutely in top-right -->
			{#if isExternalLink}
				<div class="top-4 right-4 absolute text-gray-400">
					<ExternalLink size={16} />
				</div>
			{/if}

			<!-- Card Navigation Section -->
			<div class="flex justify-end">
				<span
					class="bg-white hover:bg-black border border-default rounded-full badge-outline hover:text-white text-small transition-colors cursor-pointer badge"
				>
					{getProjectTag(project).toUpperCase()}
				</span>
			</div>

			<!-- Project Image - Mobile First: my-4, md: my-5, lg: my-5 (20px spec) -->
			<div class="my-4 md:my-5 lg:my-5 w-full aspect-square overflow-hidden">
				<img src={project.image} alt={project.title} class="w-full h-full object-cover" />
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
		</a>
	{:else}
		<!-- Fallback for projects without links -->
		<div class="p-6 md:p-8 lg:p-10">
			<!-- Card Navigation Section -->
			<div class="flex justify-end">
				<span
					class="bg-white border border-default rounded-full badge-outline text-small uppercase badge"
				>
					{getProjectTag(project).toUpperCase()}
				</span>
			</div>

			<!-- Project Image -->
			<div class="my-4 md:my-5 lg:my-5 w-full aspect-square overflow-hidden">
				<img src={project.image} alt={project.title} class="w-full h-full object-cover" />
			</div>

			<!-- Project Title -->
			<h3 class="heading-h4">
				{project.title}
			</h3>

			<!-- Project Description -->
			<div class="py-4 md:py-5 lg:py-5">
				<p class="text-default">
					{project.description}
				</p>
			</div>

			<!-- Features -->
			<div class="py-6 md:py-8 lg:py-10">
				{#if project.features.length > 0}
					<span class="text-small-600">Features: </span>
					<span class="text-small">{project.features.join(', ')}</span>
				{/if}
			</div>
		</div>
	{/if}
</section>
