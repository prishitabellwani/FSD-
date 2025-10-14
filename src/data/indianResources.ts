export interface IndianResource {
  id: string;
  title: string;
  description: string;
  category: 'employment' | 'housing' | 'legal' | 'childcare';
  website: string;
  phone?: string;
  email?: string;
  eligibility: string;
  image: string;
  icon: string;
  state?: string;
  type: 'government' | 'ngo' | 'private';
}

export const indianResources: IndianResource[] = [
  // Employment Resources
  {
    id: 'ncs',
    title: 'National Career Service (NCS)',
    description: 'Government portal for job seekers with job matching, career counseling, and skill development',
    category: 'employment',
    website: 'https://www.ncs.gov.in',
    phone: '1800-425-1514',
    email: 'helpdesk-ncs@gov.in',
    eligibility: 'All Indian citizens',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400',
    icon: '💼',
    type: 'government'
  },
  {
    id: 'skill-india',
    title: 'Skill India Portal',
    description: 'PMKVY training programs and skill development courses for better employment opportunities',
    category: 'employment',
    website: 'https://skillindia.gov.in/',
    phone: '8800005500',
    eligibility: 'Youth and unemployed individuals',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    icon: '🎓',
    type: 'government'
  },
  {
    id: 'employment-exchange',
    title: 'Employment Exchange',
    description: 'State employment exchanges for job registration and placement services',
    category: 'employment',
    website: 'https://www.telangana.gov.in/employment',
    eligibility: 'All job seekers',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    icon: '📝',
    state: 'Telangana',
    type: 'government'
  },
  {
    id: 'job-fair',
    title: 'Employment News',
    description: 'Government job notifications and employment opportunities',
    category: 'employment',
    website: 'https://www.employmentnews.gov.in',
    eligibility: 'All job seekers',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884a78?w=400',
    icon: '🎯',
    type: 'government'
  },
  {
    id: 'apprenticeship',
    title: 'Apprenticeship Program',
    description: 'Government apprenticeship programs for skill development',
    category: 'employment',
    website: 'https://www.apprenticeship.gov.in',
    eligibility: 'Youth and unemployed individuals',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400',
    icon: '🔧',
    type: 'government'
  },
  {
    id: 'startup-india',
    title: 'Startup India',
    description: 'Support for startups and entrepreneurs',
    category: 'employment',
    website: 'https://www.startupindia.gov.in',
    eligibility: 'Entrepreneurs',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400',
    icon: '🚀',
    type: 'government'
  },
  {
    id: 'nird-pradhanmantri-rojgar',
    title: 'NIRD & PR Employment Scheme',
    description: 'Rural employment generation scheme by National Institute of Rural Development',
    category: 'employment',
    website: 'https://nirdpr.org.in',
    eligibility: 'Rural unemployed youth',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
    icon: '🌾',
    type: 'government'
  },
  {
    id: 'mygov-india',
    title: 'MyGov India',
    description: 'Platform for citizens to participate in governance and employment opportunities',
    category: 'employment',
    website: 'https://www.mygov.in',
    eligibility: 'All citizens',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    icon: '🗳️',
    type: 'government'
  },
  {
    id: 'jobskilla',
    title: 'Jobskilla',
    description: 'Online job portal for various sectors with skill development resources',
    category: 'employment',
    website: 'https://jobskilla.com',
    eligibility: 'All job seekers',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
    icon: '💻',
    type: 'private'
  },
  {
    id: 'youth-employment',
    title: 'Youth Employment India',
    description: 'Government initiative for youth employment and entrepreneurship',
    category: 'employment',
    website: 'https://youthemployment.gov.in',
    eligibility: 'Youth aged 18-35',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
    icon: '🧑‍💼',
    type: 'government'
  },
    eligibility: 'BSNL employees',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    icon: '🏢',
    type: 'government'
  },
  {
    id: 'pmay-urban',
    title: 'PMAY Urban',
    description: 'Urban affordable housing scheme under PMAY',
    category: 'housing',
    website: 'https://pmaymis.gov.in/pmayurbenew',
    eligibility: 'Urban poor',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    icon: '🏙️',
    type: 'government'
  },
  {
    id: 'indian-housing-federation',
    title: 'Indian Housing Federation',
    description: 'Federation promoting affordable housing and sustainable urban development',
    category: 'housing',
    website: 'https://indianhousingfederation.org',
    eligibility: 'All citizens',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    icon: '🏢',
    type: 'ngo'
  },
  {
    id: 'housing-development-board',
    title: 'Housing Development Board',
    description: 'Government agency for public housing and urban development',
    category: 'housing',
    website: 'https://hdb.gov.sg',
    eligibility: 'All citizens',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    icon: '🏢',
    type: 'government'
  },

  // Legal Resources
  {
    id: 'nalsa',
    title: 'National Legal Services Authority (NALSA)',
    description: 'Free legal aid and services for women and marginalized communities',
    category: 'legal',
    website: 'https://nalsa.gov.in/',
    phone: '1800-111-444',
    email: 'nalsa-dla@nic.in',
    eligibility: 'Women, SC/ST, economically weaker sections',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    icon: '⚖️',
    type: 'government'
  },
  {
    id: 'family-court',
    title: 'Family Courts India',
    description: 'Specialized courts for family disputes, custody, and maintenance matters',
    category: 'legal',
    website: 'https://districts.ecourts.gov.in',
    eligibility: 'All citizens',
    image: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=400',
    icon: '👨‍⚖️',
    type: 'government'
  },
  {
    id: 'wdcw',
    title: 'Women & Child Welfare Department',
    description: 'Legal support and protection services for women and children',
    category: 'legal',
    website: 'https://wdcw.ap.gov.in',
    phone: '040-23453434',
    eligibility: 'Women and children',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    icon: '👩‍👧',
    state: 'Andhra Pradesh',
    type: 'government'
  },
  {
    id: 'mahila-ayog',
    title: 'National Commission for Women',
    description: 'Legal assistance and complaint redressal for women',
    title: 'National Skill Development Corporation (NSDC)',
    description: 'Public-private partnership for skill development and training',
    category: 'legal',
    website: 'https://ncw.nic.in',
    phone: '011-26942369',
    email: 'complaints-ncw@nic.in',
    eligibility: 'All women',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    icon: '👩',
    type: 'government'
  },
  {
    id: 'legal-aid',
    title: 'Legal Aid Services',
    description: 'Free legal aid and counseling services for marginalized communities',
    category: 'legal',
    website: 'https://legalaid.gov.in',
    eligibility: 'Economically weaker sections',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    icon: '🆓',
    type: 'government'
  },
  {
    id: 'child-rights-commission',
    title: 'Child Rights Commission',
    description: 'Protection and promotion of child rights in India',
    category: 'legal',
    website: 'https://ncpcr.gov.in',
    eligibility: 'Children and families',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    icon: '👶',
    type: 'government'
  },
  {
    id: 'lawyers-collective',
    title: 'Lawyers Collective',
    description: 'NGO providing legal aid and advocacy for human rights',
    category: 'legal',
    website: 'https://lawyerscollective.org',
    eligibility: 'All citizens',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    icon: '⚖️',
    type: 'ngo'
  },
  {
    id: 'legal-services-authority',
    title: 'Legal Services Authority',
    description: 'Government body providing free legal services and awareness',
    category: 'legal',
    website: 'https://nalsa.gov.in',
    eligibility: 'Economically weaker sections',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    icon: '⚖️',
    type: 'government'
  },

  // Childcare Resources
  {
    id: 'icds',
    title: 'Integrated Child Development Services (ICDS)',
    description: 'Government scheme providing food, preschool education, and health services',
    category: 'childcare',
    website: 'https://wcd.nic.in/schemes/integrated-child-development-services-icds',
    eligibility: 'Children 0-6 years and pregnant/lactating mothers',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    icon: '👶',
    type: 'government'
  },
  {
    id: 'anganwadi',
    title: 'Anganwadi Centers',
    description: 'Local childcare centers providing nutrition, health check-ups, and early education',
    category: 'childcare',
    website: 'https://wcd.nic.in',
    eligibility: 'Children 3-6 years',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    icon: '🏫',
    type: 'government'
  },
  {
    id: 'mobile-creche',
    title: 'Mobile Creches',
    description: 'NGO providing childcare services for construction workers and marginalized communities',
    category: 'childcare',
    website: 'https://mobilecreches.org',
    phone: '011-24690624',
    email: 'info@mobilecreches.org',
    eligibility: 'Construction workers and low-income families',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    icon: '🚐',
    type: 'ngo'
  },
  {
    id: 'cry',
    title: 'CRY - Child Rights and You',
    description: 'NGO working for child rights and providing support services',
    category: 'childcare',
    website: 'https://www.cry.org',
    phone: '022-23023647',
    email: 'support@cry.org',
    eligibility: 'Children and families in need',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    icon: '🤝',
    type: 'ngo'
  },
  {
    id: 'kids-corner',
    title: 'Butterflies Child Rights',
    description: 'NGO working for child rights and welfare in India',
    category: 'childcare',
    website: 'https://www.butterfliesindia.org',
    eligibility: 'All children',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    icon: '👶',
    type: 'ngo'
  },
  {
    id: 'child-support',
    title: 'Save the Children India',
    description: 'NGO working for child rights, education, and protection services',
    category: 'childcare',
    website: 'https://www.savethechildren.in',
    eligibility: 'All children',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    icon: '👶',
    type: 'ngo'
  },
  {
    id: 'play-school',
    title: 'Play School India',
    description: 'Private play schools offering early childhood education and care',
    category: 'childcare',
    website: 'https://www.playschoolindia.com',
    eligibility: 'Children 2-6 years',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    icon: '🏫',
    type: 'private'
  },
  {
    id: 'childcare-subsidy',
    title: 'Childcare Subsidy Program',
    description: 'Government subsidy program to support affordable childcare',
    category: 'childcare',
    website: 'https://childcaresubsidy.gov.in',
    eligibility: 'Low-income families',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    icon: '💰',
    type: 'government'
  }
];

export const getResourcesByCategory = (category: string) => {
  return indianResources.filter(resource => resource.category === category);
};

export const getAllResources = () => {
  return indianResources;
};

export const searchResources = (query: string) => {
  const searchTerm = query.toLowerCase();
  return indianResources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm) ||
    resource.description.toLowerCase().includes(searchTerm) ||
    resource.category.toLowerCase().includes(searchTerm) ||
    (resource.state && resource.state.toLowerCase().includes(searchTerm))
  );
};

export const getFeaturedResources = () => {
  return indianResources.slice(0, 8);
};
</create_file>
