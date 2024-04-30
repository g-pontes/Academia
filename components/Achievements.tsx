'use client'

import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    {
        number: 19,
        icon: FaBriefcase,
        text: 'cursos de treinamento'
    },
    {
        number: 879,
        icon: FaClock,
        text: 'jornada de trabalho'
    },
    {
        number: 150,
        icon: ImUsers,
        text: 'clientes satisfeitos'
    },
    {
        number: 9,
        icon: FaTrophy,
        text: 'prêmios internacionais'
    },
]

const Achievements = () => {
  return (
    <div>Achievements</div>
  )
}

export default Achievements