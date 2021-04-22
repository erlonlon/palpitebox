import React from 'react'
import styles from './styles.module.css'
import Image from '../Image'
import Link from 'next/link'
import Menu from '../Menu'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Menu />
        </div>
      </div>

    </React.Fragment>
  )
}
export default Header