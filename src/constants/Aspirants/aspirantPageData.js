import aspirantPageImagePaths from '../ImagePaths/Aspirants/aspirantPageImagePaths'

export const headerdData = {
  navItems: [
    { id: 1, name: 'Partners', link: '/' },
    { id: 2, name: 'Aspirants', link: '/' },
    { id: 3, name: 'Business', link: '/' },
  ],
  forMenu: [
    { id: 1, text: 'M' },
    { id: 0, name: aspirantPageImagePaths.homePage.e },
    { id: -1, text: 'N' },
    { id: -2, text: 'U' },
  ],
  logo: aspirantPageImagePaths.homePage.rsLogo,
  signUp: aspirantPageImagePaths.homePage.signUp,
  navInItems: [
    {
      id: 1,
      name: 'Solutions',
      subItems: [
        { id: 1, name: 'Partners', link: '/partners' },
        { id: 2, name: 'Aspirants', link: '/aspirants' },
        { id: 3, name: 'Business', link: '/business' },
      ],
    },
    {
      id: 2,
      name: 'Courses',
      link: '/courses',
    },
    {
      id: 3,
      name: 'About',
      link: '/aboutus',
    },
    ,
    {
      id: 4,
      name: 'Contact Us',
      link: '/contact-us',
    },
  ],
}

export const heroSectionData = {
  heading: {
    primary: 'unlock your',
    primaryColor: '#A62973',
    secondary: 'potential',
    secondaryColor: '#EE5064',
  },
  description:
    'Be a specialist in your niche with AI enabled Pathways, Skill Assessments and so much more.',
  buttonContent: 'Build Your Profile',
  bannerImage: aspirantPageImagePaths.homePage.banner,
}

export const TickerBoxData = {
  tickerArrow: aspirantPageImagePaths.tickerSection.arrow,
  slidingValue: [
    { id: 1, title: 'Check out the newly added Python pathway1' },
    { id: 2, title: 'Check out the newly added Python pathway2' },
    { id: 3, title: 'Check out the newly added Python pathway3' },
  ],
}

export const CareerData = {
  heading: 'power your career',
  description:
    'Join a pathway and embark on an enriching journey that includes training courses, assessments, mentoring, and mock interviews. Attain verification for highly sought-after skills.',
  pathways: [
    {
      id: 1,
      pathwayName: 'ITIL DSV',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 2,
      pathwayName: 'CBAP',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 3,
      pathwayName: 'ECBA',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 4,
      pathwayName: 'Data Analysis using SQL',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 5,
      pathwayName: 'Linux Essentials for Developers',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 6,
      pathwayName: 'GIT & GITHub Essentials ',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 7,
      pathwayName: 'HTML5 & CSS3 ',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 8,
      pathwayName: 'JavaScript',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 9,
      pathwayName: 'React ',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 10,
      pathwayName: 'Mastering Java ',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 11,
      pathwayName: 'Python Programming',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 12,
      pathwayName: 'ITIL Foundation ',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 13,
      pathwayName: 'Agile & Scrum ',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
    {
      id: 14,
      pathwayName: 'TDD with Java',
      amount: '399',
      typeOfPathway: 'Skill pathway',
    },
  ],
}

export const dropDownData = [
  { id: 1, title: 'College Student' },
  { id: 2, title: 'Experienced Professionals' },
]

export const dropDownBodyData = [
  {
    id: 1,
    title: 'Internships, Interviews',
    highLightedTitle: 'Jobs.',
    backgroundColor: '#DAB0E3',
    buttonData: {
      title: 'Explore',
      backgroundColor: '#FFFFFF',
      color: '#A62973',
    },
    trophyImage: aspirantPageImagePaths.dropDownSection.trophy,
    description:
      'Empower yourself to achieve your dream career; everything is possible through our AI-powered Pathways.',
    image: aspirantPageImagePaths.dropDownSection.mainImage1,
    whatToExpect: [
      {
        id: 1,
        image: aspirantPageImagePaths.dropDownSection.forStudents.icon1,
        title: 'College to career roadmap.',
        description: 'Bridge the gap between education and employability.',
      },
      {
        id: 2,
        image: aspirantPageImagePaths.dropDownSection.forStudents.icon2,
        title: 'Gain insights on skill expectation.',
        description: 'Negotiate better with corporate bench mark reports.',
      },
      {
        id: 3,
        image: aspirantPageImagePaths.dropDownSection.forStudents.icon3,
        title: 'Stay ahead of the heap.',
        description: 'Job recommendations based on latest trends.',
      },
      {
        id: 4,
        image: aspirantPageImagePaths.dropDownSection.forStudents.icon4,
        title: 'Attract best salaries.',
        description: 'Negotiate better with corporate bench mark reports.',
      },
    ],
  },
  {
    id: 2,
    title: 'Design your Dream,',
    highLightedTitle: 'Career.',
    backgroundColor: '#ECADD2',
    buttonData: {
      title: 'Explore',
      backgroundColor: '#FFFFFF',
      color: '#A62973',
    },
    trophyImage: aspirantPageImagePaths.dropDownSection.spring,
    description:
      'Be a niche specialist and get verified for skills that are in demand.',
    image: aspirantPageImagePaths.dropDownSection.mainImage2,
    whatToExpect: [
      {
        id: 1,
        image: aspirantPageImagePaths.dropDownSection.forProfessonal.icon1,
        title: 'Enrich your profile.',
        description: 'Explore our trainings, assessments, mentors, and more.',
      },
      {
        id: 2,
        image: aspirantPageImagePaths.dropDownSection.forProfessonal.icon2,
        title: 'Bridge the skills and expectations gap',
        description: 'Leverage recommendations based on industry trends.',
      },
      {
        id: 3,
        image: aspirantPageImagePaths.dropDownSection.forProfessonal.icon3,
        title: 'Be a specialist with a niche.',
        description: 'Land jobs with the best industry compensation',
      },
      {
        id: 4,
        image: aspirantPageImagePaths.dropDownSection.forProfessonal.icon4,
        title: 'Get verified tag for skills in demand',
        description:
          'Choose from skill-based and domain-based pathways to verify yourself.',
      },
    ],
  },
]

export const discoverSectionData = {
  title: 'discover, learn, grow',

  buttonTitle: 'View All Blogs',
  cards: [
    {
      id: 1,
      image: aspirantPageImagePaths.dropDownSection.mainImage1,
      title: "Resume Design: DO's and DON'T's to getting hired.",
    },
    {
      id: 2,
      image: aspirantPageImagePaths.dropDownSection.mainImage1,
      title: "Resume Design: DO's and DON'T's to getting hired.",
    },
    {
      id: 3,
      image: aspirantPageImagePaths.dropDownSection.mainImage1,
      title: "Resume Design: DO's and DON'T's to getting hired.",
    },
  ],
}

export const fastrackSectionData = {
  title: 'FASTRACK YOUR CAREER',
  image: aspirantPageImagePaths.fastrackSection.runnerImage,
  description:
    'We connect aspirants with employers, offering guidance, mentorship from industry experts, insights on skill expectations, and access to upskilling opportunities.',
  cardsRight: [
    {
      id: 1,
      percentage: '93%',
      bgColor: '#EBC8DD',
      description:
        'Of millennials find skill development crucial for their career',
    },
    {
      id: 2,
      percentage: '53%',
      bgColor: '#FFE3E3',
      description: 'Disappointed by lack of training when starting new job',
    },
    {
      id: 3,
      percentage: '60%',
      bgColor: '#EBC8DD',
      description:
        'Leadership and Development professionals have upskilling & reskilling as their top priority',
    },
  ],

  cardsLeft: [
    {
      id: 1,
      percentage: '79%',
      bgColor: '#FFCCC9',
      description: 'Millennials see mentoring as crucial for success',
    },
    {
      id: 2,
      percentage: '87%',
      bgColor: '#EDD8F2',
      description:
        'Millennials with mentors felt empowered and had greater confidence at work',
    },
    {
      id: 3,
      percentage: '91%',
      bgColor: '#FFE3E3',
      description: 'Millenials with mentors are satisfied with their jobs',
    },
  ],
}

export const readyToStartData = {
  title: 'READY TO GET STARTED?',
  description: 'Its easy. Scan this QR code.',
  mainImage: aspirantPageImagePaths.getStartedSection.questionTag,
}

export const aboutUsData = {
  title: 'About Us',
  description:
    'We are a machine learning based dynamic ‘digital marketplace’ that provides the aspirant talent pool to stay continually competitive relative to the hiring landscape in India. We do this by harnessing our comprehensive knowledge partner ecosystem, which provides for comprehensive mentorship, learning and career progression advisory. We use a unique ‘affinity algorithm’ which provides for identification, assessment and enablement modules resulting in significant process efficiency in curation and hiring, whilst saving significant time and cost for businesses and aspirants.',
}

export const stickySliderData = {
  title: [
    { id: 0, name: 'ENROLL / SIGN UP' },
    { id: 1, name: 'Enrich Your Profile' },
    { id: 2, name: 'Specialize with pathways' },
    { id: 3, name: 'Career Management' },
  ],
  paragraph: [
    {
      id: 0,
      subtitle: 'Everything at your fingertips.',
      paragraph:
        "We've made it easy! Say 'hi' to us on WhatsApp. Scan the QR code displayed here with your smartphone to get started. Upload a PDF of your resume when prompted and wait for the profile page link, which will be shared on WhatsApp. Click the link to review if your profile has been created accurately. It's that simple.",
    },
    {
      id: 1,
      subtitle: 'Upskill and stay ahead',
      paragraph:
        "We've made it easy! Say 'hi' to us on WhatsApp. Scan the QR code displayed here with your smartphone to get started. Upload a PDF of your resume when prompted and wait for the profile page link, which will be shared on WhatsApp. Click the link to review if your profile has been created accurately. It's that simple.",
    },
    {
      id: 2,
      subtitle: 'Become a niche specialist',
      paragraph:
        "We've made it easy! Say 'hi' to us on WhatsApp. Scan the QR code displayed here with your smartphone to get started. Upload a PDF of your resume when prompted and wait for the profile page link, which will be shared on WhatsApp. Click the link to review if your profile has been created accurately. It's that simple.",
    },
    {
      id: 3,
      subtitle: 'Take control of your career',
      paragraph:
        "We've made it easy! Say 'hi' to us on WhatsApp. Scan the QR code displayed here with your smartphone to get started. Upload a PDF of your resume when prompted and wait for the profile page link, which will be shared on WhatsApp. Click the link to review if your profile has been created accurately. It's that simple.",
    },
  ],
  image: [
    {
      id: 0,
      image: aspirantPageImagePaths.styickScrollSection.image1,
    },
    {
      id: 1,
      image: aspirantPageImagePaths.styickScrollSection.image2,
    },
    {
      id: 2,
      image: aspirantPageImagePaths.styickScrollSection.image3,
    },
    {
      id: 3,
      image: aspirantPageImagePaths.styickScrollSection.image4,
    },
  ],
}
