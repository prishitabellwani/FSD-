export interface Activity {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  icon: string;
  content: string[];
  interactive: boolean;
  instructions: string[];
  materials: string[];
  duration: string;
}

export const activities: Activity[] = [
  {
    id: 'creative-coloring',
    title: 'Creative Coloring Pages',
    ageRange: '3-10 years',
    description: 'Printable coloring pages featuring diverse characters and family structures.',
    icon: '🎨',
    interactive: true,
    duration: '15-30 min',
    materials: ['Crayons or colored pencils', 'Printer paper', 'Coloring pages'],
    instructions: [
      'Choose a coloring page from the selection',
      'Print the page on standard paper',
      'Use crayons, colored pencils, or markers to color',
      'Display your artwork proudly!'
    ],
    content: [
      'Welcome to our creative coloring collection! Here you\'ll find beautiful coloring pages that celebrate all kinds of families.',
      'Each page tells a story - from single-parent families to blended families, from grandparents raising kids to two-mom or two-dad families.',
      'Coloring is not just fun - it helps children express emotions, develop fine motor skills, and learn about diversity.',
      'Take your time, be creative, and remember - there\'s no wrong way to color!'
    ]
  },
  {
    id: 'educational-games',
    title: 'Educational Games',
    ageRange: '5-12 years',
    description: 'Fun interactive games that develop cognitive skills while teaching important values.',
    icon: '🧩',
    interactive: true,
    duration: '10-20 min',
    materials: ['Computer or tablet', 'Internet connection', 'Headphones (optional)'],
    instructions: [
      'Click on the game you want to play',
      'Read the instructions carefully',
      'Start with easier levels and progress',
      'Have fun learning!'
    ],
    content: [
      'Our educational games are designed to be both fun and meaningful. Each game teaches important life skills while keeping children engaged.',
      'From emotion recognition games to problem-solving challenges, these activities help develop critical thinking and emotional intelligence.',
      'Games adapt to different age levels and provide positive reinforcement to build confidence.',
      'Parents can play along or let children explore independently!'
    ]
  },
  {
    id: 'animated-stories',
    title: 'Animated Stories',
    ageRange: '3-8 years',
    description: 'Short animated videos that entertain while teaching emotional intelligence.',
    icon: '📺',
    interactive: true,
    duration: '5-10 min',
    materials: ['Computer or tablet', 'Internet connection', 'Quiet space'],
    instructions: [
      'Choose a story from our collection',
      'Click play to start the animation',
      'Watch together and discuss the story',
      'Apply the lessons to real life!'
    ],
    content: [
      'Our animated stories bring important lessons to life through colorful characters and engaging narratives.',
      'Each story addresses common challenges children face - from making friends to dealing with change.',
      'Stories are designed to prompt discussion and help children understand their feelings.',
      'Watch together as a family and talk about what you learned!'
    ]
  },
  {
    id: 'diy-craft-projects',
    title: 'DIY Craft Projects',
    ageRange: '4-12 years',
    description: 'Simple craft projects that parents and children can create together using household items.',
    icon: '✂️',
    interactive: true,
    duration: '20-45 min',
    materials: ['Household items', 'Basic craft supplies', 'Imagination'],
    instructions: [
      'Choose a project from our collection',
      'Gather the required materials',
      'Follow the step-by-step instructions',
      'Display your creation proudly!'
    ],
    content: [
      'Our DIY projects are designed to be simple, fun, and educational. Each project uses common household items so you can create without special supplies.',
      'From paper plate animals to cardboard castles, these crafts encourage creativity and family bonding.',
      'Projects teach recycling, problem-solving, and artistic expression.',
      'Take photos of your creations and share them with us!'
    ]
  }
];
