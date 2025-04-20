import * as React from 'react'

import { IconSvgProps } from '@/types'

export const Logo: React.FC<IconSvgProps> = ({ width = 150, height = 60, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1000 400"
    xmlns="http://www.w3.org/2000/svg"
    className="group transition-all duration-300 cursor-pointer"
    {...props}
  >
    <defs>
      <linearGradient id="gradientLogo" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <g className="group">
      <g
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-[url(#gradientLogo)]"
      >
        <path d="M104.841 145.759C84.3825 103.24 113.976 93.8934 138.062 126.769" />
        <path d="M278.45 125.67C310.018 85.9308 316.458 123.485 306.365 156.355" />
        <path d="M174.149 149.888C174.479 144.709 174.812 139.541 175.142 134.374" />
        <path d="M208.585 156.344C208.228 146.42 209.43 136.477 210.574 126.629" />
        <path d="M241.358 149.884C243.072 144.904 242.021 139.545 242.355 134.378" />
        <path d="M164.116 198.803C205.073 198.238 196.821 210.153 161.861 223.33" />
        <path d="M237.844 197.687C203.614 212.709 210.546 206.414 236.697 223.526" />
        <path d="M196.887 254.533C179.946 255.472 195.528 273.667 210.195 255.646" />
        <path d="M193.39 286.642C181.827 291.678 175.892 289.505 167.537 282.956" />
        <path d="M197.268 282.956C206.418 297.428 220.936 292.334 232.171 282.956" />
        <path d="M109.366 231.278C96.7847 231.121 76.1524 227.207 68 226.11" />
        <path d="M111.951 256.852C96.0698 257.608 82.1144 261.134 69.2927 267.182" />
        <path d="M333 214.223C316.165 216.03 302.204 220.205 289.049 228.707" />
        <path d="M331.965 262.448C318.367 258.875 304.68 258.572 290.599 258.572" />
      </g>
      <text
        x="400"
        y="50%"
        textAnchor="start"
        fontSize="120"
        fontWeight="bold"
        dominantBaseline="middle"
        fill="currentColor"
        className="transition-all duration-300 group-hover:fill-[url(#gradientLogo)]"
      >
        MemeHub
      </text>
    </g>
  </svg>
)

export const MoonFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
)

export const SunFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
)

export const Heart = () => (
  <svg height={18} viewBox="0 0 24 24" width={18} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heartGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="url(#heartGradient)"
      stroke="url(#heartGradient)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
)
