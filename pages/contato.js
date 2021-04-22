import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (

    <>
      <PageTitle title='Contato' />
      <h1>Contato</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  )
}

export default Contato