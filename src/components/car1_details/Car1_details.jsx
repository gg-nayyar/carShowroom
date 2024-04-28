'use client'
import { Scroll } from '@react-three/drei'
import React from 'react'
import * as styles from './Car1.module.css'

const Car1_details = () => {
    const Section = (props)=>{
        return(
            <div>
                <div className={styles.container}>
                    <div className={styles.container2}>
                        <div className={styles.container3}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
  return (
    <Scroll html>
        <Section>
            <h1 className={styles.textColor}>Welcome to CarBarn</h1>
            <p style={{margin:0,padding:0 }}>The World's best garage to buy cars from </p>
            <p style={{margin:0,padding:0 }}>Here you can choose from world's best cars</p>
        </Section>
        <Section right><h1 className={styles.textColor}>Hello world</h1></Section>
        <Section><h1 className={styles.textColor}>Hello world</h1></Section>
    </Scroll>
  )
}

export default Car1_details
