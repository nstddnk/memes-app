import { useState } from 'react'
import { MainLayout } from '@/layouts/Main.tsx'
import { BasicTable } from '@/components/BasicTable.tsx'

interface MemeInterface {
  id: number
  name: string
  image: string
  likes: number
}

const initialMemes = [
  {
    id: 1,
    name: 'Cat',
    image: 'https://example.com/grumpy.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    name: 'Cat',
    image: 'https://example.com/grumpy.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    name: 'Cat',
    image: 'https://example.com/grumpy.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    name: 'Cat',
    image: 'https://example.com/grumpy.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    name: 'Cat',
    image: 'https://example.com/grumpy.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    name: 'Cat',
    image: 'https://example.com/grumpy.jpg',
    likes: Math.floor(Math.random() * 100),
  },
]

export const MemesTable = () => {
  const [memes, setMemes] = useState<MemeInterface[]>(initialMemes)

  const handleEdit = (meme: MemeInterface) => {
    console.log('Edit meme', meme)
  }

  return (
    <MainLayout>
      <BasicTable items={memes} />
    </MainLayout>
  )
}
