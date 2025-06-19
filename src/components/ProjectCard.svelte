<script lang="ts">
  import type { Project } from '$lib/data';

  export let project: Project;

  function getProjectTag(project: Project) {
    return project.tags[0] || 'featured';
  }
</script>

<section class="block hover:bg-gray-50 p-6 md:p-12 lg:p-10 pt-12 transition-colors">
  <!-- Card Navigation Section -->
  <div class="flex justify-end">
    <span class="bg-white border rounded-full badge-outline text-xs uppercase badge badge-sm">
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
</section>
