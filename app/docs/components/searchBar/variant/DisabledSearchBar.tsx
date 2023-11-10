'use client'
import { SearchBar } from '~/src'
import { MagnifyingGlass } from 'phosphor-react'

const DisabledSearchBar = () => {
  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      disabled={true}
    />
  )
}

const DisabledSearchBarCode = `
"use client";
import { SearchBar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";

export const SearchBarComponent = () => {
  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      disabled={true}
    />
  );
}
`

export { DisabledSearchBar, DisabledSearchBarCode }
