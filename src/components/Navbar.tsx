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
import { link as linkStyles } from '@heroui/theme'
import clsx from 'clsx'

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
              className={clsx(
                linkStyles({ color: item.href === location.pathname ? 'primary' : 'foreground' }),
                'data-[active=true]:text-primary data-[active=true]:font-bold',
              )}
              color="foreground"
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
      </NavbarContent>

      <NavbarMenu className="sm:hidden">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <Link
                className={clsx(
                  'text-lg',
                  item.href === location.pathname
                    ? 'accent-primary font-bold'
                    : 'text-white hover:text-gray-300',
                )}
                href={item.href}
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
