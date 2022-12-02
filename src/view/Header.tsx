import React from 'react'



const Header = () => {
  const features = [
    { name: 'Stan Lee', description: '-Stan Lee creó más de 300 personajes, que incluyen 179 villanos, 60 héroes, 30 razas alienígenas, 15 monstruos… Quizá quiso representar el Congreso de los Diputados.' },
    { name: 'Marvel Comics', description: '-Marvel Comics fue fundada por Martin Goodman en 1939, aunque nació con el nombre de Timely Comics. La compañía adquirió su nombre actual en 1961. Goodman editó a lo largo de su vida' },
    { name: 'uso exclusivo en la serie', description: '-Marvel patentó la palabra ‘zombie’ en 1975 para su uso exclusivo en la serie Tale of the Zombie. Esa patente duró hasta 1996.' },
    { name: 'El mejor superpoder', description: 'Eye-Scream. Se trata de un villano mutante cuya habilidad es poder transformarse en un helado de cualquier sabor.' },
  ]


  
  return (   
<div>
<div className="bg-stone-900">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-10 px-4 sm:px-6 sm:py-5 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">PERSONAJES DE MARVEL</h2>
          <p className="mt-4 text-gray-200 ">
          Además del universo Marvel principal hay más universos con los mismos personajes pero con diferentes características y orígenes, creados por la misma editorial pero sin ninguna relación con el universo Marvel principal. Por ejemplo: Ultimate Marvel, Marvel Zombies,
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-200">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://pm1.narvii.com/7006/5a487a176b4dbf243488ead0ae4f9931fe1283dcr1-652-720v2_hq.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="w-60 max-h-80 h-80 rounded-lg bg-gray-100"
          />
          <img
            src="https://i.pinimg.com/originals/34/b8/dd/34b8dd44e1b763cd987ae00b13945d7f.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="w-60 max-h-80 h-80 rounded-lg bg-gray-100"
          />
          <img
            src="https://i.pinimg.com/originals/2d/89/97/2d8997e5ad218e11ddd89577987b87c7.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="w-60 max-h-80 h-80 rounded-lg bg-gray-100"
          />
          <img
            src="https://i.pinimg.com/originals/f1/04/9d/f1049dd631f96193692aad319ae6bced.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="w-60 max-h-80 h-80 rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>

</div>
  )
}

export default Header