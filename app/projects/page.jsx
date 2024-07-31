'use client';
import React, {useState} from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';


const projectData = [
  {
      image: '/work/Dribbble shot - 1.png',
      category: 'UI/UX',
      name: 'App Design',
      description: 'A daily activity tracker app featuring a clear calender view, detail activity screen with notes and statictics with a user settings profile. ',
      link: '/',
      github: '/',
  },
  {
      image: '/work/Dribbble shot - 2.png',
      category: '',
      name: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      link: '/',
      github: '/',
  },
  {
      image: '/work/Dribbble shot - 3.png',
      category: '',
      name: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      link: '/',
      github: '/',
  },
  {
      image: '/work/Dribbble shot - 4.png',
      category: '',
      name: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      link: '/',
      github: '/',
  },
  {
    image: '/work/Dribbble shot - 5.png',
    category: '',
    name: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    link: '/',
    github: '/',
},
{
  image: '/work/Dribbble shot - 6.png',
  category: '',
  name: '',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  link: '/',
  github: '/',
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