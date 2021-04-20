import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import first from './images/Header.svg'
const navigation = [
  { name: 'Products', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Resources', href: '#' },
]

export default function Example() {
  return (
    <Popover className="relative overflow-hidden color1 text-white font-bold">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
             
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href=".">
                      <div className="items-center flex justify-center h-10 w-10 rounded bg-red-600">
                      <div className="h-6 w-6 rounded color1" aria-hidden="true" />
                  
                    </div>
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <p className="h-6 w-6" aria-hidden="true">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)', transform: '', msFilter: ''}}><path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z" /></svg>
                          </p>
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className=" ">
                        {item.name}
                      </a>
                    ))}
                    <a href="." className="">
                     
                    </a>
      
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md color1 ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                      <a href="." className="focus:outline-none border-0">
                      <div className="items-center flex justify-center h-10 w-10 rounded bg-red-600">
                      <div className="h-6 w-6 rounded color1" aria-hidden="true" />
                  
                    </div>
                      </a>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <p className="h-6 w-6" aria-hidden="true">      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)', transform: '', msFilter: ''}}><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" /></svg></p>
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base  text-gray-100 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="."
                      className="block w-full px-5 py-3 text-center  text-indigo-100 bg-blue-800 hover:bg-blue-900"
                    >
                     Get Started
                    </a>

                  </div>
                </Popover.Panel>
              </Transition>

              <main className="mt-10 mx-auto max-w- px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <p><span className="px-5 py-2 color2 rounded-full font-medium">What an idea | Give us idea | A heading</span></p>
                  <h1 className="mt-2 text-4xl tracking-wider font-extrabold  sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Easiest Solutions</span>{' '}
                    <span className="mt-2 block xl:inline">to manage Data    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 tracking-wider font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere pharetra lacus sit amet viverra. Curabitur at ex et risus finibus tempor.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="">
                      <a
                        href="."
                        className="focus:outline-none transition duration-150 ease-in-out bg-indigo-600 hover:bg-white hover:text-black px-8 py-3 text-base rounded font-medium"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="."
                        className="focus:outline-none transition duration-150 ease-in-out bg-blue-600 hover:bg-white hover:text-black px-8 py-3 text-base rounded font-medium"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={first}
              alt=""
            />
          </div>
        
        </>
      )}
    </Popover>
  )
}