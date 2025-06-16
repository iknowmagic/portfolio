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

<!-- Page Container with Responsive Design -->
<div class="flex justify-center min-h-screen">
	<div class="px-5 sm:px-7 md:px-8 lg:px-15 xl:px-15 pt-10 w-full min-w-[320px] max-w-[1680px]">
		<Header />

		<Project
			title="PORTFOLIO WEBSITE"
			description="A magazine-style portfolio built collaboratively with Claude AI in under 10 hours. This project demonstrates the detailed, iterative process of creating a modern developer portfolio through progressive prompting and human-AI collaboration."
			techStack={['SvelteKit', 'TailwindCSS', 'DaisyUI', 'TypeScript']}
			category="FEATURED"
		>
			<!-- Portfolio-specific content with responsive design -->
			<div class="w-full">
				<h2 class="mb-6 lg:mb-8 heading-h3">The Making Of: A Detailed Development Process</h2>

				<!-- Main Page Creation Section -->
				<div class="mb-12 lg:mb-20">
					<h3 class="mb-4 lg:mb-6 heading-h4">Part 1: Building the Magazine-Style Homepage</h3>

					<div class="bg-gray-50 mb-8 lg:mb-10 p-5 md:p-7 border border-default">
						<h4 class="mb-3 lg:mb-4 text-small-600">Initial Requirements & Design Direction</h4>
						<div
							class="bg-gray-100 p-4 lg:p-5 border border-gray-300 rounded font-mono text-gray-700 text-xs lg:text-sm leading-relaxed"
						>
							<p class="mb-2">
								Act as a User Experience (UX) and web portfolio expert, with TailwindCSS, SvelteKit
							</p>
							<p class="mb-2">
								I need to create a portfolio website for my frontend/coding projects. I just
								installed a copy of a barebones sveltekit.
							</p>
							<p class="mb-2">
								* IMPORTANT: Brainstorm first. Do not offer code solutions without approval...
							</p>
							<p class="mb-0">
								Since this portfolio is for a frontend developer, it has to look great, cohesive,
								and aesthetically pleasing.
							</p>
						</div>
					</div>

					<div class="bg-gray-50 mb-8 lg:mb-10 p-5 md:p-7 border border-default">
						<h4 class="mb-3 lg:mb-4 text-small-600">Design Reference & Typography</h4>
						<div
							class="bg-gray-100 p-4 lg:p-5 border border-gray-300 rounded font-mono text-gray-700 text-xs lg:text-sm leading-relaxed"
						>
							<p class="mb-2">I found a design that could work.</p>
							<p class="mb-2">Font styles: [detailed CSS variables provided]</p>
							<p class="mb-2">Palette: monochromatic</p>
							<p class="mb-2">Overall feeling: minimalist</p>
							<p class="mb-2">What about Montserrat as the font?</p>
							<p class="mb-0">Let's use these colors: black #0D0D0D #8C8C8C #F2F2F2 white</p>
						</div>
					</div>

					<div class="bg-gray-50 mb-8 lg:mb-10 p-5 md:p-7 border border-default">
						<h4 class="mb-3 lg:mb-4 text-small-600">Detailed Layout Specifications</h4>
						<div
							class="bg-gray-100 p-4 lg:p-5 border border-gray-300 rounded font-mono text-gray-700 text-xs lg:text-sm leading-relaxed"
						>
							<p class="mb-2">
								It's easier to describe the Desktop size, since it is more magazine-style:
							</p>
							<p class="mb-2">
								The page is monochromatic (including link colors and style), resembling a bit of a
								newspaper or magazine. There is a margin of 50px on all four sides... wait, I made
								mistakes with the measurements. Start again.
							</p>
							<p class="mb-2">Page: padding 60px left right. padding top: 40px.</p>
							<p class="mb-2">
								Header menu at the top. On the left, my name: ILAN KAIM (heading--h5). On the right,
								three links: "Magazine Authors Podcast", then social media links. Padding: 25px top
								bottom.
							</p>
							<p class="mb-0">There is a divider line, use the divider class from daisyui.</p>
						</div>
					</div>

					<div class="bg-gray-50 mb-8 lg:mb-10 p-5 md:p-7 border border-default">
						<h4 class="mb-3 lg:mb-4 text-small-600">Projects Grid Structure</h4>
						<div
							class="bg-gray-100 p-4 lg:p-5 border border-gray-300 rounded font-mono text-gray-700 text-xs lg:text-sm leading-relaxed"
						>
							<p class="mb-2">
								Under the hero section... One can see the word "PROJECTS" on the left. On the right,
								there are some pill buttons: "ALL" "ART" "STREET ART" "SCULPTURES". 60px - padding
								top and down.
							</p>
							<p class="mb-2">
								There is a table-like structure; use css grid. The main container has a border with
								"border border-default" from the styles.
							</p>
							<p class="mb-2">
								Inside there are cards, each one for a project. There are three cards across
								horizontally. Card: 40px padding.
							</p>
							<p class="mb-0">
								Under the card nav section, there is a square image 1:1 ratio that stretches to the
								width of the card. The image has a top bottom margin of 20px.
							</p>
						</div>
					</div>

					<div class="bg-gray-50 mb-8 lg:mb-10 p-5 md:p-7 border border-default">
						<h4 class="mb-3 lg:mb-4 text-small-600">Iterative Refinements</h4>
						<div
							class="bg-gray-100 p-4 lg:p-5 border border-gray-300 rounded font-mono text-gray-700 text-xs lg:text-sm leading-relaxed"
						>
							<p class="mb-2">Go back the instructions and attempt to follow them closely.</p>
							<p class="mb-2">
								You are missing the borders as described, the padding. I need you to follow the
								instructions to the letter. Try again
							</p>
							<p class="mb-2">
								for divider use .divider (daisy). for the pill decide between badge and button
								(daisy) but keep it rounded. border must contain the border class to work; "border
								border-default" for example.
							</p>
							<p class="mb-0">
								add an order int to the cards struct, and sort by that, descending. Oldest = lower
								number, latest (or on top) Newer number. Masonry-style layout,
								grid-template-columns: repeat(3, 1fr);
							</p>
						</div>
					</div>
				</div>

				<!-- Single Project Page Section -->
				<div class="mb-12 lg:mb-20">
					<h3 class="mb-4 lg:mb-6 heading-h4">Part 2: Creating Individual Project Pages</h3>

					<div class="bg-gray-50 mb-8 lg:mb-10 p-5 md:p-7 border border-default">
						<h4 class="mb-3 lg:mb-4 text-small-600">Component Architecture</h4>
						<div
							class="bg-gray-100 p-4 lg:p-5 border border-gray-300 rounded font-mono text-gray-700 text-xs lg:text-sm leading-relaxed"
						>
							<p class="mb-2">
								Separate components; header, projects, project-card, footer, footer-social. Also put
								the data in data.ts
							</p>
							<p class="mb-2">so far so good. Now let's create a single project page.</p>
							<p class="mb-0">
								the first project in the list will be portfolio. I'll explain that the project was
								created with the help of Claude, in under 10 hours.
							</p>
						</div>
					</div>

					<div class="bg-gray-50 mb-8 lg:mb-10 p-5 md:p-7 border border-default">
						<h4 class="mb-3 lg:mb-4 text-small-600">Portfolio Page Layout</h4>
						<div
							class="bg-gray-100 p-4 lg:p-5 border border-gray-300 rounded font-mono text-gray-700 text-xs lg:text-sm leading-relaxed"
						>
							<p class="mb-2">
								The single project page "/portfolio". The portfolio page could leverage a
								Portfolio.svelte component.
							</p>
							<p class="mb-2">
								under the header, there is a sign "&lt;- GO BACK" on the left, the "&lt;-" being a
								left arrow icon from Lucide. Under that section, there is a hero section (80px
								padding top bottom) that is made of two columns.
							</p>
							<p class="mb-2">
								The left column contains the name of the project with heading-large uppercase. On
								the right, a description with text-medium-500. The description has a 40px padding
								left right.
							</p>
							<p class="mb-0">
								Under that there is a section with the left Tech Stack: ... On the right, there is
								the pill with the tag/category.
							</p>
						</div>
					</div>

					<div class="bg-gray-50 mb-8 lg:mb-10 p-5 md:p-7 border border-default">
						<h4 class="mb-3 lg:mb-4 text-small-600">Content Strategy</h4>
						<div
							class="bg-gray-100 p-4 lg:p-5 border border-gray-300 rounded font-mono text-gray-700 text-xs lg:text-sm leading-relaxed"
						>
							<p class="mb-2">
								Under that section we'll feature the section content... the content will be the
								prompts that I have been giving you, with a screenshot of the main page and this
								page itself, showcasing what I told you to create the respective pages, in a
								progressive, informal "human" language that typically no one would see.
							</p>
							<p class="mb-2">
								I want to show that the prompt was not just "make me a page", but a detailed,
								meticulous process that involved several steps. The description has a padding of
								80px top and 150px bottom.
							</p>
							<p class="mb-0">
								Use a container with a mono font. And each container will tell the story as to how
								the website was built, follow the story as I told it to you.
							</p>
						</div>
					</div>
				</div>

				<div class="mb-12 lg:mb-20">
					<h3 class="mb-4 lg:mb-6 heading-h4">Key Lessons & Insights</h3>
					<div
						class="bg-gray-100 p-4 lg:p-5 border border-gray-300 rounded font-mono text-gray-700 text-xs lg:text-sm leading-relaxed"
					>
						<p class="mb-2">
							This project demonstrates the power of iterative development and detailed
							communication between human and AI collaborators. Every design decision was
							deliberate, every spacing measurement was intentional, and the process was
							transparent.
						</p>
						<p class="mb-0">
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
