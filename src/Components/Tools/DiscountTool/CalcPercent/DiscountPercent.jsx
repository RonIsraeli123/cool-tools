import React from 'react'

import { Card } from '../../../General/Card'
import { Content as Percent } from './Content'
import { IMAGE, HEADER, TEXT } from '../../../../consts/tools/Discount/DiscountPercent'

import './Discount.css'

export const DiscountPercent = () => {
    return (
        <div className='centerRow'>
            <Card image={IMAGE} header={HEADER} text={TEXT} itemContent={<Percent />} />
        </div>
    )
}
