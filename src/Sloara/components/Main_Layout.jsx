import React from 'react'
import Navbar from './Header'
// import {Section_One} from './Hero_Section'
import { Section_Two } from './Section_Two'
import { Section_Three } from './Section_Three'
import { Section_Four } from './Section_Four'
import { Section_Five } from './Section_Five'
import { Section_Six } from './Section_Six'
import Section_One from './Section_One'

export default function Main_Layout() {
  return (
    <>
  
      <Navbar />
      < Section_One />
      < Section_Two />
      < Section_Three />
      <Section_Four />
      <Section_Five />
      <Section_Six />

    </>
  )
}
