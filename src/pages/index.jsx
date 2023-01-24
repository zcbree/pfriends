import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import gandolf from '@/images/bird.jpg'
import gallum from '@/images/gollum.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lord of the Wings</title>
        <meta
          name="description"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <div className='flex justify-between items-center gap-x-3 px-12'>
          <div className="lg:w-1/2 sm:w-full flex justify-between gap-x-3">
          <div>
            <div className="mx-auto shadow-sm rounded-md">
               <Image className="w-11/12" alt="ganddolf" src={gandolf}/>
            </div>
            <p className="italic text-sm py-2">Lord of the Wings Insert</p>
            </div>
            <div>
            <div className="mx-auto shadow-sm rounded-md">
               <Image className="w-11/12" alt="ganddolf" src={gallum}/>
            </div>
            <p className="italic text-sm py-2">Golem Pigeon</p>
            </div>
            
          </div>
          <div className="lg:w-1/2 sm:w-full">
            <h3 className="font-semibold text-2xl">
              Chase Cards
            </h3>
            <h4 className="italic">Inserts</h4>
            <div className="mt-3">
              <p><span className="font-semibold">"Homing-In"</span>– Art-deco stylized Pigeon insert cards demonstrating the genetic homing talents of various pigeon species.</p>
            </div>
            <div className="mt-3">
              <p><span className="font-semibold">“Wonderfully Plump” </span>– – Cartoon-ized design illustrating the plump brilliance of the pigeon.</p>
            </div>
            <div className="mt-3">
              <p><span className="font-semibold">"Downtown"</span>– – Realistic images of pigeons in their metropolitan homes showcasing the squabs of birbs dominating their urban domains.</p>
            </div>
            <div className="mt-3">
              <p><span className="font-semibold">"Birds of a Feather (Relic Cards)"</span>– – Ethically sourced Pigeon feather relic cards printed on a thick quality stock.</p>
            </div>
            <div className="mt-3">
              <p><span className="font-semibold">"Lord of the Wings"</span>– Hand drawn beautiful 1:1 sketch cards featuring pigeons stylized as your favorite lord of the rings charters, such as: Gandalf, Legolas, Sauron, Frodo, etc</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}