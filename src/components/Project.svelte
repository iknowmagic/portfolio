<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import { projects } from '$lib/data';
	import OtherProjects from './OtherProjects.svelte';

	export let id: string;

	// Look up project data by ID
	$: project = projects.find((p) => p.id === id);
</script>

{#if !project}
	<div class="flex justify-center items-center min-h-screen">
		<div class="text-center">
			<h1 class="mb-4 heading-h3">Project Not Found</h1>
			<p class="mb-6 text-medium-500">Project with id "{id}" not found.</p>
			<a
				href="/"
				class="flex justify-center items-center gap-2 hover:opacity-60 text-small transition-opacity"
			>
				<ArrowLeft size={16} />
				GO BACK TO HOMEPAGE
			</a>
		</div>
	</div>
{:else}
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
				<h1 class="uppercase heading-large">{project.title}</h1>
			</div>

			<!-- Right: Description - Mobile First: px-0, lg: px-10 (40px spec) -->
			<div class="px-0 lg:px-10">
				<p class="text-medium-500">{project.description}</p>
			</div>
		</div>
	</section>

	<!-- Features & Category Section - Mobile First: py-6, Desktop: py-6 (25px spec) -->
	<section class="py-6">
		<div class="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-4">
			<!-- Left: Features -->
			<div>
				<span class="text-small-600">Features: </span>
				<span class="text-small">{project.features.join(', ')}</span>
			</div>

			<!-- Right: Category Pill -->
			<div>
				<span
					class="bg-white border border-default rounded-full badge-outline text-small uppercase badge"
				>
					{project.tags[0]}
				</span>
			</div>
		</div>
	</section>

	<!-- Project Content Slot - Mobile First: py-12 pb-24, md: py-16 pb-32, lg: py-20 pb-37 (80px/150px spec) -->
	<section class="py-12 md:py-16 lg:py-20 pb-24 md:pb-32 lg:pb-37">
		<slot />
	</section>

	<!-- Other Projects Component -->
	<OtherProjects excludeProject={id} />
{/if}
