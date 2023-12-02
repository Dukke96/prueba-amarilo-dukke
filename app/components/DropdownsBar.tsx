'use client';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const cities = [
  { name: 'Bogotá' },
  { name: 'Medellín' },
  { name: 'Cartagena' },
  { name: 'Barranquilla' },
  { name: 'Guasca' },
  { name: 'Cota' },
];

const areas = [
  { name: '0 - 40' },
  { name: '40 - 60' },
  { name: '60 - 80' },
  { name: '80 - 100' },
  { name: 'Más de 100' },
];

const rooms = [
  { name: '1' },
  { name: '2' },
  { name: '3' },
  { name: '4' },
  { name: 'Más de 4' },
];

export default function DropdownsBar() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState(null);

  return (
    <div className="flex w-fit mx-auto flex-col justify-center mt-52">
      <div className="text-3xl font-bold">
        <p>
          Creamos espacios <br />
          Tu próximo hogar está aquí
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <div className=" w-fit min-w-[382px]">
          <Listbox value={selectedCity} onChange={setSelectedCity}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full rounded-l-full bg-white hover:bg-amber-400 cursor-pointer py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-slate-700 text-lg text-center font-semibold">
                  {selectedCity?.name
                    ? selectedCity?.name
                    : 'Busca la ciudad en la que quieres vivir'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {cities.map((city, cityIdx) => (
                    <Listbox.Option
                      key={cityIdx}
                      className={({ active }) =>
                        `cursor-default select-none py-2 pl-10 pr-4 w-full ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={city}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {city.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="w-fit min-w-[135px]">
          <Listbox value={selectedArea} onChange={setSelectedArea}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-pointer bg-white hover:bg-amber-400 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-center text-slate-700 text-lg font-semibold">
                  {selectedArea?.name ? selectedArea?.name : `Area (m\u00B2)`}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {areas.map((area, areaIdx) => (
                    <Listbox.Option
                      key={areaIdx}
                      className={({ active }) =>
                        `cursor-default select-none py-2 pl-10 pr-4 w-full ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={area}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {area.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="w-fit min-w-[382px]">
          <Listbox value={selectedRooms} onChange={setSelectedRooms}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-pointer bg-white hover:bg-amber-400 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-center text-slate-700 text-lg font-semibold">
                  {selectedRooms?.name
                    ? selectedRooms?.name
                    : 'Selecciona el número de habitaciones '}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {rooms.map((room, roomIdx) => (
                    <Listbox.Option
                      key={roomIdx}
                      className={({ active }) =>
                        `cursor-default select-none py-2 pl-10 pr-4 w-full ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={room}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {room.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div className='font-bold'>
          <button className="flex h-full max-h-[44px] my-auto justify-center min-w-[100px] items-center bg-amber-400 mt-1 text-lg text-slate-700 rounded-r-full">Buscar</button>
        </div>
      </div>
    </div>
  );
}
