<script lang="ts">
  import type { Project } from '$lib/data';
  import { Play, ExternalLink, Github, FileText } from 'lucide-svelte';

  export let project: Project;

  // Smart link priority logic
  function getPrimaryLink(project: Project) {
    // Priority: live > github > video > article
    if (project.links.live) return { url: project.links.live, type: 'live' };
    if (project.links.github) return { url: project.links.github, type: 'github' };
    if (project.links.video) return { url: project.links.video, type: 'video' };
    if (project.links.article) return { url: project.links.article, type: 'article' };
    return null;
  }

  // Get icon and label for media type
  function getMediaDisplay(type: string) {
    switch (type) {
      case 'video':
        return { icon: Play, label: 'Video' };
      case 'live':
        return { icon: ExternalLink, label: 'Live Site' };
      case 'github':
        return { icon: Github, label: 'Source Code' };
      case 'article':
        return { icon: FileText, label: 'Article' };
      default:
        return { icon: ExternalLink, label: 'View' };
    }
  }

  $: primaryLink = getPrimaryLink(project);
  $: mediaDisplay = primaryLink ? getMediaDisplay(primaryLink.type) : null;

  function handleClick() {
    if (primaryLink) {
      window.open(primaryLink.url, '_blank', 'noopener,noreferrer');
    }
  }
</script>

{#if primaryLink}
  <div
    class="group relative h-full cursor-pointer"
    on:click={handleClick}
    on:keydown={(e) => e.key === 'Enter' && handleClick()}
    role="button"
    tabindex="0"
    aria-label="Open {mediaDisplay?.label} for {project.title}"
  >
    <!-- Card Content -->
    <div class="h-full">
      <slot />
    </div>

    <!-- Hover Overlay -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center bg-black/80 opacity-0 group-hover:opacity-100 h-full transition-opacity duration-200"
    >
      {#if mediaDisplay}
        <!-- Icon -->
        <svelte:component this={mediaDisplay.icon} size={32} class="mb-2 text-white" />

        <!-- Label -->
        <span class="font-medium text-white text-small uppercase tracking-wide">
          {mediaDisplay.label}
        </span>
      {/if}
    </div>
  </div>
{:else}
  <!-- No links - just render content without interaction -->
  <slot />
{/if}
