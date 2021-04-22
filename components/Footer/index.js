import React from 'react'
import Link from 'next/link'
import Image from '../Image'


const Footer = () => {

  return (
    <React.Fragment>
      <div className='bg-gray-800 text-white p-2 shadow-md'>
        <div className='container mx-auto'>
          <div className='flex justify-center'>
            <p className=''>Todos direitos reservados - 2021 - <a href='https://www.infoautomacao.com.br' target='_blank'>Info Automação</a></p>

          </div>
          <div className="flex justify-center m-2 p-4 ">


            <div className='w-18'>
              <img className='inline p-4' src='/logo.png' />

            </div>
            <div className='w-18 '>
              <img className='inline p-4' src='/full.png' />
            </div>
            <div className='w-18'>
              <img className='inline p-4' src='/dev.png' />
            </div>

          </div>





        </div>
      </div>

    </React.Fragment>




  )
}

export default Footer