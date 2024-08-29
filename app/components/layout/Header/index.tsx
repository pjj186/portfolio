"use client";

import React from "react";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { AiOutlineGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

const LinkItems = [
  "Introduce.",
  "Experience.",
  "Projects.",
  "Skill.",
  "Certificate.",
];

const Header = () => {
  return (
    <Navbar shouldHideOnScroll className=' border-b-1 border-b-gray-500'>
      <NavbarBrand>
        <p className='font-bold text-inherit'>PARK JONG JAE</p>
      </NavbarBrand>
      <NavbarContent className='flex gap-6' justify='center'>
        {LinkItems.map((item) => (
          <NavbarItem key={item}>
            <Link color='foreground' href={`#${item}`}>
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className='flex' justify='end'>
        <NavbarItem>
          <Button
            isIconOnly
            as={"a"}
            variant='bordered'
            target='_blank'
            href='https://velog.io/@pjj186/posts'
          >
            <SiVelog size={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            isIconOnly
            as={"a"}
            variant='bordered'
            target='_blank'
            href='https://github.com/pjj186'
          >
            <AiOutlineGithub size={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default React.memo(Header);
