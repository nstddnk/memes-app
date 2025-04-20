import { Navbar } from '../components/Navbar.tsx'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8">{children}</main>
    </div>
  )
}
