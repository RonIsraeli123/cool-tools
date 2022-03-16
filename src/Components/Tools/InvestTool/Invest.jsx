import React from 'react'

import { Card } from '../../General/index'
import { Content as ContentInvest } from './Content'
import { IMAGE, HEADER, TEXT } from '../../../consts/tools/Invest'

export const Invest = () => {
    return (
        <div>
            <Card image={IMAGE} header={HEADER} text={TEXT} itemContent={<ContentInvest />} />
        </div>
    )
}
