'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface IconCircleProps {
  color: string;
  icon: string;
  x: number;
  y: number;
  delay: number;
}

const IconCircle: React.FC<IconCircleProps> = ({ color, icon, x, y, delay }) => (
  <motion.g
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <circle cx={x} cy={y} r="30" fill={color} filter="url(#shadow)" />
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="20">
      {icon}
    </text>
  </motion.g>
)

interface SpeechBubbleProps {
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  direction: 'left' | 'right';
  delay: number;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ color, x, y, width, height, direction, delay }) => {
  const path = direction === 'right'
    ? `M${x},${y} h${width-30} a15,15 0 0 1 15,15 v${height-30} a15,15 0 0 1 -15,15 h-${width-30} q-15,0 -30,15 l15,-15 h-15 a15,15 0 0 1 -15,-15 v-${height-30} a15,15 0 0 1 15,-15 z`
    : `M${x+width},${y} h-${width-30} a15,15 0 0 0 -15,15 v${height-30} a15,15 0 0 0 15,15 h${width-30} q15,0 30,15 l-15,-15 h15 a15,15 0 0 0 15,-15 v-${height-30} a15,15 0 0 0 -15,-15 z`

  return (
    <motion.path
      d={path}
      fill={color}
      filter="url(#shadow)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    />
  )
}

export default function Component() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white p-4">
      <svg viewBox="0 0 800 600" className="w-full max-w-4xl">
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>

        <motion.circle
          cx="400" cy="300" r="60"
          fill="#333333"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.text
          x="400" y="290"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Lorem ipsum dolor
        </motion.text>
        <motion.text
          x="400" y="310"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          amet, consectetur
        </motion.text>

        <SpeechBubble color="#4CAF50" x={50} y={100} width={300} height={100} direction="right" delay={0.2} />
        <SpeechBubble color="#FFA000" x={450} y={100} width={300} height={100} direction="left" delay={0.3} />
        <SpeechBubble color="#2196F3" x={50} y={400} width={300} height={100} direction="right" delay={0.4} />
        <SpeechBubble color="#F44336" x={450} y={400} width={300} height={100} direction="left" delay={0.5} />

        <IconCircle color="#4CAF50" icon="🌐" x={30} y={80} delay={0.6} />
        <IconCircle color="#4CAF50" icon="✉️" x={30} y={220} delay={0.7} />
        <IconCircle color="#FFA000" icon="🧩" x={770} y={80} delay={0.8} />
        <IconCircle color="#FFA000" icon="⚙️" x={770} y={220} delay={0.9} />
        <IconCircle color="#2196F3" icon="🏠" x={30} y={380} delay={1.0} />
        <IconCircle color="#2196F3" icon="📞" x={30} y={520} delay={1.1} />
        <IconCircle color="#F44336" icon="📊" x={770} y={520} delay={1.2} />

        {['#4CAF50', '#FFA000', '#2196F3', '#F44336'].map((color, index) => (
          <React.Fragment key={color}>
            <motion.circle
              cx={index % 2 === 0 ? 200 : 600}
              cy={index < 2 ? 150 : 450}
              r="15"
              fill="white"
              stroke={color}
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1 }}
            />
            <motion.text
              x={index % 2 === 0 ? 200 : 600}
              y={index < 2 ? 150 : 450}
              textAnchor="middle"
              dominantBaseline="central"
              fill={color}
              fontSize="16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + index * 0.1 }}
            >
              👤
            </motion.text>
          </React.Fragment>
        ))}

        {['#4CAF50', '#FFA000', '#2196F3', '#F44336'].map((color, index) => (
          <motion.text
            key={color}
            x={index % 2 === 0 ? 220 : 580}
            y={index < 2 ? 130 : 430}
            fill="white"
            fontSize="18"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 + index * 0.1 }}
          >
            LOREM IPSUM
          </motion.text>
        ))}

        {['#4CAF50', '#FFA000', '#2196F3', '#F44336'].map((color, index) => (
          <motion.text
            key={color}
            x={index % 2 === 0 ? 220 : 580}
            y={index < 2 ? 150 : 450}
            fill="white"
            fontSize="12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 + index * 0.1 }}
          >
            Lorem ipsum dolor sit amet,
          </motion.text>
        ))}

        {['#4CAF50', '#FFA000', '#2196F3', '#F44336'].map((color, index) => (
          <motion.text
            key={color}
            x={index % 2 === 0 ? 220 : 580}
            y={index < 2 ? 170 : 470}
            fill="white"
            fontSize="12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 + index * 0.1 }}
          >
            consectetur adipiscing elit.
          </motion.text>
        ))}

        <motion.text
          x="200" y="570"
          fill="#999"
          fontSize="24"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          INFOGRAPHICS
        </motion.text>

        <motion.text
          x="600" y="570"
          fill="#999"
          fontSize="24"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          DESIGN TEMPLATE
        </motion.text>
      </svg>
    </div>
  )
}
