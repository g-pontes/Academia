'use client'

import { FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Achievements from './Achievements';

const featured = [
  {
    icon: <FaUsers />,
    title: 'treinadores premiados',
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus perferendis accusantium fugiat quis quidem dolorum possimus deleniti corporis culpa'
  },
  {
    icon: <IoIosPricetag />,
    title: 'preços excelentes',
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus perferendis accusantium fugiat quis quidem dolorum possimus deleniti corporis culpa'
  },
  {
    icon: <FaDumbbell />,
    title:'equipamento moderno',
    subtitle:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus perferendis accusantium fugiat quis quidem dolorum possimus deleniti corporis culpa'
  },
]

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="sobre">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center">Sobre nós</h2>
          <p className="max-w-[600px] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae qui alias maxime adipisci libero inventore quas itaque
          </p>
        </div>
        {/* featured items */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
          {featured.map((featured, index) => {
            return(
              <div
              className="flex flex-col justify-center items-center gap-4 border p-10"
              key={index}
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px]
                rounded-full flex justify-center items-center">{featured.icon}</div>
                <div>
                  <h4 className="h4 text-accent">{featured.title}</h4>
                  <p>{featured.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* achievements */}
        <Achievements />
      </div>
    </section>
  )
}

export default About