<script lang="ts">
  import Header from '$components/Header.svelte';
  import Projects from '$components/Projects.svelte';
  import Footer from '$components/Footer.svelte';
  import Hero from '$components/Hero.svelte';
</script>

<svelte:head>
  <title>Ilan Kaim - Frontend Developer</title>
  <meta
    name="description"
    content="Frontend developer with 10+ years experience building responsive web applications. Focused on mission-driven teams working towards ethical technology and social good."
  />
</svelte:head>

<!-- Page Container with Mobile-First Responsive Design -->
<div class="flex justify-center bg-white min-h-screen text-black">
  <div class="px-5 sm:px-7 md:px-8 lg:px-15 xl:px-15 pt-10 w-full min-w-[320px] max-w-[1680px]">
    <Header />

    <Hero />

    <Projects />

    <Footer />
  </div>
</div>
