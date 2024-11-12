'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Star, Book, Trophy, User } from 'lucide-react'

const GloboFy = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateCursorPosition)
    return () => window.removeEventListener('mousemove', updateCursorPosition)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#101825] via-[#1a2333] to-[#101825] text-white overflow-hidden">
      {/* Futuristic Cursor */}
      <div
        className="fixed w-8 h-8 border-2 border-[#9FEB0C] rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Header */}
      <header className="p-6 flex justify-between items-center backdrop-blur-md bg-[#101825]/50 border-b border-[#9FEB0C]/20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white tracking-wider"
        >
          Globofy
        </motion.h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-[#9FEB0C] transition-colors">Home</a>
          <a href="#" className="hover:text-[#9FEB0C] transition-colors">Courses</a>
          <a href="#" className="hover:text-[#9FEB0C] transition-colors">Blog</a>
        </nav>
      </header>

      <main className="container mx-auto p-6 mt-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            Unlock Your Potential
          </motion.h2>
          <p className="text-xl mb-8">Gamified learning experiences await you!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#9FEB0C] text-[#101825] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#8FDA0B] transition-colors"
          >
            Start Learning
          </motion.button>
        </section>

        {/* Popular Blog Posts */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Popular Blog Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <motion.div
                key={post}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post * 0.1 }}
                className="backdrop-blur-lg bg-[#101825]/50 p-6 rounded-xl border border-[#9FEB0C]/20 hover:border-[#9FEB0C] transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Exciting Blog Post {post}</h4>
                <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="text-[#9FEB0C] hover:underline flex items-center">
                  Read More <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gamified Courses */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Gamified Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((course) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: course * 0.1 }}
                className="backdrop-blur-lg bg-[#101825]/50 p-6 rounded-xl border border-[#9FEB0C]/20 hover:border-[#9FEB0C] transition-colors relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 bg-[#9FEB0C] text-[#101825] px-2 py-1 rounded-full text-xs font-bold">
                  Membership Required
                </div>
                <h4 className="text-xl font-semibold mb-2">Advanced Course {course}</h4>
                <p className="text-sm mb-4">Master the art of coding with our gamified learning experience.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.9</span>
                  </div>
                  <div className="flex items-center">
                    <Book className="w-4 h-4 mr-1" />
                    <span>10 Lessons</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Account Section */}
        <section className="backdrop-blur-lg bg-[#101825]/50 p-6 rounded-xl border border-[#9FEB0C]/20">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full bg-gradient-to-r from-[#101825] via-[#9FEB0C] to-[#101825] p-1"
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/placeholder.svg?height=100&width=100" alt="Dragon Avatar" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <div className="absolute -bottom-2 -right-2 bg-[#9FEB0C] text-[#101825] rounded-full p-2">
                <Trophy className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">DragonLearner42</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Level 7</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>1337 XP</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-[#101825] rounded-full h-2">
              <div className="bg-[#9FEB0C] h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm mt-2">330 XP to next level</p>
          </div>
        </section>
      </main>

      <footer className="mt-16 p-6 backdrop-blur-md bg-[#101825]/50 border-t border-[#9FEB0C]/20 text-center">
        <p>&copy; 2023 Globofy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default GloboFy