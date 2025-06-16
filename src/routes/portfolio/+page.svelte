<script lang="ts">
	import Header from '$components/Header.svelte';
	import Project from '$components/Project.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<title>Portfolio Project - Ilan Kaim</title>
	<meta
		name="description"
		content="The making of this portfolio website - a detailed look at the collaborative process between human and AI that created this magazine-style developer portfolio in under 10 hours."
	/>
</svelte:head>

<!-- Page Container with flex centering -->
<div class="flex justify-center min-h-screen">
	<div class="page-container">
		<Header />

		<Project
			title="PORTFOLIO WEBSITE"
			description="A magazine-style portfolio built collaboratively with Claude AI in under 10 hours. This project demonstrates the detailed, iterative process of creating a modern developer portfolio through progressive prompting and human-AI collaboration."
			techStack={['SvelteKit', 'TailwindCSS', 'DaisyUI', 'TypeScript']}
			category="FEATURED"
		>
			<!-- Portfolio-specific content -->
			<div class="content-container">
				<h2 class="mb-8 heading-h3">The Making Of: A Detailed Development Process</h2>

				<!-- Main Page Creation Section -->
				<div class="story-section">
					<h3 class="mb-6 heading-h4">Part 1: Building the Magazine-Style Homepage</h3>

					<div class="prompt-container">
						<h4 class="mb-4 text-small-600">Initial Requirements & Design Direction</h4>
						<div class="mono-content">
							<p>
								Act as a User Experience (UX) and web portfolio expert, with TailwindCSS, SvelteKit
							</p>
							<p>
								I need to create a portfolio website for my frontend/coding projects. I just
								installed a copy of a barebones sveltekit.
							</p>
							<p>* IMPORTANT: Brainstorm first. Do not offer code solutions without approval...</p>
							<p>
								Since this portfolio is for a frontend developer, it has to look great, cohesive,
								and aesthetically pleasing.
							</p>
						</div>
					</div>

					<div class="prompt-container">
						<h4 class="mb-4 text-small-600">Design Reference & Typography</h4>
						<div class="mono-content">
							<p>I found a design that could work.</p>
							<p>Font styles: [detailed CSS variables provided]</p>
							<p>Palette: monochromatic</p>
							<p>Overall feeling: minimalist</p>
							<p>What about Montserrat as the font?</p>
							<p>Let's use these colors: black #0D0D0D #8C8C8C #F2F2F2 white</p>
						</div>
					</div>

					<div class="prompt-container">
						<h4 class="mb-4 text-small-600">Detailed Layout Specifications</h4>
						<div class="mono-content">
							<p>It's easier to describe the Desktop size, since it is more magazine-style:</p>
							<p>
								The page is monochromatic (including link colors and style), resembling a bit of a
								newspaper or magazine. There is a margin of 50px on all four sides... wait, I made
								mistakes with the measurements. Start again.
							</p>
							<p>Page: padding 60px left right. padding top: 40px.</p>
							<p>
								Header menu at the top. On the left, my name: ILAN KAIM (heading--h5). On the right,
								three links: "Magazine Authors Podcast", then social media links. Padding: 25px top
								bottom.
							</p>
							<p>There is a divider line, use the divider class from daisyui.</p>
						</div>
					</div>

					<div class="prompt-container">
						<h4 class="mb-4 text-small-600">Projects Grid Structure</h4>
						<div class="mono-content">
							<p>
								Under the hero section... One can see the word "PROJECTS" on the left. On the right,
								there are some pill buttons: "ALL" "ART" "STREET ART" "SCULPTURES". 60px - padding
								top and down.
							</p>
							<p>
								There is a table-like structure; use css grid. The main container has a border with
								"border border-default" from the styles.
							</p>
							<p>
								Inside there are cards, each one for a project. There are three cards across
								horizontally. Card: 40px padding.
							</p>
							<p>
								Under the card nav section, there is a square image 1:1 ratio that stretches to the
								width of the card. The image has a top bottom margin of 20px.
							</p>
						</div>
					</div>

					<div class="prompt-container">
						<h4 class="mb-4 text-small-600">Iterative Refinements</h4>
						<div class="mono-content">
							<p>Go back the instructions and attempt to follow them closely.</p>
							<p>
								You are missing the borders as described, the padding. I need you to follow the
								instructions to the letter. Try again
							</p>
							<p>
								for divider use .divider (daisy). for the pill decide between badge and button
								(daisy) but keep it rounded. border must contain the border class to work; "border
								border-default" for example.
							</p>
							<p>
								add an order int to the cards struct, and sort by that, descending. Oldest = lower
								number, latest (or on top) Newer number. Masonry-style layout,
								grid-template-columns: repeat(3, 1fr);
							</p>
						</div>
					</div>
				</div>

				<!-- Single Project Page Section -->
				<div class="story-section">
					<h3 class="mb-6 heading-h4">Part 2: Creating Individual Project Pages</h3>

					<div class="prompt-container">
						<h4 class="mb-4 text-small-600">Component Architecture</h4>
						<div class="mono-content">
							<p>
								Separate components; header, projects, project-card, footer, footer-social. Also put
								the data in data.ts
							</p>
							<p>so far so good. Now let's create a single project page.</p>
							<p>
								the first project in the list will be portfolio. I'll explain that the project was
								created with the help of Claude, in under 10 hours.
							</p>
						</div>
					</div>

					<div class="prompt-container">
						<h4 class="mb-4 text-small-600">Portfolio Page Layout</h4>
						<div class="mono-content">
							<p>
								The single project page "/portfolio". The portfolio page could leverage a
								Portfolio.svelte component.
							</p>
							<p>
								under the header, there is a sign "&lt;- GO BACK" on the left, the "&lt;-" being a
								left arrow icon from Lucide. Under that section, there is a hero section (80px
								padding top bottom) that is made of two columns.
							</p>
							<p>
								The left column contains the name of the project with heading-large uppercase. On
								the right, a description with text-medium-500. The description has a 40px padding
								left right.
							</p>
							<p>
								Under that there is a section with the left Tech Stack: ... On the right, there is
								the pill with the tag/category.
							</p>
						</div>
					</div>

					<div class="prompt-container">
						<h4 class="mb-4 text-small-600">Content Strategy</h4>
						<div class="mono-content">
							<p>
								Under that section we'll feature the section content... the content will be the
								prompts that I have been giving you, with a screenshot of the main page and this
								page itself, showcasing what I told you to create the respective pages, in a
								progressive, informal "human" language that typically no one would see.
							</p>
							<p>
								I want to show that the prompt was not just "make me a page", but a detailed,
								meticulous process that involved several steps. The description has a padding of
								80px top and 150px bottom.
							</p>
							<p>
								Use a container with a mono font. And each container will tell the story as to how
								the website was built, follow the story as I told it to you.
							</p>
						</div>
					</div>
				</div>

				<div class="story-section">
					<h3 class="mb-6 heading-h4">Key Lessons & Insights</h3>
					<div class="mono-content">
						<p>
							This project demonstrates the power of iterative development and detailed
							communication between human and AI collaborators. Every design decision was
							deliberate, every spacing measurement was intentional, and the process was
							transparent.
						</p>
						<p>
							The result? A professional portfolio that tells its own story - built in under 10
							hours through careful planning, clear requirements, and progressive refinement.
						</p>
					</div>
				</div>
			</div>
		</Project>

		<Footer />
	</div>
</div>

<style>
	.page-container {
		max-width: 1680px;
		min-width: 320px;
		width: 100%;
		padding: 40px 60px 0 60px;
	}

	.content-container {
		max-width: 100%;
		margin: 0 auto;
	}

	.story-section {
		margin-bottom: 80px;
	}

	.prompt-container {
		margin-bottom: 40px;
		padding: 30px;
		border: 1px solid var(--border--default);
		background-color: #fafafa;
	}

	.mono-content {
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
		font-size: 13px;
		line-height: 1.6;
		color: #333;
		background-color: #f8f8f8;
		padding: 20px;
		border: 1px solid #e0e0e0;
		border-radius: 4px;
	}

	.mono-content p {
		margin-bottom: 8px;
	}

	.mono-content p:last-child {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		.page-container {
			padding: 40px 30px 0 30px;
		}

		.story-section {
			margin-bottom: 60px;
		}

		.prompt-container {
			padding: 20px;
			margin-bottom: 30px;
		}

		.mono-content {
			font-size: 12px;
			padding: 15px;
		}
	}

	@media (max-width: 480px) {
		.page-container {
			padding: 40px 20px 0 20px;
		}
	}
</style>
