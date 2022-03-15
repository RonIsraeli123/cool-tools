import React from 'react'

import { Card } from '../../General/index'
import { Content as ContentDiscount } from './Content'
import { IMAGE, HEADER, TEXT } from '../../../consts/tools/Discount'

export const Discount = () => {
    return (
        <div>
            <Card image={IMAGE} header={HEADER} text={TEXT} itemContent={<ContentDiscount />} />
        </div>
    )
}
