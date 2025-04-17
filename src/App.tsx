import { Navigate, Route, Routes } from 'react-router-dom'

import { MemesTable } from './pages/MemesTable.tsx'
import { HeroProvider } from '@/Provider.tsx'
import { RoutesEnum } from '@/utils/enums/routes.enum.ts'
import { MemesList } from '@/pages/MemesList.tsx'

function App() {
  return (
    <HeroProvider>
      <Routes>
        <Route path="/" element={<Navigate to={RoutesEnum.MemesTable} replace />} />
        <Route element={<MemesTable />} path={RoutesEnum.MemesTable} />
        <Route element={<MemesList />} path={RoutesEnum.MemesList} />
      </Routes>
    </HeroProvider>
  )
}

export default App
