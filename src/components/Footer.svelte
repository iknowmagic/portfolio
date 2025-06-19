<script lang="ts">
  import FooterSocial from './FooterSocial.svelte';
  import { projects } from '$lib/data';

  // Group projects by tags for footer display
  $: featuredProjects = projects.filter((p) => p.tags.includes('featured')).slice(0, 5);
  $: experimentProjects = projects.filter((p) => p.tags.includes('experiments')).slice(0, 5);

  // Helper function to get primary link (same priority as ProjectLink)
  function getPrimaryLink(project) {
    // Priority: live > github > video > article
    if (project.links.live) return project.links.live;
    if (project.links.github) return project.links.github;
    if (project.links.video) return project.links.video;
    if (project.links.article) return project.links.article;
    return null;
  }
</script>

<!-- Footer with Mobile-First Responsive Padding -->
<footer
  class="bg-black -mx-5 sm:-mx-7 md:-mx-8 lg:-mx-15 xl:-mx-15 px-5 sm:px-7 md:px-8 lg:px-15 xl:px-15 py-12 sm:py-15 lg:py-15 text-inverse"
>
  <!-- Main Footer Grid - Mobile First: 1 col, lg: 3 cols -->
  <div class="gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-3">
    <!-- First section: Name -->
    <div>
      <img src="/cod3naut.png" alt="logo" class="invert mb-4 w-48" />
    </div>

    <!-- Second section: Projects by Category - Mobile First: py-6, md: py-8, lg: py-10 (40px spec) -->
    <div class="lg:col-span-2 py-6 md:py-8 lg:py-10">
      <div class="gap-4 grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h4 class="mb-2 text-inverse text-small-600">Featured</h4>
          <ul class="space-y-1 text-inverse text-small">
            {#each featuredProjects as project}
              <li>
                {#if getPrimaryLink(project)}
                  <a
                    href={getPrimaryLink(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-gray-300 transition-colors"
                  >
                    {project.title}
                  </a>
                {:else}
                  {project.title}
                {/if}
              </li>
            {/each}
          </ul>
        </div>
        <div>
          <h4 class="mb-2 text-inverse text-small-600">Experiments</h4>
          <ul class="space-y-1 text-inverse text-small">
            {#each experimentProjects as project}
              <li>
                {#if getPrimaryLink(project)}
                  <a
                    href={getPrimaryLink(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-gray-300 transition-colors"
                  >
                    {project.title}
                  </a>
                {:else}
                  {project.title}
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>

  <FooterSocial />
</footer>
