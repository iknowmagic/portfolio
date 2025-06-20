export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  order: number;
  image: string;
  links: {
    live?: string; // Live demo/website
    github?: string; // Source code repository
    video?: string; // Demo/walkthrough videos
    article?: string; // Blog posts/case studies
  };
}

export const projects: Project[] = [
  {
    id: 'zombie-walk',
    title: 'Cincinnati Zombie Walk',
    description:
      'Created and promoted event to lead city-wide food drive through themed gatherings. Grew from 300 to 3,000+ participants, managed media outreach.',
    features: [
      'Community Leadership',
      'Event Organization',
      'Media Outreach',
      'Nonprofit Partnerships',
      'Permit Coordination',
      'Social Media Marketing'
    ],
    tags: ['featured'],
    order: 11,
    image: '/zombie-walk.png',
    links: {
      video: 'https://youtu.be/05wbf7HdjQY'
    }
  },
  {
    id: 'quorum-music',
    title: 'Quorum: Music Series',
    description:
      'Created and managed concert series showcasing national alternative acts. Managed booking, venues, and community engagement.',
    features: [
      'Event Curation',
      'Artist Booking',
      'Venue Coordination',
      'Community Engagement',
      'Live Concert Production',
      'DJ Programming',
      'Local Promotion'
    ],
    tags: ['featured'],
    order: 10,
    image: '/quorum.png',
    links: {
      article: 'https://www.citybeat.com/news/cincinnati-reindustrialization-plan-dance--12164960'
    }
  },
  {
    id: 'whatstherush',
    title: "What's The Rush?",
    description:
      'An advocacy project for a slower, more humane future. A cultural critique challenging the myth that faster is always better.',
    features: [
      'Next.js',
      'Tailwind',
      'TypeScript',
      'Lenis Smooth Scrolling',
      'Schema Markup',
      'Randomized Poetic UI'
    ],
    tags: ['featured'],
    order: 8,
    image: '/planet.png',
    links: {
      live: 'https://whatstherush.tech',
      github: 'https://github.com/iknowmagic/whatstherush'
    }
  },
  {
    id: 'json-visualizer',
    title: 'JSON Visualizer',
    description:
      'Interactive tool for exploring complex JSON data structures through tree and graph representations.',
    features: [
      'React',
      'TypeScript',
      'D3.js',
      'Zustand',
      'Dynamic Parsing',
      'Hover Highlighting',
      'Recursive Components'
    ],
    tags: ['featured'],
    order: 7,
    image: '/graph.png',
    links: {
      live: 'https://json-visualizer-sooty.vercel.app',
      github: 'https://github.com/iknowmagic/json-visualizer'
    }
  },
  {
    id: 'lunar-lander',
    title: 'DQN Lunar Lander',
    description:
      'Deep Q-Network agent trained to perform lunar landings using reinforcement learning and PyTorch.',
    features: [
      'Python',
      'PyTorch',
      'OpenAI Gym',
      'Deep Q-Network',
      'Reinforcement Learning',
      'Performance Visualization'
    ],
    tags: ['featured'],
    order: 6,
    image: '/lander.gif',
    links: {
      github: 'https://github.com/iknowmagic/dqn_lunar_lander'
    }
  },
  {
    id: 'photosnap',
    title: 'Photosnap Multi-Page Website',
    description:
      'Visually appealing marketing site for photo-sharing app with responsive design and component architecture.',
    features: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'React Router',
      'Lazy Loading',
      'State Management'
    ],
    tags: ['experiments'],
    order: 5,
    image: '/photosnap.png',
    links: {
      github: 'https://github.com/iknowmagic/photosnap-multi-page-website'
    }
  },
  {
    id: 'clock-app',
    title: 'Location-Based Clock App',
    description:
      'Modern clock application with dynamic greetings, location detection, and day/night theming based on user timezone.',
    features: [
      'React',
      'TypeScript',
      'IP Geolocation',
      'Dynamic Theming',
      'Responsive Design',
      'Time Zone API'
    ],
    tags: ['experiments'],
    order: 4,
    image: '/clock.jpg',
    links: {
      live: 'http://clock-app-eta.vercel.app/',
      github: 'https://github.com/iknowmagic/clock-app'
    }
  },
  {
    id: 'pomodoro-timer',
    title: 'Pomodoro Timer App',
    description:
      'Customizable Pomodoro timer with theme personalization, auto mode, and circular progress indicator with dynamic favicon updates.',
    features: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Zustand',
      'Dynamic Favicon',
      'Persistent Settings'
    ],
    tags: ['experiments'],
    order: 3,
    image: '/pomodoro.png',
    links: {
      live: 'https://pomodoro-app-three.vercel.app',
      github: 'https://github.com/iknowmagic/pomodoro-timer'
    }
  },
  {
    id: 'myteam-website',
    title: 'MyTeam Multi-Page Website',
    description:
      'Responsive team showcase website with expandable About sections and contact form validation.',
    features: [
      'React 19',
      'TypeScript',
      'TailwindCSS',
      'DaisyUI',
      'React Router',
      'Form Validation',
      'Code Splitting'
    ],
    tags: ['experiments'],
    order: 2,
    image: '/myteam.png',
    links: {
      github: 'https://github.com/iknowmagic/myteam-website'
    }
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors Lizard Spock',
    description:
      'Extended Rock Paper Scissors game with smooth animations, responsive design, and persistent scoring.',
    features: [
      'React',
      'TypeScript',
      'Zustand',
      'CSS Animations',
      'Responsive Design',
      'Game Logic',
      'Score Persistence'
    ],
    tags: ['experiments'],
    order: 1,
    image: '/rock.png',
    links: {
      live: 'https://rock-paper-scissors-ten-flax.vercel.app',
      github: 'https://github.com/iknowmagic/rock-paper-scissors'
    }
  }
];

export const filters = ['ALL', 'FEATURED', 'EXPERIMENTS'];
