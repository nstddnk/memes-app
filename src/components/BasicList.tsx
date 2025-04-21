import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import { useSelector } from 'react-redux'
import { getMemesById } from '@/store/slices/memesSlice.ts'
import { Image } from '@heroui/image'
import { Heart, FallbackIcon } from '@/components/icons.tsx'
import React from 'react'

export const BasicList = () => {
  const memesById = useSelector(getMemesById)

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-8 p-0 max-w-7xl w-full">
        {Object.values(memesById).map(({ id, name, likes, link }) => (
          <Card
            key={id}
            className="flex flex-col w-full"
          >
            <CardHeader>
              <ImageWithFallback src={link} alt={name} />
            </CardHeader>

            <CardBody className="flex-1">
              <h3 className="text-md font-semibold">{name}</h3>
            </CardBody>

            <CardFooter className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Heart />
                {likes}
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Follow the link
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
  const [hasError, setHasError] = React.useState(false)

  return hasError ? (
    <FallbackIcon />
  ) : (
    <Image
      src={src}
      alt={alt}
      className="w-full rounded-lg shadow-lg object-cover h-auto lg:h-64"
      onError={() => setHasError(true)}
    />
  )
}
