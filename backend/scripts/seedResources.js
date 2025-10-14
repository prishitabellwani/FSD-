import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Resource from '../src/models/Resource.js';

dotenv.config();

const sampleResources = [
  // Employment Resources
  {
    category: 'employment',
    title: 'CareerOneStop - Job Search',
    description: 'Official U.S. Department of Labor job search portal with tools for single parents',
    link: 'https://www.careeronestop.org/JobSearch/job-search.aspx',
    source: 'U.S. Department of Labor',
    eligibility: 'All job seekers',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400'
  },
  {
    category: 'employment',
    title: 'SNAP Employment & Training',
    description: 'Employment and training services for SNAP recipients, including single parents',
    link: 'https://www.fns.usda.gov/snap/employment-and-training',
    source: 'USDA Food & Nutrition Service',
    eligibility: 'SNAP recipients',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400'
  },
  {
    category: 'employment',
    title: 'American Job Centers',
    description: 'Local centers providing job training, placement services, and career counseling',
    link: 'https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx',
    source: 'U.S. Department of Labor',
    eligibility: 'All residents',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400'
  },
  {
    category: 'employment',
    title: 'Workforce Innovation and Opportunity Act (WIOA)',
    description: 'Federal program providing job training and employment services',
    link: 'https://www.dol.gov/agencies/eta/wioa',
    source: 'U.S. Department of Labor',
    eligibility: 'Adults, dislocated workers, youth',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    category: 'employment',
    title: 'European Employment Services (EURES)',
    description: 'Job mobility portal for the European Economic Area',
    link: 'https://ec.europa.eu/eures/public/en/homepage',
    source: 'European Commission',
    eligibility: 'EEA citizens',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400'
  },
  {
    category: 'employment',
    title: 'Job Bank Canada',
    description: 'Government of Canada job search and career planning',
    link: 'https://www.jobbank.gc.ca/',
    source: 'Government of Canada',
    eligibility: 'Canadian residents',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  },

  // Housing Resources
  {
    category: 'housing',
    title: 'HUD Housing Choice Vouchers (Section 8)',
    description: 'Federal program helping very low-income families afford safe housing',
    link: 'https://www.hud.gov/topics/housing_choice_voucher_program_section_8',
    source: 'U.S. Department of Housing and Urban Development',
    eligibility: 'Very low-income families',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400'
  },
  {
    category: 'housing',
    title: 'HUD Public Housing Program',
    description: 'Affordable rental housing for low-income families, elderly, and persons with disabilities',
    link: 'https://www.hud.gov/topics/public_housing',
    source: 'U.S. Department of Housing and Urban Development',
    eligibility: 'Low-income families',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400'
  },
  {
    category: 'housing',
    title: 'Emergency Rental Assistance',
    description: 'Help with rent and utilities for households affected by COVID-19',
    link: 'https://www.consumerfinance.gov/coronavirus/mortgage-and-housing-assistance/renter-assistance/',
    source: 'Consumer Financial Protection Bureau',
    eligibility: 'Varies by state',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
  },
  {
    category: 'housing',
    title: 'USDA Rural Development Housing',
    description: 'Affordable housing programs for rural areas including rental assistance',
    link: 'https://www.rd.usda.gov/programs-services/single-family-housing-programs',
    source: 'U.S. Department of Agriculture',
    eligibility: 'Rural residents',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400'
  },
  {
    category: 'housing',
    title: 'Shelter NSW',
    description: 'Housing and homelessness services in New South Wales, Australia',
    link: 'https://shelternsw.org.au/',
    source: 'Shelter NSW',
    eligibility: 'Residents of NSW',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400'
  },
  {
    category: 'housing',
    title: 'Shelter UK',
    description: 'Charity providing advice and support for housing issues in the UK',
    link: 'https://england.shelter.org.uk/',
    source: 'Shelter UK',
    eligibility: 'UK residents',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400'
  },

  // Legal Resources
  {
    category: 'legal',
    title: 'Legal Services Corporation',
    description: 'Free legal help for low-income Americans including family law matters',
    link: 'https://www.lsc.gov/what-legal-aid/find-legal-aid',
    source: 'Legal Services Corporation',
    eligibility: 'Low-income individuals',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400'
  },
  {
    category: 'legal',
    title: 'Child Support Enforcement',
    description: 'State services to help establish and collect child support payments',
    link: 'https://www.acf.hhs.gov/css/resource/state-and-tribal-child-support-agencies',
    source: 'U.S. Department of Health & Human Services',
    eligibility: 'Parents with custody',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    category: 'legal',
    title: 'National Domestic Violence Hotline',
    description: 'Legal resources and support for domestic violence situations',
    link: 'https://www.thehotline.org/resources/',
    source: 'National Domestic Violence Hotline',
    eligibility: 'Anyone experiencing domestic violence',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400'
  },
  {
    category: 'legal',
    title: 'American Bar Association - Family Law',
    description: 'Resources and referrals for family law matters including custody and divorce',
    link: 'https://www.americanbar.org/groups/family_law/resources/',
    source: 'American Bar Association',
    eligibility: 'General public',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400'
  },
  {
    category: 'legal',
    title: 'European Court of Human Rights',
    description: 'Legal resources and case law for human rights in Europe',
    link: 'https://www.echr.coe.int/Pages/home.aspx?p=home',
    source: 'Council of Europe',
    eligibility: 'European residents',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400'
  },

  // Childcare Resources
  {
    category: 'childcare',
    title: 'Child Care and Development Fund',
    description: 'Federal program helping low-income families pay for childcare',
    link: 'https://www.acf.hhs.gov/occ/resource/ccdf-eligibility-rules',
    source: 'U.S. Department of Health & Human Services',
    eligibility: 'Low-income working families',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400'
  },
  {
    category: 'childcare',
    title: 'Head Start Programs',
    description: 'Comprehensive early childhood education, health, nutrition, and parent involvement services',
    link: 'https://eclkc.ohs.acf.hhs.gov/center-locator',
    source: 'U.S. Department of Health & Human Services',
    eligibility: 'Low-income families with children ages 3-5',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400'
  },
  {
    category: 'childcare',
    title: 'Child Care Aware of America',
    description: 'National organization helping families find quality childcare and financial assistance',
    link: 'https://childcareaware.org/resources/',
    source: 'Child Care Aware of America',
    eligibility: 'All families',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400'
  },
  {
    category: 'childcare',
    title: 'State Childcare Assistance',
    description: 'State-specific childcare subsidy programs and provider search tools',
    link: 'https://childcare.gov/connect-with-your-state',
    source: 'Childcare.gov',
    eligibility: 'Varies by state',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400'
  },
  {
    category: 'childcare',
    title: 'UNICEF Early Childhood Development',
    description: 'Global programs supporting early childhood development and care',
    link: 'https://www.unicef.org/early-childhood-development',
    source: 'UNICEF',
    eligibility: 'Global',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400'
  }
];

const seedDatabase = async () => {
  try {
    console.log('🌱 Seeding database with sample resources...');

    // Clear existing resources
    await Resource.deleteMany({});
    console.log('🗑️  Cleared existing resources');

    // Insert sample resources
    const insertedResources = await Resource.insertMany(sampleResources);
    console.log(`✅ Successfully seeded ${insertedResources.length} resources`);

    // Log the count by category
    const categories = ['employment', 'housing', 'legal', 'childcare'];
    for (const category of categories) {
      const count = await Resource.countDocuments({ category });
      console.log(`📊 ${category}: ${count} resources`);
    }

    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Connect to MongoDB and seed
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  return seedDatabase();
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
  process.exit(1);
});
