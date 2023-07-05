import { About } from '@components/About'
import { Contacts } from '@components/Contacts'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='content-wrapper'>
      <About/>
      <Contacts/>
    </main>
  )
}
