'use client'

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const trainerData = [
  {
    image: '/assets/img/trainers/david.jpg',
    name: 'Davi Santos',
    role: 'Body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam, eum.',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaInstagram, href: 'http://instagram.com' },
    ],
  },
  {
    image: '/assets/img/trainers/rosy.jpg',
    name: 'Rose Vieira',
    role: 'Fitness coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam, eum.',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaInstagram, href: 'http://instagram.com' },
    ],
  },
  {
    image: '/assets/img/trainers/matt.jpg',
    name: 'Matheus Bastos',
    role: 'Crossfit coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam, eum.',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaInstagram, href: 'http://instagram.com' },
    ],
  },
  {
    image: '/assets/img/trainers/sofia.jpg',
    name: 'Sofia Alcantara',
    role: 'Fitness coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam, eum.',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaInstagram, href: 'http://instagram.com' },
    ],
  },
]

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="equipe">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6">Nossos treinadores</motion.h2>
        {/* trainers grid */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }} 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((trainer, index) => {
            return(
              <div
              key={index}
              className="flex flex-col items-center text-center"
              >
                <div>
                  {/* image */}
                  <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                    <Image src={trainer.image} fill alt=""/>
                  </div>
                  {/* name */}
                  <h4 className="h4 mb-2">{trainer.name}</h4>
                  {/* role */}
                  <p className="uppercase text-xs tracking-[3px] mb-2">{trainer.role}</p>
                  {/* description */}
                  <p className="mb-6 max-w-[320px] mx-auto">{trainer.description}</p>
                  {/* socials */}
                  <div className="flex gap-12 justify-center">
                  {trainer.social.map((social, index) => {
                    return <div key={index}>
                      <Link
                        className="hover:text-accent transition-all"
                        href={social.href}
                      >
                        <social.icon className="text-lg" />
                      </Link>
                    </div>
                  })}
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>
        {/* btn */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton containerStyles="w-[196px] h-[62px]" text="Veja todos!" />
        </motion.div>
      </div>
    </section>
  )
}

export default Team