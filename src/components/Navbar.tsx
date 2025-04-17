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

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="full" position="sticky" className="flex justify-between items-end">
      <NavbarContent>
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
            <Logo />
            <p className="font-bold text-inherit">MemeHub</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-end" justify="end">
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: 'foreground' }),
                'data-[active=true]:text-primary data-[active=true]:font-medium',
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
                color={
                  index === 2 ? 'primary' : index === navItems.length - 1 ? 'danger' : 'foreground'
                }
                href={item.href}
                size="lg"
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
