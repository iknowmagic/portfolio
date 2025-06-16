<script lang="ts">
	import Header from '$components/Header.svelte';
	import Project from '$components/Project.svelte';
	import Footer from '$components/Footer.svelte';

	// Simple dedent function
	function d(str: string) {
		const lines = str.split('\n');
		while (lines.length && lines[0].trim() === '') lines.shift();
		while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
		if (!lines.length) return '';
		const minIndent = Math.min(
			...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)?.[0].length || 0)
		);
		return lines.map((line) => line.slice(minIndent)).join('\n');
	}
</script>

<svelte:head>
	<title>Portfolio Project - Ilan Kaim</title>
	<meta
		name="description"
		content="The making of this portfolio website - a detailed look at the collaborative AI development process."
	/>
</svelte:head>

<div class="flex justify-center min-h-screen">
	<div class="px-5 sm:px-7 md:px-8 lg:px-15 xl:px-15 pt-10 w-full min-w-[320px] max-w-[1680px]">
		<Header />

		<Project id="portfolio">
			<div class="space-y-8 w-full">
				<h2 class="mb-6 lg:mb-8 heading-h3">AI Collaboration Development Process</h2>
				<p class="mb-8 text-medium-500">
					A demonstration of strategic AI partnership in frontend development - showing how clear
					technical communication and iterative refinement achieves professional results.
				</p>

				<div class="space-y-12">
					<section>
						<h3 class="mb-4 font-bold text-small-600">Initial Planning & Scope</h3>
						<p class="mb-4 text-small">
							This part gives the AI context about the project requirements and establishes clear
							collaboration boundaries.
						</p>
						<div class="bg-gray-50 p-6 border border-default">
							<pre class="font-mono text-sm whitespace-pre-wrap">{d(`
								I need to create a portfolio website for my frontend/coding projects. 
								I just installed a copy of a barebones sveltekit.

								IMPORTANT: Brainstorm first. Do not offer code solutions without approval. 
								Propose what you intend to do so we can discuss it. Only and only offer 
								code solutions after approval. Always ask for approval first, and when 
								unsure, ask for approval.

								Since this portfolio is for a frontend developer, it has to look great, 
								cohesive, and aesthetically pleasing. I'll be using SvelteKit with 
								possibly TailwindCSS. I am open to ANY UI frameworks with or without 
								TailwindCSS to help make the development smoother, faster.

								Note the job posting that represents the target audience: their choice 
								of words, comments, and beliefs. This is not your typical corporate job. 
								I strongly identify with the job ideas: advocacy, equal rights, a liberal 
								political outlook, grassroots movements. The design of the website and 
								language should reflect this, if possible.
							`)}</pre>
						</div>
					</section>

					<section>
						<h3 class="mb-4 font-bold text-small-600">Design Discovery</h3>
						<p class="mb-4 text-small">
							Rather than accepting generic suggestions, I pushed for specific, actionable design
							direction while maintaining collaborative workflow.
						</p>
						<div class="bg-gray-50 p-6 border border-default">
							<pre class="font-mono text-sm whitespace-pre-wrap">{d(`
								"Warm but professional" sounds like anything and nothing specific 
								(very generic) but it's a start. Help me brainstorm design ideas. 
								For example, I could go to Awwwards and look for sites that I like, 
								like a moodboard, then share the design ideas with you. That's just 
								an idea. In other words, guide me to work together on this.

								"Technical Showcase: Do you want to include actual code samples/snippets 
								in the portfolio, or just link to GitHub?" Do people include code snippets 
								in portfolios? No, the code can be kept in GitHub.

								I found a design that could work.

								Font styles:
								/* Color styles */
								--text--default: rgba(0, 0, 0, 1);
								--text--inverse: rgba(255, 255, 255, 1);
								--background--default: rgba(255, 255, 255, 1);
								--heading--large: 104px;
								/* ... */

								Palette: monochromatic
								Overall feeling: minimalist
								What about Montserrat as the font?

								Let's use these colors:
								- black
								- #0D0D0D
								- #8C8C8C  
								- #F2F2F2
								- white

								I added three for variation if needed.
							`)}</pre>
						</div>
					</section>

					<section>
						<h3 class="mb-4 font-bold text-small-600">Layout Refinement</h3>
						<p class="mb-4 text-small">
							When AI struggles with visual interpretation, switching to detailed verbal
							specification maintains momentum while ensuring accurate implementation.
						</p>
						<div class="bg-gray-50 p-6 border border-default">
							<pre class="font-mono text-sm whitespace-pre-wrap">{d(`
								That does not look like the design that I provided. Maybe I have to 
								do this myself? Mmm... I suppose I could describe the homepage and you 
								could design it incrementally as I describe it?

								Can you read the basic structure of Magazine.png and describe it?

								Not a problem. This is gonna be fun. I describe it, and you design it.

								It's easier to describe the Desktop size, since it is more magazine-style:

								The page is monochromatic (including link colors and style), resembling 
								a bit of a newspaper or magazine. There is a margin of 50px on all four 
								sides. Let's aim for a maximum width of 1680px and a minimum width of 320px, 
								4 breakpoints: sm, md, lg and xl).

								There is a magazine-style landing page that contains a header menu at the top. 
								On the left, my name is there: ILAN KAIM (heading--h5 as per the styles provided). 
								On the right, there are three links: "Magazine Authors Podcast", then there are 
								some social media links (no color, the icons use black only). Use Lucide Icons.

								There is a divider line, and after that, my name is big, across the page, 
								almost like a hero section of its own. 25px margin top, down.

								Under the hero section (no divider line) One can see the word "PROJECTS" on 
								the left. On the right, there are some pill buttons: "ALL" "ART" "STREET ART" 
								"SCULPTURES". We could have a similar menu with relevant links, "FEATURED". 
								50px - margin top and down.
							`)}</pre>
						</div>
					</section>

					<section>
						<h3 class="mb-4 font-bold text-small-600">First Course Correction</h3>
						<p class="mb-4 text-small">
							When AI output doesn't match specifications, I provide immediate, specific feedback
							rather than accepting "close enough" - ensuring professional-quality results.
						</p>
						<div class="bg-gray-50 p-6 border border-default">
							<pre class="font-mono text-sm whitespace-pre-wrap">{d(`
								Go back the instructions and attempt to follow them closely.

								add an order int to the cards struct, and sort by that, descending. 
								Oldest = lower number, latest (or on top) Newer number. The cards are 
								filtered by the tag selection and sorted by the order number with the 
								highest number on top.

								Masonry-style layout, grid-template-columns: repeat(3, 1fr);

								You are missing the borders as described, the padding. I need you to 
								follow the instructions to the letter. Try again

								for divider use .divider (daisy). for the pill decide between badge and 
								button (daisy) but keep it rounded. border must contain the border class 
								to work; "border border-default" for example.
							`)}</pre>
						</div>
					</section>

					<section>
						<h3 class="mb-4 font-bold text-small-600">Component Architecture</h3>
						<p class="mb-4 text-small">
							Moving from monolithic implementation to modular components improves maintainability
							and demonstrates understanding of scalable frontend patterns.
						</p>
						<div class="bg-gray-50 p-6 border border-default">
							<pre class="font-mono text-sm whitespace-pre-wrap">{d(`
								Separate components; header, projects, project-card, footer, footer-social. 
								Also put the data in data.ts
							`)}</pre>
						</div>
					</section>

					<section>
						<h3 class="mb-4 font-bold text-small-600">Measurement Corrections</h3>
						<p class="mb-4 text-small">
							This shows how I corrected initial measurement mistakes with precise specifications
							for each component.
						</p>
						<div class="bg-gray-50 p-6 border border-default">
							<pre class="font-mono text-sm whitespace-pre-wrap">{d(`
								I made mistakes with the measurements. Start again.

								Page: padding 60px left right. padding top: 40px.
								Header: Padding: 25px top bottom.
								Hero section: 40px padding top, down.
								Projects nav: 60px - padding top and down.
								Card: 40px padding.
								Footer: 60px padding, background black and text white (text-inverse).

								Use the provided css variables whenever possible. Borders don't have 
								rounding, the pill being an exception (use rounding).

								The maximum width is 1680px, which means that the page would be centered 
								with flex. Also note the minimum width of 320px.
							`)}</pre>
						</div>
					</section>

					<section>
						<h3 class="mb-4 font-bold text-small-600">Technical Problem Solving</h3>
						<p class="mb-4 text-small">
							When complex CSS solutions create edge cases, I pivot to simpler, more maintainable
							approaches rather than over-engineering fixes.
						</p>
						<div class="bg-gray-50 p-6 border border-default">
							<pre class="font-mono text-sm whitespace-pre-wrap">{d(`
								the bottom border is missing in some of the cards

								use the tailwind breakpoints. find a different way to draw a border 
								around each card, something more simple and straightforward

								"Override DaisyUI button styles to maintain monochrome design" isn't 
								that something that gets included in daisy theme in the css? I am using daisy v5.

								The last card is alone in its own row, being the first, the other two 
								cells are empty. The right border of the card is missing. Give each card 
								its own border and let's stop hacking around. Let's see what that looks like.
							`)}</pre>
						</div>
					</section>

					<section>
						<h3 class="mb-4 font-bold text-small-600">Responsive Design Implementation</h3>
						<p class="mb-4 text-small">
							This demonstrates systematic approach to mobile-first responsive design using proper
							Tailwind breakpoints.
						</p>
						<div class="bg-gray-50 p-6 border border-default">
							<pre class="font-mono text-sm whitespace-pre-wrap">{d(`
								the padding is not responsive - cannot have a padding of 80px 
								(see Project.svelte). I provided the desktop version. You must come up 
								with the other versions by adjusting the sizes. sm: , md:, lg: , xl: 
								py-[80px]. Not sure why we are using "padding: 80px 0;" instead of tailwind. 
								We are using tailwind v4! Holistic analysis: fix ALL content with 
								appropriate mobile-first breakpoints, as needed.

								Same padding. Use tailwind breakpoints please, and reduce the padding 
								for each breakpoint. I am only giving you the desktop part, you must 
								"imagine" that smaller padding, etc. are needed for smaller resolutions. 
								Holistic analysis: fix the whole app.

								let's use @plugin "@michaelallenwarner/tailwind-grid-inner"; in app.css
							`)}</pre>
						</div>
					</section>

					<section>
						<h3 class="mb-4 font-bold text-small-600">Content Strategy</h3>
						<p class="mb-4 text-small">
							Final content organization and feature-focused messaging for better user
							understanding.
						</p>
						<div class="bg-gray-50 p-6 border border-default">
							<pre class="font-mono text-sm whitespace-pre-wrap">{d(`
								in data.ts: reorganize projects from first to last:
								- Cincinnati Zombie Walk (featured)  
								- Quorum: Music Series (featured)
								- Portfolio Website (featured)
								- What's the rush (featured)
								- JSON Visualizer (featured)
								- Lunar Lander (featured)
								- Photosnap Multi-Page Website (experiments)

								Instead of "Tech Stack: " use "Features: ". In zombie walk include 
								community leadership and whatever else comes to mind to put together 
								such as series of events.

								In Quorum similar but towards putting together music events with live 
								concerts and DJs.
							`)}</pre>
						</div>
					</section>

					<section>
						<h3 class="mb-4 font-bold text-small-600">Documentation Process</h3>
						<p class="mb-4 text-small">
							Format the conversation so far for proper flow, we'll use this as the content for the
							portfolio project, to explain how the website was built.
						</p>
					</section>
				</div>

				<!-- Results -->
				<div class="mt-12 pt-8 border-default border-t">
					<h3 class="mb-4 heading-h4">Results & Methodology</h3>
					<div class="gap-6 grid md:grid-cols-2 text-small">
						<div>
							<h4 class="mb-2 text-small-600">Delivered:</h4>
							<ul class="space-y-1">
								<li>Complete, responsive portfolio website</li>
								<li>Modular SvelteKit components with TypeScript</li>
								<li>Production-ready code with proper responsive design</li>
								<li>Accessible, magazine-style aesthetic</li>
							</ul>
						</div>
						<div>
							<h4 class="mb-2 text-small-600">AI Collaboration Principles:</h4>
							<ul class="space-y-1">
								<li>Clear technical specification prevents drift</li>
								<li>Iterative refinement ensures quality outcomes</li>
								<li>Strategic problem-solving over quick fixes</li>
								<li>Professional standards throughout development</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="bg-gray-50 mt-8 p-6 border border-default">
					<p class="text-small">
						<strong>Key insight:</strong> This approach demonstrates how AI collaboration amplifies human
						expertise rather than replacing it - requiring strong technical leadership, clear communication,
						and systematic problem-solving to achieve professional results with modern development efficiency.
					</p>
				</div>
			</div>
		</Project>

		<Footer />
	</div>
</div>
