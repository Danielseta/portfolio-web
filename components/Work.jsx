'use client';
import Link from "next/link";
import { Button } from "./ui/button";

{/** swiper react component  */}
import { Swiper, SwiperSlide } from 'swiper/react';

{/** swiper styles */}
import 'swiper/css'
import 'swiper/css/pagination'

{/** required modeules */}
import {Pagination} from 'swiper/modules'

{/** componets */}
import ProjectCard from '@/components/ProjectCard';
{/** add projects worked on  */}
const projectData = [
    {
        image: '/work/Dribbble shot - 1.png',
        category: 'UI/UX',
        name: 'App Design',
        description: 'Intutive interface, seamless navigation, engaging visuals.',
        link: 'https://www.behance.net/gallery/200254449/Track-Map-Ui',
        github: '/',
    },
    {
        image: '/work/Dribbble shot - 2.png',
        category: 'Graphics',
        name: 'EKAYA Brand Design',
        description: 'Visual identity, brand story told. ',
        link: 'https://www.behance.net/gallery/187880511/Ekhaya-Logo-Branding',
        github: '/',
    },
    {
        image: '/work/Dribbble shot - 3.png',
        category: '',
        name: 'Ekhaya Landing page',
        description: 'Single-focus page, clear offer,drive action.',
        link: 'https://www.behance.net/gallery/187613897/Landing-Page-Design',
        github: '/',
    },
    {
        image: '/work/Dribbble shot - 5.png',
        category: 'Development',
        name: 'Management System',
        description: 'Centralized control, streamlined processes, effcient operations.',
        link: 'https://github.com/Danielseta/car-management-system',
        github: 'https://github.com/Danielseta/car-management-system',
    },
];

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                {/** text */}
                <div className=' container max-auto max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>Latest Projects</h2>
                    <p className='subtitle mb-8'>A Glimpse Into Our Portfolio</p>
                        <Link href='/projects'>
                        <Button>All Projects</Button>
                        </Link>
                </div>
                {/** sidebar */}
                <div className='container max-auto'>
                    <Swiper className='h-[495px]' slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                        {/*** first 4 projects */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default Work;