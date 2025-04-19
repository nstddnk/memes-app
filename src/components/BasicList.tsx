import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import { Heart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { getMemesById } from '@/store/slices/memesSlice.ts'
import { Image } from '@heroui/image'

export const BasicList = () => {
  const memesById = useSelector(getMemesById)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {Object.values(memesById).map(({ id, name, likes, link }) => (
        <Card key={id} className="flex flex-col">
          <CardHeader>
            <Image isBlurred alt={name} src={link} />
          </CardHeader>

          <CardBody className="flex-1">
            <h3 className="text-lg font-semibold">{name}</h3>
          </CardBody>

          <CardFooter className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-500" />
              {likes}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Follow the link
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
