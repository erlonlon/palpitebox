import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <>
      <PageTitle title='Home' />

      <div className='container mx-auto m-4'>
        <div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-4xl">
          <div className="flex justify-center py-4 ">
            <div className='bg-gray-800 text-white px-6 py-4 font-bold rounded-lg shadow-lg '>Sistema PalpiteBox</div>

          </div>

          <div className="flex justify-center py-4 text-center">
            <p>O Info Automação sempre busca por atender melhor seus clientes.<br></br>
            Por isso, estamos sempre aberto a ouvir sua opinião.
        </p>
          </div>

          <div className="flex justify-center p-4 text-center ">
            {!data && <p>Carregando Cupon...</p>}
            {!error && data && data.showCoupon &&
              <p className='px-10 py-4 font-bold bg-red-500 text-white rounded-md shadow-xl '>{data.message}</p>
            }
          </div>
          <div className="flex justify-center py-4 text-center">
            <Link href='/pesquisa'>
              <a className='px-6 py-4 font-bold bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-400'>Dar sua opinião ou sugestão</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index