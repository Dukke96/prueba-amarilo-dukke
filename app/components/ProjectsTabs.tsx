'use client';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import FeaturedProjectCard from './FeaturedProjectCard';
import FeaturedCityCard from './FeaturedCityCard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProjectsTabs() {
  let [categories] = useState({
    ProyectosDestacados: [
      {
        id: 1,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_1/public/proyectos/2023-11/render-proyecto-guayacanes-1.webp?itok=8gtyYIzw',
        price: '$ 949.900.000',
        logo: 'https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/logo-guayacanes-1.webp',
        city: 'Medellín',
        title: 'Guayacanes - Jardines del Río',
        address: 'Cl. 17 #43F - 122',
      },
      {
        id: 2,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_1/public/proyectos/2023-11/render-proyecto-saman-lobby.webp?itok=KPtZjz11',
        price: '$ 556.700.000',
        logo: 'https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/logo-saman-1.webp',
        city: 'Medellín',
        title: 'Samán - Jardines del Río',
        address: 'Cl. 17 #43F - 122',
      },
      {
        id: 3,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_1/public/proyectos/2023-11/render-lira-piscina.webp?itok=dr57XKPx',
        price: '$ 365.260.000',
        logo: 'https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/logo-lira-1.webp',
        city: 'Barranquilla',
        title: 'Lira - Alameda del Río',
        address: 'Avenida circunvalar entre cra 38 y 46',
      },
      {
        id: 4,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_1/public/proyectos/2023-11/fachada-alicante-render.webp?itok=zcYmcFu1',
        price: '$ 215.037.000',
        logo: 'https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/LOGO-ALICANTE.webp',
        city: 'Bogotá',
        title: 'Alicante - Hacienda el Otoño',
        address: 'Calle 201 # 49-33, Bogotá',
      },
    ],
    CiudadesDestacadas: [
      {
        id: 1,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_4/public/terms/2023-04/amatista_-_alameda_del_ri%CC%81o_amatista-amarilo-aprovecha-aptos-en-colombia-nuevos-proyecto-b.png?itok=5C8Fim5p',
        city: 'Barranquilla',
      },
      {
        id: 2,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_4/public/terms/2023-08/bogota-proyectos-destacados.png?itok=__EYHhhA',
        city: 'Bogotá',
      },
      {
        id: 3,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_4/public/terms/ciudades/cartagena.jpg?itok=4JTpccbP',
        city: 'Cartagena',
      },
      {
        id: 4,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_4/public/terms/2023-11/imagen-ciudad-medellin.webp?itok=EAsQ-mxO',
        city: 'Medellín',
      },
    ],
    GrandesDesarrollos: [
      {
        id: 1,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_4/public/2023-08/Rectangle%2045.png?itok=QULmlIoZ',
        project: 'Parque Heredia',
      },
      {
        id: 2,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_4/public/2023-08/Rectangle%2045%20%281%29.png?itok=iJW2uOQb',
        project: 'San Antonio',
      },
      {
        id: 3,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_4/public/terms/2023-08/Rectangle%2045%20%282%29.png?itok=4iDtvzUG',
        project: 'Alameda del Río',
      },
      {
        id: 4,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_4/public/2023-08/Rectangle%2045%20%283%29.png?itok=zZlnPI0J',
        project: 'Lagos de Torca',
      },
    ],
    EntregaInmediata: [
      {
        id: 1,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_1/public/proyectos/2023-11/render-proyecto-guayacanes-1.webp?itok=8gtyYIzw',
        price: '$ 949.900.000',
        logo: 'https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/logo-guayacanes-1.webp',
        city: 'Medellín',
        title: 'Guayacanes - Jardines del Río',
        address: 'Cl. 17 #43F - 122',
      },
      {
        id: 2,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_1/public/proyectos/2023-11/render-proyecto-saman-lobby.webp?itok=KPtZjz11',
        price: '$ 556.700.000',
        logo: 'https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/logo-saman-1.webp',
        city: 'Medellín',
        title: 'Samán - Jardines del Río',
        address: 'Cl. 17 #43F - 122',
      },
      {
        id: 3,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_1/public/proyectos/2023-11/render-lira-piscina.webp?itok=dr57XKPx',
        price: '$ 365.260.000',
        logo: 'https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/logo-lira-1.webp',
        city: 'Barranquilla',
        title: 'Lira - Alameda del Río',
        address: 'Avenida circunvalar entre cra 38 y 46',
      },
      {
        id: 4,
        image:
          'https://media1.amarilo.com.co/website/s3fs-public/styles/sc_1/public/proyectos/2023-11/fachada-alicante-render.webp?itok=zcYmcFu1',
        price: '$ 215.037.000',
        logo: 'https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/LOGO-ALICANTE.webp',
        city: 'Bogotá',
        title: 'Alicante - Hacienda el Otoño',
        address: 'Calle 201 # 49-33, Bogotá',
      },
    ],
  });

  function addSpacesToCamelCase(text) {
    return text.replace(/([A-Z])/g, ' $1').trim();
  }

  return (
    <div className="w-full px-2 py-36 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 outline-none">
          {Object.keys(categories).map(category => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 outline-none',
                  'outline:none',
                  selected
                    ? 'bg-amber-400 text-slate-700 outline:none shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white outline-none'
                )
              }
            >
              {addSpacesToCamelCase(category)}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.entries(categories).map(([categoryName, posts], idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl p-3',
                'outline:none'
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {posts.map(post => {
                  // Decide qué componente usar basado en el nombre de la categoría
                  if (
                    categoryName === 'CiudadesDestacadas' ||
                    categoryName === 'GrandesDesarrollos'
                  ) {
                    return (
                      <FeaturedCityCard
                        key={post.id}
                        image={post.image}
                        title={post.city || post.project} // Usa 'city' o 'project' dependiendo de la estructura de tus datos
                      />
                    );
                  } else {
                    return (
                      <FeaturedProjectCard
                        key={post.id}
                        image={post.image}
                        logo={post.logo}
                        title={post.title}
                        price={post.price}
                        city={post.city}
                        address={post.address}
                      />
                    );
                  }
                })}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
