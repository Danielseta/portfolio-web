'use client';

import Image from 'next/image';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


{/** swiper react component  */}
import { Swiper, SwiperSlide } from 'swiper/react';

{/** swiper styles */}
import 'swiper/css'
import 'swiper/css/pagination'

{/** required modeules */}
import {Pagination} from 'swiper/modules'

const reviewsData = [
    {
        avatar: '/reviews/Dribbble shot - 7.png',
        name: 'Emmanueal Muletambo',
        job: 'Climate Change Activist',
        review: 'I was blown away by the quality of video and photography work done by Daniel. The website design is top notch, its modern, professional  and perfectly reflects our brand.',
    },
    {
        avatar: '/reviews/Dribbble shot - 8.png',
        name: 'Joshua Phiri',
        job: 'BusinessMan',
        review: 'The logo design really captured the essence of my business and created a brand identity that perfectly represents me. The logo is clean, professional and memorable.',
    },
    {
        avatar: '/reviews/Dribbble shot - 9.png',
        name: 'Denise Seti',
        job: 'Student',
        review: 'Was helped with a proper guide explaning everything in a way that was easy to understand and i was able to complete a project successfully. ',
    },
    {
        avatar: '/reviews/Dribbble shot - 10.png',
        name: 'Musa Mwanza',
        job: 'Ui/UX Designer',
        review: 'Worked on multiple projcts and has been fantastic. The ability to understand and complement my design vision os exceptional. His contributions were invaluable in bringing our projects to life ',
    },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
            {/** swiper  */}
            <Swiper 
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1400: { slidesPerView: 3 },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              className='h-[350px]'
            >
                {reviewsData.map((person, index) => {
                    return (
                     <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark-bg-secondary/40 p-8 min-h[300px]'>
                          <CardHeader className='p-0 mb-10'>
                            <div className='flex items-center gap-x-4'>
                                {/** image */}
                                <Image 
                                   src={person.avatar}
                                   width={70}
                                   height={70}
                                   alt=''
                                   priority
                                />
                                {/** NAME  */}
                                <div className='flex flex-col'>
                                   <CardTitle>{person.name}</CardTitle>
                                   <p>{person.job}</p>
                                </div>
                            </div>
                          </CardHeader>
                          <CardDescription className='text-lg text-muted-foreground'>
                            {person.review}
                          </CardDescription>
                        </Card>
                     </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews
