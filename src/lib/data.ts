export interface Project {
	id: string;
	title: string;
	description: string;
	techStack: string[];
	tags: string[];
	order: number;
	image: string;
	link?: string;
	github?: string;
}

export const projects: Project[] = [
	{
		id: 'whatstherush',
		title: "What's The Rush?",
		description:
			'An advocacy project for a slower, more humane future. A cultural critique challenging the myth that faster is always better.',
		techStack: ['Next.js', 'Tailwind', 'TypeScript', 'Lenis'],
		tags: ['featured'],
		order: 10,
		image: '/placeholder-whatstherush.jpg',
		link: 'https://whatstherush.tech',
		github: 'https://github.com/iknowmagic/whatstherush'
	},
	{
		id: 'json-visualizer',
		title: 'JSON Visualizer',
		description:
			'Interactive tool for exploring complex JSON data structures through tree and graph representations.',
		techStack: ['React', 'TypeScript', 'D3.js', 'Zustand'],
		tags: ['featured'],
		order: 9,
		image: '/placeholder-json.jpg',
		github: 'https://github.com/iknowmagic/json-visualizer'
	},
	{
		id: 'lunar-lander',
		title: 'DQN Lunar Lander',
		description:
			'Deep Q-Network agent trained to perform lunar landings using reinforcement learning and PyTorch.',
		techStack: ['Python', 'PyTorch', 'OpenAI Gym'],
		tags: ['featured'],
		order: 8,
		image: '/placeholder-lander.jpg',
		github: 'https://github.com/iknowmagic/dqn_lunar_lander'
	},
	{
		id: 'photosnap',
		title: 'Photosnap Multi-Page Website',
		description:
			'Visually appealing marketing site for photo-sharing app with responsive design and component architecture.',
		techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
		tags: ['featured'],
		order: 7,
		image: '/placeholder-photosnap.jpg',
		link: 'https://photosnap-react-website.vercel.app',
		github: 'https://github.com/iknowmagic/photosnap-multi-page-website'
	},
	{
		id: 'zombie-walk',
		title: 'Cincinnati Zombie Walk',
		description:
			'Led city-wide food drive through themed gatherings. Grew from 300 to 3,000+ participants, managed media outreach.',
		techStack: [],
		tags: ['art'],
		order: 6,
		image: '/placeholder-zombie.jpg',
		link: 'https://youtu.be/05wbf7HdjQY'
	},
	{
		id: 'quorum-music',
		title: 'Quorum Industrial Music Series',
		description:
			'Organized concert series showcasing national alternative acts. Managed booking, venues, and community engagement.',
		techStack: [],
		tags: ['art'],
		order: 5,
		image: '/placeholder-music.jpg',
		link: 'https://www.citybeat.com/news/cincinnati-reindustrialization-plan-dance–12164960'
	}
];

export const filters = ['ALL', 'FEATURED', 'ART'];
