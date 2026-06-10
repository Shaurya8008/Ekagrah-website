import type { Program } from '@/types';

export const programs: Program[] = [
  {
    id: 'shiksha-setu',
    slug: 'shiksha-setu',
    title: 'Shiksha Setu (Education Bridge)',
    shortDescription:
      'Bridging educational gaps for underprivileged children through after-school tutoring, mentorship, and scholarship support in rural Varanasi.',
    fullDescription: `Shiksha Setu is our flagship education initiative designed to bridge the widening gap between underprivileged children and quality education in rural Varanasi. We believe that every child deserves access to learning opportunities regardless of their socioeconomic background, and this programme works tirelessly to make that vision a reality.

Through our network of dedicated volunteers and educators, we run after-school tutoring centres in villages around Pindra and Jansa Bazar. These centres provide supplementary academic support in core subjects—mathematics, science, Hindi, and English—helping children strengthen their foundations and build confidence in their abilities.

Beyond academics, Shiksha Setu offers mentorship from college students and young professionals who guide children through career exploration, goal-setting, and life skills. We also identify exceptional students from economically weaker sections and connect them with scholarship opportunities to ensure that financial constraints never become a barrier to higher education.

Our approach is holistic: we engage parents through awareness sessions on the importance of education, distribute school supplies and uniforms to reduce dropout rates, and collaborate with local government schools to improve infrastructure and teaching quality.`,
    icon: 'BookOpen',
    image: '/images/programs/shiksha-setu.png',
    category: 'education',
    activities: [
      'After-school tutoring centres in rural villages',
      'Mentorship and career guidance for adolescents',
      'Scholarship identification and application support',
      'School supply distribution and uniform drives',
    ],
    geographicFocus: 'Pindra block, Varanasi district, Uttar Pradesh',
    isActive: true,
  },
  {
    id: 'swasthya-sathi',
    slug: 'swasthya-sathi',
    title: 'Swasthya Sathi (Health Companion)',
    shortDescription:
      'Community health camps, awareness drives, and connecting remote communities with essential healthcare services across Eastern UP.',
    fullDescription: `Swasthya Sathi addresses one of the most pressing challenges facing rural communities in Eastern Uttar Pradesh—limited access to quality healthcare. Many villages in the Pindra block and surrounding areas lack basic medical facilities, forcing families to travel long distances for even routine check-ups and treatments.

Our programme organises regular community health camps in partnership with local hospitals, medical colleges, and volunteer doctors. These camps provide free health screenings, basic diagnostic tests, and consultations covering general medicine, paediatrics, gynaecology, and dental care. We also facilitate referrals for specialised treatment when needed.

Swasthya Sathi places equal emphasis on preventive healthcare through awareness drives on nutrition, hygiene, sanitation, and common diseases like dengue, malaria, and waterborne infections. Our trained community health volunteers conduct door-to-door campaigns, especially targeting maternal and child health, immunisation awareness, and menstrual hygiene.

We are also building a network of telemedicine connections to link remote villages with urban healthcare providers, ensuring that geographic isolation no longer means healthcare deprivation.`,
    icon: 'HeartPulse',
    image: '/images/programs/swasthya-sathi.png',
    category: 'health',
    activities: [
      'Free community health camps with partner hospitals',
      'Health awareness drives on nutrition and hygiene',
      'Maternal and child health outreach programmes',
      'Telemedicine connectivity for remote villages',
    ],
    geographicFocus: 'Eastern Uttar Pradesh, focused on Varanasi and surrounding districts',
    isActive: true,
  },
  {
    id: 'shakti-udaan',
    slug: 'shakti-udaan',
    title: 'Shakti Udaan (Women Empowerment)',
    shortDescription:
      'Vocational training, financial literacy workshops, and self-help group formation empowering women to achieve economic independence.',
    fullDescription: `Shakti Udaan is rooted in the conviction that empowering women is the single most effective catalyst for community transformation. In many rural areas of Varanasi district, women face systemic barriers—limited education, lack of economic opportunities, and social restrictions—that prevent them from realising their full potential.

Our programme begins with vocational training workshops that equip women with marketable skills such as tailoring, embroidery, candle-making, food processing, and digital literacy. These are not just skill-building exercises; they are pathways to financial independence and self-respect. Each training cohort is supported by mentors who guide participants through the journey from learning to earning.

Financial literacy is another cornerstone of Shakti Udaan. We conduct workshops on savings, budgeting, banking, and government schemes like Mudra loans and Sukanya Samriddhi Yojana. Women learn to manage household finances, open bank accounts, and access microfinance opportunities that can seed small businesses.

We also facilitate the formation of self-help groups (SHGs) that create support networks among women, enabling collective savings, peer learning, and mutual encouragement. These SHGs become engines of community change, with members often taking leadership roles in village-level decision-making.`,
    icon: 'Sparkles',
    image: '/images/programs/shakti-udaan.png',
    category: 'women',
    activities: [
      'Vocational training in tailoring, embroidery, and digital skills',
      'Financial literacy and government scheme awareness workshops',
      'Self-help group formation and microfinance facilitation',
      'Leadership development and community participation programmes',
    ],
    geographicFocus: 'Villages around Pindra and Jansa Bazar, Varanasi district',
    isActive: true,
  },
  {
    id: 'samudayik-vikas',
    slug: 'samudayik-vikas',
    title: 'Samudayik Vikas (Community Development)',
    shortDescription:
      'Infrastructure improvement, sanitation drives, and community centre development creating lasting impact in underserved villages.',
    fullDescription: `Samudayik Vikas takes a ground-up approach to community development, recognising that sustainable change requires both physical infrastructure and social cohesion. Many villages in the Pindra block lack basic amenities—clean drinking water access, functional community spaces, and adequate sanitation facilities—that urban populations take for granted.

Our programme works hand-in-hand with village panchayats and community leaders to identify the most pressing infrastructure needs and implement solutions collaboratively. From repairing pathways and installing hand pumps to constructing community halls that serve as multipurpose spaces for education, healthcare camps, and cultural events, every project is community-driven and community-owned.

Sanitation remains a critical focus area. We organise regular cleanliness drives, promote the construction and use of household toilets under the Swachh Bharat framework, and educate communities about waste segregation and disposal. Our volunteers lead by example, working alongside villagers to transform public spaces and instil a culture of cleanliness.

Beyond physical infrastructure, Samudayik Vikas fosters social cohesion through cultural events, sports activities, and community gatherings that bring diverse groups together. We believe that a strong community is one that celebrates together, supports one another, and works collectively toward shared goals.`,
    icon: 'Building',
    image: '/images/programs/samudayik-vikas.png',
    category: 'community',
    activities: [
      'Village infrastructure improvement and repair projects',
      'Sanitation drives and toilet construction awareness',
      'Community centre development as multipurpose spaces',
      'Cultural events and social cohesion programmes',
    ],
    geographicFocus: 'Underserved villages in Pindra block, Varanasi district',
    isActive: true,
  },
  {
    id: 'harit-dharti',
    slug: 'harit-dharti',
    title: 'Harit Dharti (Green Earth)',
    shortDescription:
      'Tree plantation drives, waste management awareness, and promoting sustainable practices for environmental conservation.',
    fullDescription: `Harit Dharti is our environmental stewardship programme that addresses the growing ecological challenges facing rural and semi-urban communities in the Varanasi region. Deforestation, unmanaged waste, and declining biodiversity threaten the very ecosystems that sustain local livelihoods and wellbeing.

At the heart of this programme are our tree plantation drives, conducted in collaboration with schools, colleges, and village communities. We focus on planting native species that support local biodiversity, provide shade, improve air quality, and offer economic value through fruit and timber. Each plantation event is paired with an adoption model where community members take responsibility for nurturing saplings to maturity.

Waste management is another critical pillar. Through awareness campaigns and practical demonstrations, we teach households and small businesses about waste segregation, composting of organic waste, and reducing single-use plastic consumption. We work with local bodies to establish collection points and promote recycling wherever possible.

Harit Dharti also champions sustainable agricultural practices among farming families, including organic farming techniques, water conservation methods like rainwater harvesting, and crop diversification. By connecting environmental health with economic resilience, we help communities see conservation not as a sacrifice but as an investment in their future.`,
    icon: 'Leaf',
    image: '/images/programs/harit-dharti.png',
    category: 'environment',
    activities: [
      'Tree plantation drives with native species focus',
      'Waste management and plastic reduction campaigns',
      'Sustainable agriculture and organic farming workshops',
      'Rainwater harvesting and water conservation initiatives',
    ],
    geographicFocus: 'Varanasi district and surrounding rural areas, Uttar Pradesh',
    isActive: true,
  },
  {
    id: 'digital-saksharta',
    slug: 'digital-saksharta',
    title: 'Digital Saksharta (Digital Literacy)',
    shortDescription:
      'Providing basic computer education and digital safety awareness to rural youth and small business owners.',
    fullDescription: `In today's fast-paced world, digital literacy is no longer a luxury but a necessity for economic participation. Digital Saksharta aims to bridge the digital divide in rural Varanasi by offering hands-on training in basic computer operations, internet usage, and digital safety.
    
We have established mobile computer labs and partnered with local schools to conduct workshops for students, farmers, and small business owners. Participants learn how to access online government portals, use digital payment systems securely, and leverage the internet for educational and commercial purposes.

Our digital safety modules specifically target adolescents and women, educating them on how to navigate the internet safely, recognize misinformation, and protect themselves from cyber fraud.`,
    icon: 'MonitorSmartphone',
    image: '/images/programs/digital-saksharta.png',
    category: 'education',
    activities: [
      'Basic computer literacy classes for youth',
      'Digital payment training for small business owners',
      'Cyber safety workshops for adolescents',
      'Mobile computer lab outreach',
    ],
    geographicFocus: 'Pindra block and surrounding villages',
    isActive: true,
  },
];
