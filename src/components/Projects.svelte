<script lang="ts">
  import { projects, filters } from '$lib/data';
  import ProjectCard from './ProjectCard.svelte';
  import ProjectLink from './ProjectLink.svelte';

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
    <h2 class="font-[600] text-2xl">PROJECTS</h2>

    <!-- Right: Filter Pills -->
    <div class="flex flex-wrap gap-3">
      {#each filters as filter}
        <button
          class="rounded-full btn-outline btn btn-sm hover:btn-neutral"
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
      <div class="relative w-full h-full">
        <ProjectLink {project}>
          <ProjectCard {project} />
        </ProjectLink>
      </div>
    {/each}
  </div>
</section>
