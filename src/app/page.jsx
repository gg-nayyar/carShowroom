import React from 'react';
import Car1 from '../components/car1/Car1.jsx';
import Header from '@/components/header/Header.jsx';
import styles from './home.module.css'

const page = () => {
  return (
    <div className={styles.container}>
      <Header />
        <Car1 />
    </div>
  )
}

export default page