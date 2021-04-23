import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (

    <>
      <PageTitle title='Contato' />
      <div className="container mx-auto px-4 m-4">
        <div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-4xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src="/contact.svg" alt="Info Automação" />
            </div>
            <div class="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Erlon Gomes</div>
              <a href="/contato"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Desenvolva seu Site ou Sistema na Info Automação</a>
              <p className="mt-2 text-gray-500">Desenvolvedor de Sistemas Web.</p>
              <p className="mt-2 text-gray-500">Tecnologias da Stack.</p>
              <p className="mt-2 text-gray-500">NodeJs.</p>
              <p className="mt-2 text-gray-500">NextJs.</p>
              <p className="mt-2 text-gray-500">ReactJS.</p>
              <p className="mt-2 text-gray-500">Git.</p>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default Contato