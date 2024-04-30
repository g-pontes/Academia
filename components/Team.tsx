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
    role: 'Body builder coach',
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
    role: 'Body builder coach',
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
    role: 'Body builder coach',
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
    <section className="h-screen bg-red-300" id="equipe">
      <div className="container mx-auto">
        <h2>Nossos treinadores</h2>
        {/* trainers grid */}
        <div>
          {trainerData.map((trainer, index) => {
            return(
              <div
              key={index}
              className=""
              >
                <div>
                  {/* image */}
                  <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                    <Image src={trainer.description} fill alt=""/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team