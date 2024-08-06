'use client';
import React, {useState} from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';


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


const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

   const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
    ? project
    : project.caategory === category;
   });


  return (
  <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects 
        </h2>
        {/** tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640] mb-12 mx-auto mb:border dark:border-none'>
            {categories.map((category, index) => {
              return <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
            })}
          </TabsList>
          {/** tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}/>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
  </section>
  );
};

export default Projects;