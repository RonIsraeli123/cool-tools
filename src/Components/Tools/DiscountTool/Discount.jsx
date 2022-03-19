import React from 'react'

import { Card } from '../../General/index'
import { Content as ContentDiscount } from './CalcPrice/Content'
import { IMAGE, HEADER, TEXT } from '../../../consts/tools/Discount'

import './Discount.css'

export const Discount = () => {
    return (
        <div className='centerRow'>
            <Card image={IMAGE} header={HEADER} text={TEXT} itemContent={<ContentDiscount />} />
        </div>
    )
}
