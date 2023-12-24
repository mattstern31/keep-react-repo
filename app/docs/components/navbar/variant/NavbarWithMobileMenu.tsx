'use client'
import { Navbar } from '../../../../src'
import { CaretDown } from 'phosphor-react'
import Image from 'next/image'

const NavbarWithMobileMenu = () => {
  return (
    <Navbar fluid={true} className="!py-5">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <Image src="/images/keep.svg" alt="keep" width="100" height="40" />
        </Navbar.Brand>
        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 md:!w-1/2 lg:!w-2/6 xl:!w-1/6">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" icon={<CaretDown size={20} />} className="!py-0" />
            <Navbar.Link linkName="Projects" icon={<CaretDown size={20} />} className="!py-0" />
            <Navbar.Link linkName="Blogs" icon={<CaretDown size={20} />} className="!py-0" />
            <Navbar.Link linkName="News" className="!py-0" />
            <Navbar.Link linkName="Resources" className="!py-0" />
          </Navbar.Container>
        </Navbar.Collapse>
        <Navbar.Container className="flex gap-1">
          <Navbar.Toggle className="block" />
          Menu
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  )
}

const NavbarWithMobileMenuCode = `
"use client";
import { Navbar } from "keep-react";
import { CaretDown } from "phosphor-react";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="!py-5">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <Image
            src="/images/keep.svg"
            alt="keep"
            width="100"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link
              linkName="Home"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link
              linkName="Projects"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link
              linkName="Blogs"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link linkName="News" className="!py-0" />
            <Navbar.Link linkName="Resources" className="!py-0" />
          </Navbar.Container>
        </Navbar.Collapse>
        <Navbar.Container className="flex gap-1">
          <Navbar.Toggle className="block" />
          Menu
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
`

export { NavbarWithMobileMenu, NavbarWithMobileMenuCode }
