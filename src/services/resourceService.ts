// Real government and nonprofit resource APIs
interface ResourceAPI {
  name: string;
  url: string;
  description: string;
  category: string;
  apiEndpoint?: string;
  directLink: string;
}

interface ResourceData {
  title: string;
  description: string;
  link: string;
  category: string;
  source: string;
  eligibility?: string;
  contact?: string;
}

export class ResourceService {
  private static instance: ResourceService;
  
  public static getInstance(): ResourceService {
    if (!ResourceService.instance) {
      ResourceService.instance = new ResourceService();
    }
    return ResourceService.instance;
  }

  // Real government resources
  private realResources: ResourceData[] = [
    {
      title: "Employment Portal",
      description: "Helps single parents find jobs and skill training.",
      eligibility: "Open to all",
      link: "https://employment.gov.in",
      category: "employment",
      source: "Government",
    },
    {
      title: "Legal Aid Services",
      description: "Free legal consultation for single parents.",
      eligibility: "Must be a single parent",
      link: "https://legalaid.gov.in",
      category: "legal",
      source: "Government",
    },
    {
      title: "Housing Assistance",
      description: "Government schemes for affordable housing.",
      eligibility: "Income criteria apply",
      link: "https://housing.gov.in",
      category: "housing",
      source: "Government",
    },
  ];

  // Get resources by category
  getResourcesByCategory(category: string): ResourceData[] {
    return this.realResources.filter(resource => resource.category === category);
  }

  // Get all resources
  getAllResources(): ResourceData[] {
    return this.realResources;
  }

  // Search resources
  searchResources(query: string): ResourceData[] {
    const searchTerm = query.toLowerCase();
    return this.realResources.filter(resource => 
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm) ||
      resource.category.toLowerCase().includes(searchTerm)
    );
  }

  // Get resource categories
  getCategories(): string[] {
    return ['employment', 'housing', 'legal', 'childcare'];
  }

  // Get featured resources
  getFeaturedResources(): ResourceData[] {
    return this.realResources.slice(0, 8);
  }
}
