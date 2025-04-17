import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@heroui/table'
import { Button } from '@heroui/button'

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'likes', label: 'Likes' },
  { key: 'actions', label: 'Actions' },
]

export const BasicTable = ({ items }) => {
  return (
    <div className="flex align-center justify-center">
      <Table aria-label="Meme table" className="max-w-6xl">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.key === 'actions' ? (
                    <Button onPress={() => {}}>Edit</Button>
                  ) : (
                    getKeyValue(item, column.key)
                  )}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
