"use client"

import { siteConfig } from "@/config/site.config";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export const Logo = () => {
  return (
   <Image src="/logo.webp" alt={siteConfig.title} width={25} height={25} priority/>
  );
};

export default function Header() {
  const pathname = usePathname();

  const getNavItems = () => {
    return (
      siteConfig.navItems.map(link => {
        const isActive = pathname === link.href
        return (
          <NavbarItem  key={link.href}>
            <Link color="foreground" className={`px-3 py-1 ${isActive ? "text-blue-500" : "text-foreground"} hover:text-blue-300 hover:border hover:border-blue-300 hover:rounde4d-md transition-colors transition-border duration-200`} href={link.href}>
              {link.label}
            </Link>
          </NavbarItem>
        )
      })
    )
  }

  return (
    <Navbar>
      <NavbarBrand>

        <Link href='/' className="flex gap-3 items-center">
          <Logo />
          <p className="font-bold text-inherit">Zakuska</p>
        </Link>
        
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Логин</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
           Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
