import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Dropdown() {
    return (
      <div className="w-50 mr-4 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div className="">
            <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-base text-extrabold font-bold text-black   hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              About Us
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-green-600' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-base text-extrabold`}
                    >
                      
                      FAQs
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-green-600' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-base text-extrabold`}
                    >
                      
                      What's In Your Box
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-green-600' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-base text-extrabold`}
                    >
                      
                      Our Sourcing
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-green-600' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-base text-extrabold`}
                    >
                      
                      Eco-friendly Packaging
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-green-600' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-base text-extrabold`}
                    >
                      
                      Join Our Waitlist
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-green-600' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-base text-extrabold`}
                    >
                      
                      Blog
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-green-600' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-base text-extrabold`}
                    >
                      
                      The Mistfits Journey
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-green-600' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-base text-extrabold`}
                    >
                      
                      Careers
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
  }
  