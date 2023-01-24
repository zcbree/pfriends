import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import background from '@/images/pigeons.jpg'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
       P.{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <span className="relative">Friends</span>
        </span>
      </h1>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Get yo bird on</Button>
      </div>
    </Container>
  )
}
