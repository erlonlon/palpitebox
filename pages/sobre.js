import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'


const Sobre = () => {

  return (
    <>
      <PageTitle title='Sobre' />
      <h1>Sobre o Sistema</h1>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>


  )
}

export default Sobre