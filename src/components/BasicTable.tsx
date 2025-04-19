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
import { urlRegex } from '@/utils/validation.ts'

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'likes', label: 'Likes' },
  { key: 'link', label: 'Link' },
  { key: 'actions', label: 'Actions' },
]

export const BasicTable = () => {
  const memesById = useSelector(getMemesById)

  const [editedMemeId, setEditedMemeId] = useState<string | null>(null)
  const dispatch = useDispatch()

  const handleSave = (values: MemeType) => {
    dispatch(updateMeme(values))

    setEditedMemeId(null)
  }

  return (
    <div className="flex align-center justify-center">
      <Table aria-label="Meme table" className="max-w-6xl">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody>
          {Object.values(memesById).map((item) => (
            <TableRow key={item.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.key === 'actions' ? (
                    <Button onPress={() => setEditedMemeId(item.id)}>Edit</Button>
                  ) : (
                    getKeyValue(item, column.key)
                  )}
                </TableCell>
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
          <BasicInput name="likes" label="Likes" isDisabled />
          <BasicInput name="link" label="Link" pattern={urlRegex} isRequired />
        </BasicModal>
      )}
    </div>
  )
}
