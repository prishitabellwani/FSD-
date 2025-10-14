// Indian government and NGO resource service
import { api } from '../lib/api';

export class IndianResourceService {
  private static instance: IndianResourceService;

  public static getInstance(): IndianResourceService {
    if (!IndianResourceService.instance) {
      IndianResourceService.instance = new IndianResourceService();
    }
    return IndianResourceService.instance;
  }

  // Sample resources data
  private sampleResources = [
    // Employment Resources (6+ resources)
    {
      _id: '1',
      title: "National Career Service (NCS)",
      description: "Government portal for job seekers with job matching, career counseling, and skill development programs",
      eligibility: "All Indian citizens",
      link: "https://www.ncs.gov.in",
      category: "employment",
      source: "Government",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400"
    },
    {
      _id: '2',
      title: "Skill India Portal",
      description: "PMKVY training programs and skill development courses for better employment opportunities",
      eligibility: "Youth and unemployed individuals",
      link: "https://skillindia.gov.in/",
      category: "employment",
      source: "Government",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
    },
    {
      _id: '3',
      title: "Ministry of Labour & Employment",
      description: "Central government portal for labor laws, employment schemes, and worker rights",
      eligibility: "All workers and job seekers",
      link: "https://labour.gov.in/",
      category: "employment",
      source: "Government",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400"
    },
    {
      _id: '4',
      title: "Mudra Yojana",
      description: "Government scheme providing loans up to ₹10 lakh for small businesses and entrepreneurs",
      eligibility: "Indian citizens above 18 years",
      link: "https://www.mudra.org.in/",
      category: "employment",
      source: "Government",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400"
    },
    {
      _id: '5',
      title: "Stand Up India",
      description: "Scheme to promote entrepreneurship among SC/ST and women by providing bank loans",
      eligibility: "SC/ST and women entrepreneurs",
      link: "https://www.standupmitra.in/",
      category: "employment",
      source: "Government",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400"
    },
    {
      _id: '6',
      title: "National Apprenticeship Training Scheme",
      description: "Provides practical training and stipend to fresh graduates and diploma holders",
      eligibility: "Fresh graduates and diploma holders",
      link: "https://www.apprenticeshipindia.gov.in/",
      category: "employment",
      source: "Government",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400"
    },
    {
      _id: '7',
      title: "LinkedIn India",
      description: "Professional networking platform to find jobs, connect with employers, and build career",
      eligibility: "All professionals",
      link: "https://www.linkedin.com/in/",
      category: "employment",
      source: "Private",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400"
    },
    {
      _id: '8',
      title: "Naukri.com",
      description: "India's largest job portal with millions of job listings across all sectors",
      eligibility: "All job seekers",
      link: "https://www.naukri.com/",
      category: "employment",
      source: "Private",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=400"
    },

    // Housing Resources (6+ resources)
    {
      _id: '9',
      title: "Pradhan Mantri Awas Yojana (PMAY)",
      description: "Affordable housing scheme for urban and rural poor including single parents",
      eligibility: "Economically weaker sections",
      link: "https://pmaymis.gov.in",
      category: "housing",
      source: "Government",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400"
    },
    {
      _id: '10',
      title: "Indira Awas Yojana",
      description: "Rural housing scheme providing financial assistance for construction of houses",
      eligibility: "Rural poor families",
      link: "https://rural.nic.in/schemes/improved-housing-indira-awas-yojana",
      category: "housing",
      source: "Government",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400"
    },
    {
      _id: '11',
      title: "Credit Linked Subsidy Scheme (CLSS)",
      description: "Interest subsidy on home loans for economically weaker sections",
      eligibility: "EWS and LIG categories",
      link: "https://pmaymis.gov.in/",
      category: "housing",
      source: "Government",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
    },
    {
      _id: '12',
      title: "Rajiv Awas Yojana",
      description: "Urban housing scheme for slum dwellers and urban poor",
      eligibility: "Urban poor and slum dwellers",
      link: "https://mhupa.gov.in/",
      category: "housing",
      source: "Government",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"
    },
    {
      _id: '13',
      title: "Housing Development Finance Corporation (HDFC)",
      description: "Leading housing finance company providing home loans and housing solutions",
      eligibility: "Salaried and self-employed individuals",
      link: "https://www.hdfc.com/",
      category: "housing",
      source: "Private",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400"
    },
    {
      _id: '14',
      title: "State Bank of India Home Loans",
      description: "Competitive home loan rates and flexible repayment options",
      eligibility: "Indian citizens with stable income",
      link: "https://www.sbi.co.in/web/personal-banking/loans/home-loans",
      category: "housing",
      source: "Bank",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
    },
    {
      _id: '15',
      title: "NoBroker.com",
      description: "Online platform for rental and sale of properties across Indian cities",
      eligibility: "All property seekers",
      link: "https://www.nobroker.in/",
      category: "housing",
      source: "Private",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
    },
    {
      _id: '16',
      title: "99acres.com",
      description: "Real estate portal for buying, selling, and renting properties",
      eligibility: "All property seekers",
      link: "https://www.99acres.com/",
      category: "housing",
      source: "Private",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400"
    },

    // Legal Resources (6+ resources)
    {
      _id: '17',
      title: "National Legal Services Authority (NALSA)",
      description: "Free legal aid and services for women and marginalized communities",
      eligibility: "Women, SC/ST, economically weaker sections",
      link: "https://nalsa.gov.in/",
      category: "legal",
      source: "Government",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      _id: '18',
      title: "Legal Aid Services",
      description: "Free legal consultation for single parents and vulnerable groups",
      eligibility: "Must be a single parent or vulnerable group",
      link: "https://legalaid.gov.in",
      category: "legal",
      source: "Government",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400"
    },
    {
      _id: '19',
      title: "Supreme Court of India",
      description: "Official website with case laws, judgments, and legal information",
      eligibility: "Open to all",
      link: "https://www.sci.gov.in/",
      category: "legal",
      source: "Government",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400"
    },
    {
      _id: '20',
      title: "Ministry of Law & Justice",
      description: "Government portal for legal reforms, acts, and justice system",
      eligibility: "Open to all",
      link: "https://lawmin.gov.in/",
      category: "legal",
      source: "Government",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400"
    },
    {
      _id: '21',
      title: "Women & Child Development Ministry",
      description: "Legal protection and welfare schemes for women and children",
      eligibility: "Women and children",
      link: "https://wcd.nic.in/",
      category: "legal",
      source: "Government",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400"
    },
    {
      _id: '22',
      title: "Domestic Violence Act Information",
      description: "Information and support for victims of domestic violence",
      eligibility: "Victims of domestic violence",
      link: "https://wcd.nic.in/act/protection-women-domestic-violence-act-2005",
      category: "legal",
      source: "Government",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    },
    {
      _id: '23',
      title: "Lawyers Collective",
      description: "NGO providing free legal aid and advocacy for women's rights",
      eligibility: "Women and marginalized groups",
      link: "https://www.lawyerscollective.org/",
      category: "legal",
      source: "NGO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      _id: '24',
      title: "Legal Services India",
      description: "Online legal consultation and document preparation services",
      eligibility: "All citizens",
      link: "https://www.legalservicesindia.com/",
      category: "legal",
      source: "Private",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400"
    },

    // Childcare Resources (6+ resources)
    {
      _id: '25',
      title: "Integrated Child Development Services (ICDS)",
      description: "Government scheme providing food, preschool education, and health services",
      eligibility: "Children 0-6 years and pregnant/lactating mothers",
      link: "https://wcd.nic.in/schemes/integrated-child-development-services-icds",
      category: "childcare",
      source: "Government",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400"
    },
    {
      _id: '26',
      title: "Anganwadi Services",
      description: "Community-based childcare centers providing nutrition and early education",
      eligibility: "Children 0-6 years",
      link: "https://wcd.nic.in/schemes/integrated-child-development-services-icds",
      category: "childcare",
      source: "Government",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400"
    },
    {
      _id: '27',
      title: "Mid-Day Meal Scheme",
      description: "Nutritious meals provided to school children to improve nutrition and enrollment",
      eligibility: "School children",
      link: "https://mdm.nic.in/",
      category: "childcare",
      source: "Government",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400"
    },
    {
      _id: '28',
      title: "Sarva Shiksha Abhiyan",
      description: "Universal education program ensuring free education for all children",
      eligibility: "Children 6-14 years",
      link: "https://www.education.gov.in/en/ssa",
      category: "childcare",
      source: "Government",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400"
    },
    {
      _id: '29',
      title: "Beti Bachao Beti Padhao",
      description: "Scheme to promote girl child education and welfare",
      eligibility: "Girl children and families",
      link: "https://wcd.nic.in/schemes/beti-bachao-beti-padhao",
      category: "childcare",
      source: "Government",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400"
    },
    {
      _id: '30',
      title: "Child Protection Services",
      description: "Government initiatives for child protection and welfare",
      eligibility: "Children in need of care and protection",
      link: "https://wcd.nic.in/child-protection",
      category: "childcare",
      source: "Government",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400"
    },
    {
      _id: '31',
      title: "CRY (Child Rights and You)",
      description: "NGO working for child rights and welfare across India",
      eligibility: "Children and families",
      link: "https://www.cry.org/",
      category: "childcare",
      source: "NGO",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400"
    },
    {
      _id: '32',
      title: "Save the Children India",
      description: "International NGO working for children's rights and development",
      eligibility: "Children and families",
      link: "https://www.savethechildren.in/",
      category: "childcare",
      source: "NGO",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400"
    }
  ];

  // Get resources by category
  async getResourcesByCategory(category: string) {
    try {
      // Try API first
      return await api(`/api/resources/category/${category}`);
    } catch (error) {
      console.error('Error fetching resources by category:', error);
      // Fallback to static data
      return this.sampleResources.filter(resource => resource.category === category);
    }
  }

  // Get all resources
  async getAllResources() {
    try {
      const response = await api('/api/resources');
      return response.items || response;
    } catch (error) {
      console.error('Error fetching all resources:', error);
      return this.sampleResources;
    }
  }

  // Search resources - simplified, can be enhanced later
  async searchResources(query: string) {
    const all = await this.getAllResources();
    const searchTerm = query.toLowerCase();
    return all.filter((resource: any) =>
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm) ||
      resource.category.toLowerCase().includes(searchTerm)
    );
  }

  // Get featured resources
  async getFeaturedResources() {
    const all = await this.getAllResources();
    return all.slice(0, 8);
  }

  // Get resource categories
  getCategories() {
    return ['employment', 'housing', 'legal', 'childcare'];
  }
}
