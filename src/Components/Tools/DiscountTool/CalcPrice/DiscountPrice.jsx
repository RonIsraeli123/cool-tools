import React from 'react'

import { Card } from '../../../General/Card'
import { Content as Price } from './Content'
import { IMAGE, HEADER, TEXT } from '../../../../consts/tools/Discount/DiscountPrice'

import './Discount.css'

export const DiscountPrice = () => {
    return (
        <div className='centerRow'>
            <Card image={IMAGE} header={HEADER} text={TEXT} itemContent={<Price />} />
        </div>
    )
}
