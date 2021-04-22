import React from 'react'
import Link from 'next/link'
import Image from '../Image'

const Menu = () => {

  return (
    <React.Fragment>
      <div className="flex justify-center m-2 ">
        <div><Image /></div>

      </div>
      <div className='flex justify-center p-2 m-2 md:ml-10 md:pr-4 md:space-x-4 mx-auto'>

        <Link href='/' className='text-sm px-3 py-2 rounded-md'><a className='hover:text-green-600'>Home</a></Link>
        <Link href='/contato' className='text-sm px-3 py-2 rounded-md '><a className='hover:text-green-600'>Contato</a></Link>
        <Link href='/pesquisa' className='text-sm px-3 py-2 rounded-md '><a className='hover:text-green-600'>Pesquisa</a></Link>
        <Link href='/sobre' className='text-sm px-3 py-2 rounded-md '><a className='hover:text-green-600'>Sobre</a></Link>



      </div>
    </React.Fragment>
  )
}

export default Menu

