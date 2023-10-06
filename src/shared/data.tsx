import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
  IconMoodHappy,
  IconScoreboard,
  IconBrandFacebookFilled,
  IconCurrencyDollar,
  IconDatabase,
  IconBuilding,
  IconTarget,
  IconSchool,
  IconReportAnalytics,
  IconCloud,
  IconShield,
  IconHeartHandshake,
  IconAtom,
  IconTrophy,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import rudger from '~/assets/images/IMG_0520.jpg';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import heroImg from '~/assets/images/hero.jpg';
import hero2Img from '~/assets/images/hero2.jpg';
import roadmapImg from '~/assets/images/roadmap.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import awsLogo from '~/assets/images/kisspng-amazon-web-services-logo-cloud-computing-amazon-co-logoaws-1-itnext-summit-5cb80eaa1502b4.8334577615555662500861.png';
import snowflakeLogo from '~/assets/images/dlf.pt-periscope-png-4729269.png';
import streamlitLogo from '~/assets/images/pngaaa.com-5084798.png';
import pythonLogo from '~/assets/images/kisspng-python-javascript-logo-clip-art-soloist-5b52da8509ef39.3275845315321565490407.png';


// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 13 using the new App Router »',
    href: 'https://nextjs.org/docs/app',
  },
  callToAction2: {
    text: 'Follow Modulus Partners on Linkedin',
    href: 'https://www.linkedin.com/company/97178136/admin/feed/posts/',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Home',
      href: '/',
      /*label: 'Menu',
      icon: IconChevronDown,
      links: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        }
      ],*/
    },
    {
      label: 'About us',
      href: '/about',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      Providing technical and analytical business solutions
    </>
  ),
  subtitle: (
    <>
      Step into the world of Modulus Partners, where we are more than a team – we are your seasoned professionals in data science, engineering, and analytics, committed to untangling the complexities of your technical and analytical challenges.
    </>
  ),
  
  callToAction: {
    text: 'Free Consultation',
    href: '/contact',
    icon: IconRocket,
    targetBlank: true,
    btnType: 'primary',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'About Us: Modulus Partners',
  subtitle:
    "With a fusion of technical prowess and analytical acumen, our team comprises dedicated data scientists, ingenious engineers, and insightful analysts. No two businesses are alike, and we understand that. Our solutions are designed to meet the unique challenges you face. Tailoring excellence is not just a goal; it's our commitment to your success.",
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero TailNext',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://www.python.org/',
      src: pythonLogo,
      alt: 'Python Logo',
    },
    {
      link: 'https://www.snowflake.com/en/',
      src: snowflakeLogo,
      alt: 'Snowflake Logo',
    },
    {
      link: 'https://aws.amazon.com/',
      src: awsLogo,
      alt: 'AWS Logo',
    },
    {
      link: 'https://streamlit.io/',
      src: streamlitLogo,
      alt: 'Streamlit Logo',
    },
  ],
};

// FAQs data for Modulus Partners with Answers
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'Who is Modulus Partners and what do they do?',
      description: `Modulus Partners is a leading technology and data consultancy firm dedicated to helping businesses enhance their technical capabilities and harness the power of data. We provide comprehensive assessment services, strategic partnerships, and customized solutions to drive success.`,
    },
    {
      title: 'What values and principles guide Modulus Partners\' work?',
      description: `At Modulus Partners, we are guided by a commitment to excellence, integrity, and innovation. Our work is driven by a set of values that prioritize client success, ethical practices, and staying at the forefront of technological advancements.`,
    },
    {
      title: 'What experience does we bring to the table?',
      description: `With years of experience in the tech and data industry, Modulus Partners has a proven track record of helping businesses transform and thrive. Our team of experts brings a wealth of knowledge to ensure the success of your projects.`,
    },
    {
      title: 'What is the team like?',
      description: `The Modulus Partners team is a dynamic and skilled group of professionals who are passionate about technology and data. We believe in collaboration, continuous learning, and leveraging our diverse expertise to provide top-notch solutions for our clients.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `Community engagement is a core value at Modulus Partners. We actively participate in community initiatives, knowledge-sharing events, and support programs that align with our mission of empowering businesses through technology and data.`,
    },
    {
      title: 'What support channels does we offer?',
      description: `Modulus Partners provides comprehensive support channels, including personalized consultations, training programs, and ongoing monitoring services. Our commitment is to ensure that your business receives the support needed for success in the ever-evolving tech landscape.`,
    },
  ],
};



// FAQs data for Modulus Partners
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'How can Modulus Partners help my business assess and improve its technical and data capabilities?',
      description: `Modulus Partners offers a comprehensive assessment service, helping you evaluate your current technical and data capabilities. Our roadmap includes strategies for improvement and the implementation of advanced technologies.`,
    },
    {
      title: 'Is it possible to get personalized data solutions from Modulus Partners?',
      description: `Absolutely! Modulus Partners provides customized data solutions tailored to meet the unique needs of your business. Our team ensures a personalized approach to data-driven success, enhancing your overall efficiency and growth.`,
    },
    {
      title: 'What kind of strategic partnerships does Modulus Partners offer to enhance my business?',
      description: `Modulus Partners collaborates with tech and data experts to guide your business. We offer strategic partnerships and consulting services to help you adopt advanced technologies and data-driven strategies effectively.`,
    },
    {
      title: 'Can Modulus Partners assist in the implementation of data analytics tools for my business?',
      description: `Certainly! Modulus Partners can help integrate data analytics tools into your business processes. Gain actionable insights, analyze key performance indicators, and make informed decisions to drive your business forward.`,
    },
    {
      title: 'How does Modulus Partners ensure data security and compliance for my business?',
      description: `We prioritize data governance and compliance. Modulus Partners helps your business establish robust data governance policies, ensuring compliance with data protection regulations and safeguarding sensitive information.`,
    },
    {
      title: 'What kind of training programs does Modulus Partners offer to enhance the technical and data skills of my team?',
      description: `Modulus Partners provides training programs to equip your team with the necessary technical and data skills. We foster a culture of continuous learning, empowering your team for success.`,
    },
    {
      title: 'How can Modulus Partners assist in the adoption of cloud technologies for my business?',
      description: `Migrate to scalable and flexible cloud services with Modulus Partners. We assist in adopting cloud technologies such as AWS, Azure, or Google Cloud for data storage, processing, and accessibility.`,
    },
    {
      title: 'Is Modulus Partners available for ongoing support and optimization of my technical and data infrastructure?',
      description: `Absolutely! Modulus Partners offers ongoing support and monitoring services. Implement monitoring systems to track and optimize the performance of your technical and data infrastructure.`,
    },
  ],
};


// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Praesent rutrum purus in sem blandit, in consectetur mi pharetra. Ut sagittis sapien sit amet congue cursus. Nulla eu elementum ex, tincidunt semper nisi.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What do I need to start?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'How to install the NextJS + Tailwind CSS template?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: "What's something that you completely don't understand?",
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: "What's an example of when you changed your mind?",
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'What is something that you would really like to try again?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'If you could only ask one question to each person you meet, what would that question be?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Which plan is best for me?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'What are my payment options?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: 'How do I change my plan to a different one?',
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: 'What happen at the end of my free trial?',
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'Can I import data from other tools?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'Can I cancel my plan at any time?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I download the template?',
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: 'How do I customize the template?',
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: 'Does the template come with any tutorials or instructions?',
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title: 'Are there any additional fees or charges for using the template?',
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Learn More',
  subtitle:
    'Read our blog to learn more about what value we are adding to businesses',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Blog',
      description: 'See what our team is working on.',
      href: '/blog',
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        Empower Your Business with <span className="whitespace-nowrap">Data Insights</span>
      </>
    ),
    subtitle:
      'Unlock the full potential of your data with our specialized consulting services that drive business growth and automation.',
    highlight: 'Data Offerings',
  },
  items: [
    {
      title: 'Customer Churn Analysis',
      description:
        'Identify patterns and factors contributing to customer churn using advanced analytics, helping you retain valuable customers.',
      icon: IconMoodHappy,
    },
    {
      title: 'Lead Scoring Strategies',
      description:
        'Implement data-driven lead scoring models to prioritize and focus on leads with the highest potential for conversion.',
      icon: IconScoreboard,
    },
    {
      title: 'Mixed Media Modeling',
      description:
        'Utilize sophisticated modeling techniques to optimize your marketing mix and enhance the effectiveness of your media campaigns.',
      icon: IconBrandFacebook,
      link: {
        label: 'Learn more',
        href: 'https://lightweight-mmm.readthedocs.io/en/latest/index.html',
      },
    },
    {
      title: 'Advanced Pricing Models',
      description:
        'Develop customized pricing models based on data analysis, ensuring competitive pricing strategies and maximizing profitability.',
      icon: IconCurrencyDollar,
    },
    {
      title: 'Data-Driven Decision Making',
      description:
        'Empower your team with insights for informed decision-making, leveraging the power of data to drive business strategies.',
      icon: IconDatabase,
    },
    {
      title: 'Customized Data Solutions',
      description:
        'Tailored data solutions to meet your unique business needs, ensuring a personalized approach to data-driven success.',
      icon: IconBuilding,
    },
  ],
};


// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
// Feature data
export const featuresData3: FeaturesProps = {
  header: {
    title: (
      <>
        Empower Your Business with <span className="whitespace-nowrap">Data Insights</span>
      </>
    ),
    subtitle:
      'Unlock the full potential of your data with our specialized consulting services that drive business growth and automation.',
    highlight: 'Data Offerings',
  },
  items: [
    {
      title: 'Customer Churn Analysis',
      description:
        'Identify patterns and factors contributing to customer churn using advanced analytics, helping you retain valuable customers.',
      icon: IconMoodHappy,
    },
    {
      title: 'Lead Scoring Strategies',
      description:
        'Implement data-driven lead scoring models to prioritize and focus on leads with the highest potential for conversion.',
      icon: IconScoreboard,
    },
    {
      title: 'Mixed Media Modeling',
      description:
        'Utilize sophisticated modeling techniques to optimize your marketing mix and enhance the effectiveness of your media campaigns.',
      icon: IconBrandFacebook,
      link: {
        label: 'Learn more',
        href: 'https://lightweight-mmm.readthedocs.io/en/latest/index.html',
      },
    },
    {
      title: 'Advanced Pricing Models',
      description:
        'Develop customized pricing models based on data analysis, ensuring competitive pricing strategies and maximizing profitability.',
      icon: IconCurrencyDollar,
    },
    {
      title: 'Data-Driven Decision Making',
      description:
        'Empower your team with insights for informed decision-making, leveraging the power of data to drive business strategies.',
      icon: IconDatabase,
    },
    {
      title: 'Customized Data Solutions',
      description:
        'Tailored data solutions to meet your unique business needs, ensuring a personalized approach to data-driven success.',
      icon: IconBuilding,
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'Aliquip definiebas ad est',
    subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
    highlight: 'Content',
  },
  content:
    'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  items: [
    {
      title: 'ensibus Per ei quaeque s',
      description:
        'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Cu imperdiet posidonium sed',
      description:
        'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Roadmap data
export const stepsData: StepsProps = {
  title: 'Level Up Your Technical and Data Capabilities: A Roadmap for Small Businesses',
  items: [
    {
      title: 'Assessment and Goal Setting',
      description:
        'Evaluate your current technical and data capabilities. Set clear goals and objectives for improvement. Identify areas that can benefit from technology and data-driven solutions.',
      icon: IconTarget,
    },
    {
      title: 'Strategic Partnerships',
      description:
        'Collaborate with tech and data experts. Consider forming strategic partnerships or hiring consultants to guide your business in adopting advanced technologies and data strategies.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Data Infrastructure Upgrade',
      description:
        'Invest in a robust data infrastructure. Implement tools and systems to efficiently collect, store, and manage data. Ensure data security and compliance with industry standards.',
      icon: IconDatabase,
    },
    {
      title: 'Skill Development and Training',
      description:
        'Equip your team with the necessary technical and data skills. Provide training programs or encourage employees to acquire relevant certifications. Foster a culture of continuous learning.',
      icon: IconSchool,
    },
    {
      title: 'Implementation of Data Analytics',
      description:
        'Integrate data analytics tools to gain actionable insights. Analyze key performance indicators (KPIs) and use data to make informed business decisions. Explore opportunities for automation.',
      icon: IconReportAnalytics,
    },
    {
      title: 'Adoption of Cloud Technologies',
      description:
        'Migrate to cloud services (AWS, Azure, or Google Cloud) for scalability and flexibility. Leverage cloud technologies for data storage, processing, and accessibility.',
      icon: IconCloud,
    },
    {
      title: 'Data Governance and Compliance',
      description:
        'Establish data governance policies and ensure compliance with data protection regulations. Safeguard sensitive information and build trust with customers through responsible data practices.',
      icon: IconShield,
    },
    {
      title: 'Continue Monitoring and Optimizing',
      description:
        'Implement monitoring systems to track and optimize the performance of your technical and data infrastructure.',
      icon: IconAtom,
    },
    {
      title: 'Data Transformation Achieved!',
      icon: IconTrophy,
    },
  ],
  image: {
    src: roadmapImg,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Team Members',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Rudger',
      occupation: 'Marketing Data Scientist Constultant',
      image: {
        src: rudger,
        alt: 'Rudger',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: 'https://twitter.com/RudgerDame',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/rudgerdame/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'rudger@modulus-partners.com',
        },
      ],
    },
    {
      name: 'Caleb',
      occupation: 'Data Scientist & Engineering Constultant',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Caleb',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      occupation: 'Marketing Manager',
      comment:
        'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Silver Jordan',
      occupation: 'Senior Marketer',
      comment:
        'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Kelsey Arden',
      occupation: 'Co-Founder & CEO',
      comment:
        'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      value: 29,
      period: 'per month',
      texts: [
        'Etiam in libero',
        'Aenean ac nunc',
        'Cras scelerisque accumsan libero, et volutpat dolor tristique at',
        'In hac habitasse',
      ],
      callToAction: {
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      value: 69,
      period: 'per month',
      texts: ['Proin vel laoreet', 'Ut efficitur egestas', 'Pellentesque ut nibh', 'Donec fringilla sem'],
      callToAction: {
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      value: 199,
      period: 'per month',
      texts: [
        'Curabitur suscipit risus',
        'Aliquam blandit malesuada',
        'Suspendisse sit amet',
        'Suspendisse auctor dui',
      ],
      callToAction: {
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Get in Touch',
    highlight: 'Contact',
  },
  content:
    "Whether you're looking to enhance your online presence, optimize business processes, or dive into data-driven insights, our team is here to guide you. Let's collaborate to achieve your goals and drive success together.",
  items: [
    {
      title: 'Contact',
      description: ['Mail: rudger@modulus-partners.com'],
      icon: IconMail,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday: 09:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Get in Touch',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Schedule consultation',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Email',
      texts: ['Office: rudger@modulus-parnters.com', 'Site: https://modulus-partners.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandLinkedin, href: '#' },,
  ]
};
