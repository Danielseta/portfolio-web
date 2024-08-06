'use client';

import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiBehanceFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/daniel-seta-4449b12a3',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/Danielseta',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.instagram.com/ui.daniel_seta?igsh=MW15dWZsbWpvc3Vkdw==',
    name: <RiInstagramFill />
  },
  {
    path: 'https://behance.net/https://behance.net/Daniel',
    name: <RiBehanceFill />
  },
];


const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}

    </div>
  );
};

export default Socials;
