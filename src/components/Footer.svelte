<script lang="ts">
	import FooterSocial from './FooterSocial.svelte';
</script>

<!-- Footer -->
<footer
	class="text-inverse"
	style="background-color: var(--background--primary); margin: 0 -60px -40px -60px; padding: 60px;"
>
	<!-- Main Footer Grid - 3 cells, second section spans 2 -->
	<div class="gap-8 grid grid-cols-3">
		<!-- First section: Name -->
		<div>
			<h3 class="text-inverse heading-h5">ILAN KAIM</h3>
		</div>

		<!-- Second section: Categories (spans 2 columns) -->
		<div class="col-span-2" style="padding: 40px 0;">
			<div class="gap-4 grid grid-cols-3">
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
