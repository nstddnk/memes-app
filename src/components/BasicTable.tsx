import { useSelector } from 'react-redux'
import { getMemesById, updateMeme } from '@/store/slices/memesSlice'
import { Button } from '@heroui/button'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@heroui/table'
import { MemeType } from '@/interfaces/meme.interace'
import { useState } from 'react'
import { BasicModal } from '@/components/BasicModal.tsx'
import { useDispatch } from 'react-redux'
import { BasicInput } from '@/components/BasicInput.tsx'
import { likesRegex, urlRegex } from '@/utils/validation.ts'
import { Link } from '@heroui/link'

enum ColumnsEnum {
  ID = 'id',
  NAME = 'name',
  LIKES = 'likes',
  LINK = 'link',
  ACTIONS = 'actions',
}
const columns = [
  { key: ColumnsEnum.ID, label: 'ID' },
  { key: ColumnsEnum.NAME, label: 'Name' },
  { key: ColumnsEnum.LIKES, label: 'Likes' },
  { key: ColumnsEnum.LINK, label: 'Link' },
  { key: ColumnsEnum.ACTIONS, label: 'Actions' },
]

export const BasicTable = () => {
  const memesById = useSelector(getMemesById)
  const [editedMemeId, setEditedMemeId] = useState<string | null>(null)
  const dispatch = useDispatch()

  const handleSave = (values: MemeType) => {
    dispatch(updateMeme(values))
    setEditedMemeId(null)
  }

  const columnMapping: Record<string, (value: string) => React.ReactNode> = {
    id: (value) => <span>{value}</span>,
    name: (value) => <strong>{value}</strong>,
    likes: (value) => <span>{value}</span>,
    link: (value) => (
      <Link isBlock href={value} target="_blank" rel="noopener noreferrer">
        {value}
      </Link>
    ),
    actions: (id) => (
      <Button
        className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg"
        onPress={() => setEditedMemeId(id)}
      >
        Edit
      </Button>
    ),
  }

  const getCellValue = (item: MemeType, columnKey: string) => {
    const value = getKeyValue(item, columnKey) as string
    const wrappedValue = columnMapping[columnKey]

    return wrappedValue ? wrappedValue(columnKey === ColumnsEnum.ACTIONS ? item.id : value) : value
  }

  return (
    <div className="flex align-center justify-center">
      <Table aria-label="Meme table" className="max-w-6xl">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody>
          {Object.values(memesById).map((item: MemeType) => (
            <TableRow key={item.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>{getCellValue(item, column.key)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editedMemeId && (
        <BasicModal
          isOpen={Boolean(memesById)}
          onClose={() => setEditedMemeId(null)}
          initialValues={memesById[editedMemeId]}
          onSave={handleSave}
        >
          <BasicInput name="id" label="Id" isDisabled />
          <BasicInput name="name" label="Name" isRequired />
          <BasicInput name="likes" label="Likes" isRequired pattern={likesRegex} minLength={0} />
          <BasicInput name="link" label="Link" pattern={urlRegex} isRequired />
        </BasicModal>
      )}
    </div>
  )
}
