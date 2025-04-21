import { Link } from '@heroui/link'
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar'

import { Logo } from '@/components/icons'
import { navItems } from '@/utils/nav-items.ts'
import { ThemeSwitch } from '@/components/ThemeSwitch.tsx'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
  const location = useLocation()

  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      className="flex justify-between items-end"
      isBordered
      height="3.5rem"
    >
      <NavbarContent>
        <NavbarBrand className="gap-3 max-w-fit">
          <div className="flex justify-start items-center gap-1">
            <Logo />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-end" justify="end">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.href === location.pathname}>
            <Link
              color={item.href === location.pathname ? 'primary' : 'foreground'}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem className="flex align-middle">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex sm:hidden" justify="end">
        <NavbarMenuToggle />
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu className="sm:hidden">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <Link
                href={item.href}
                color={item.href === location.pathname ? 'primary' : 'foreground'}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
