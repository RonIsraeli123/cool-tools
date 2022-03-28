import React from 'react'

import { Card } from '../../../General/index'
import { Content as ContentInvest } from './Content'
import { IMAGE, HEADER, TEXT } from '../../../../consts/tools/Invest/InvestAverage'

import './Invest.css'

export const AverageStockPrice = () => {
    return (
        <div className='centerRow'>
            <Card image={IMAGE} header={HEADER} text={TEXT} itemContent={<ContentInvest />} />
        </div>
    )
}
