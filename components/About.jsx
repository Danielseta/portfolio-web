import DevImg from './Devimg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from 'lucide-react';


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Daniel Seta',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+260 964 223 895'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'Danielseta37@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 13 Aug, 2002',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor of Science in ICT (Present)',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Mongu-Lusaka Road, Mongu, Zambia',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Rockview University',
                qualification: 'Bachelor of Science in ICT',
                years: '2021-present',
            },
            {
                Secondary  : 'ST Johns Secondary School',
                qualification: 'Junior, Secondary Certificates',
                years: '01/2015 - 11/2019',
            },
            
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'InterWebb Technology, Zambia',
                qualification: 'Junior UI Developer',
                years: '2022-09 - Present',
            },
            {
                company: 'Zuha Africa Youth Organization, Mongu',
                qualification: 'Video Editor',
                years: '2020-03 - Present',
            },
            {
                company: 'JB Sims Consultancy',
                qualification: 'IT inter',
                years: '2023-05 - 2023-08',
            },
            {
                company: 'RDG Solar Homes',
                qualification: 'Sale’s Agent',
                years: '2020-03 - 2020-09',
            },
            
            
        ],
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'User interface (UI) Design',
            },
            {
                name: 'Graphics Design',
            },
            {
                name: 'JavaScript Knowledge',
            },
            {
                name: 'Responsive Design',
            },
            {
                name: 'Photography',
            },
            {
                name: 'Video Editing(Premier /After Effects)',
            },
            {
                name: 'Problem Solving',
            },
            {
                name: 'Public Speaking',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
            
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    
    return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className='conatainer mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
            <div className='flex flex-col xl:flex-row'>
                {/** */}
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark 
                    w-[505px] h-[505px] bg-no-repeat relative' imgSrc=''
                    />
                </div>
                {/** tabs  */}
               <div className='flex-1'>
                <Tabs defaultValue='personal'>
                    <TabsList className='w-full grid xl:grid-cols-3 xl:max-w[520px] xl:border dark:border-none'>
                    <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                    <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                    <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                    </TabsList>
                    {/** content */}
                    <div className='text-lg mt-qw xl:mt-8'>
                        <TabsContent value='personal'>
                            <div className='text-center xl:text-left'>
                            <h3 className='h3 mb-4'>Creative and Quality serivce for you</h3>
                            <p className='subtitle mx-w-xl max-auto xl:mx-0'>I specialize in crafting intvitive websites with cutting-edge technology, delivering dynamic and engaging user experience</p>
                            {/** icons */}
                            <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                {infoData.map((item, index) => {
                                    return (
                                        <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                          <div className='text-primary'>{item.icon}</div>
                                          <div>{item.text}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        </TabsContent>
                        <TabsContent value='qualifications'>qualifications info</TabsContent>
                        <TabsContent value='skills'>skills info</TabsContent>
                    </div>
                </Tabs>
               </div>
            </div>
        </div>
    </section>
    );
};

export default About;