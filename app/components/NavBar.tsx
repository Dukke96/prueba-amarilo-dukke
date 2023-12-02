'use client';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';

const nosotros = [
  {
    name: 'Quiénes somos',
    description: 'Descubre más sobre nosotros',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Sostenibilidad',
    description: 'Comprometidos con el medio ambiente',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Amarilo te guía',
    description: 'Siempre diespuestos a ayudarte',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Ciudad dentro de la ciudad',
    description: 'Creamos entornos pensando en tí',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Amarilo plus',
    description: 'Descubre las ventajas de ser parte de nuestra comunidad',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const proyectos = [
  {
    name: 'Todos',
    description: 'Descubre todos los proyectos en venta a lo largo del país',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Grandes Desarrollos',
    description: 'Descubre nuestros proyectos mas ambiciosos',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Entrega Inmediata',
    description:
      'Descubre los proyectos que puedes adquirir de forma inmediata',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Bogotá',
    description: 'Descubre los proyectos que tenemos en la capital del país',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Medellín',
    description:
      'Descubre los proyectos que tenemos en la capital de Antioquia',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const herramientas = [
  {
    name: 'Calculadora de cuota inicial',
    description: 'Calcula la cuota inicial de tu futura vivienda',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Calculadora de crédito hipotecario',
    description: 'Calcula tu crédito hipotecario con nuestra herramienta',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Amarilo te guía',
    description:
      'Ponte en contacto con uno de nuestros asesores de manera virtual',
    href: '#',
    icon: FingerPrintIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="mx-auto h-[5.5rem] flex max-w-7xl items-center justify-between text-slate-200"
        aria-label="Global"
      >
        <div className="flex h-full lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-full" src="/Amarilo.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {/* Nosotros */}
          <Popover className="relative">
            <Popover.Button className="flex items-center outline-none gap-x-1 text-xl hover:text-amber-400 font-semibold leading-6">
              Nosotros
              <ChevronDownIcon
                className="h-5 w-5 flex-none hover:text-amber-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white text-slate-700 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {nosotros.map(item => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 group-hover:text-amber-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* Proyectos */}

          <Popover className="relative">
            <Popover.Button className="flex items-center outline-none gap-x-1 text-xl hover:text-amber-400 font-semibold leading-6">
              Proyectos en venta
              <ChevronDownIcon
                className="h-5 w-5 flex-none hover:text-amber-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white text-slate-700 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {proyectos.map(item => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 group-hover:text-amber-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* Herramientas */}

          <Popover className="relative">
            <Popover.Button className="flex items-center outline-none gap-x-1 text-xl hover:text-amber-400 font-semibold leading-6">
              Herramientas
              <ChevronDownIcon
                className="h-5 w-5 flex-none hover:text-amber-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white text-slate-700 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {herramientas.map(item => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 group-hover:text-amber-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amarilo</span>
              <img className="h-8 w-auto" src="/Amarilo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root text-slate-700">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Nosotros
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...nosotros].map(item => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Proyectos en venta
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...proyectos].map(item => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Herramientas
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...herramientas].map(item => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
