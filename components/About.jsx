import DevImg from './Devimg';
import Image from 'next/image';
import { Tabs, TabsContent, TabList, TabsTrigger } from '@/components/ui/tabs';

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
    return <div>About</div>;
};

export default About;