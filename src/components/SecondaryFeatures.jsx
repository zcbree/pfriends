import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import background from '@/images/lookit.jpeg'

const features = [
  {
    name: 'Frodo Baggins',
    description:
      'Soaring through Rohan on his journey to Mordor, Frodo Pigeon is worn down and disheveled. His malnutrition and gloomy outlook will not disrupt his un-flappable optimism on his journey.',
    image: screenshotProfitLoss,

  },
  {
    name: 'Gandalf the (gray) band-tail',
    description:
      'Deep in the mines of Moria, Gandalf the Gray Band-Tailed Pigeon is preparing to fend off Balrog “The Great Pigeon Destroyer”. Battle-worn and fatigued, Gandalf the Gray Band-Tailed Pigeon rises to the occasion – “Koooo Shall Not Pass”',
    image: screenshotInventory,

  },
  {
    name: 'Sauron',
    description:
    "The black imperial pigeon makes a series of three low-pitched booming notes, along with grunts and a hornbill-like arh. A very deep mmmmmmmmmmmmmmm has also been reported",
    image: screenshotContacts,

  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}


function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none text-lg">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 sm:pb-20 lg:pb-22"
    >
      <Container>
        <div className="mx-auto max-w-4xl md:text-center">
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Launching in Q4 2023, Topps P.Friends Chrome takes all the best-in-class chromium luxury of Topps Chrome cards and blows it out to wonderfully plump proportions. The inaugural base set of 200 cards blends classical and modern breeds that are printed on premium chromium paper with out-of-the-sky colors and details redolent of the other-birdly talent of the pigeons featured on the cards.
          </p>
        </div>
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
