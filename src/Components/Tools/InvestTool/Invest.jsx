import React from 'react'

import { Card } from '../../General/index'
import { Content as ContentInvest } from './CalcEarn/Content'
import { IMAGE, HEADER, TEXT } from '../../../consts/tools/Invest'

import './Invest.css'

export const Invest = () => {
    return (
        <div className='centerRow'>
            <Card image={IMAGE} header={HEADER} text={TEXT} itemContent={<ContentInvest />} />
            <Card image={IMAGE} header={HEADER} text={TEXT} itemContent={<ContentInvest />} />
        </div>
    )
}
