'use client'

import { FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const features = [
  {
    icon: <FaUsers />,
    title: 'award-winning trainers',
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus perferendis accusantium fugiat quis quidem dolorum possimus deleniti corporis culpa, omnis rem dicta ratione, natus dolore optio. Dicta molestias optio nesciunt!'
  },
  {
    icon: <IoIosPricetag />,
    title: 'excellent prices',
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus perferendis accusantium fugiat quis quidem dolorum possimus deleniti corporis culpa, omnis rem dicta ratione, natus dolore optio. Dicta molestias optio nesciunt!'
  },
  {
    icon: <FaDumbbell />,
    title:'modern equipament',
    subtitle:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus perferendis accusantium fugiat quis quidem dolorum possimus deleniti corporis culpa, omnis rem dicta ratione, natus dolore optio. Dicta molestias optio nesciunt!'
  },
]

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div>
        
      </div>
    </section>
  )
}

export default About