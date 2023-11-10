'use client'
import { Breadcrumb } from '~/src'
import { ArrowsLeftRight, House } from 'phosphor-react'

const BreadcrumbWithSeparatorIcon = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<ArrowsLeftRight size={20} color="#AFBACA" />}>
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="base" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<ArrowsLeftRight size={20} color="#AFBACA" />}>
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="border" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<ArrowsLeftRight size={20} color="#AFBACA" />}>
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="bar" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

const BreadcrumbWithSeparatorIconCode = `
"use client";
import { Breadcrumb } from "keep-react";
import { ArrowsLeftRight, House } from "phosphor-react";

export const BreadcrumbComponent = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<ArrowsLeftRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Breadcrumb Item
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="base" href="#">
          Breadcrumb item
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<ArrowsLeftRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Breadcrumb Item
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="border" href="#">
          Breadcrumb item
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<ArrowsLeftRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Breadcrumb Item
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="bar" href="#">
          Breadcrumb item
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
`

export { BreadcrumbWithSeparatorIcon, BreadcrumbWithSeparatorIconCode }
