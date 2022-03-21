import React from 'react'

import { Card } from '../../General/Card'
import { IMAGE, HEADER, TEXT } from '../../../consts/MainComponents/home'

import './Home.css'

export const Home = () => {
    return (
        <div className='centerRow'>
            <Card image={IMAGE} header={HEADER} text={TEXT} />
        </div>)
}