'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TooltipProps {
  content: string
  children: React.ReactNode
  link?: string
}

export default function Tooltip({ content, children, link }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank')
    }
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={handleClick}
    >
      <div className={`${link ? 'cursor-pointer hover:text-primary transition-colors' : ''}`}>
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-64 p-3 text-sm bg-white rounded shadow-lg border border-gray-200 text-gray-700"
          >
            {content}
            {link && (
              <div className="mt-2 text-primary text-xs font-medium">
                Click to visit website
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
