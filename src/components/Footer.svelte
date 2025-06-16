<script lang="ts">
	import FooterSocial from './FooterSocial.svelte';
</script>

<!-- Footer with Mobile-First Responsive Padding -->
<footer
	class="bg-black -mx-5 sm:-mx-7 md:-mx-8 lg:-mx-15 xl:-mx-15 px-5 sm:px-7 md:px-8 lg:px-15 xl:px-15 py-12 sm:py-15 lg:py-15 text-inverse"
>
	<!-- Main Footer Grid - Mobile First: 1 col, lg: 3 cols -->
	<div class="gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-3">
		<!-- First section: Name -->
		<div>
			<h3 class="text-inverse heading-h5">ILAN KAIM</h3>
		</div>

		<!-- Second section: Categories - Mobile First: py-6, md: py-8, lg: py-10 (40px spec) -->
		<div class="lg:col-span-2 py-6 md:py-8 lg:py-10">
			<div class="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				<div>
					<h4 class="mb-2 text-inverse text-small-600">Frontend</h4>
					<ul class="space-y-1 text-inverse text-small">
						<li>React</li>
						<li>TypeScript</li>
						<li>Vue.js</li>
					</ul>
				</div>
				<div>
					<h4 class="mb-2 text-inverse text-small-600">Backend</h4>
					<ul class="space-y-1 text-inverse text-small">
						<li>Node.js</li>
						<li>Python</li>
						<li>PostgreSQL</li>
					</ul>
				</div>
				<div>
					<h4 class="mb-2 text-inverse text-small-600">Tools</h4>
					<ul class="space-y-1 text-inverse text-small">
						<li>Git</li>
						<li>Docker</li>
						<li>Figma</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<FooterSocial />
</footer>
