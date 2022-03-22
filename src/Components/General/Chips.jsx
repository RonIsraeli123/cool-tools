import * as React from 'react';
import ChipMaterial from '@mui/material/Chip';

import './General.css'

export const Chips = (props) => {

    return (
        <div className="chipList">
            {
                props.invests.map((data) => {
                    return (
                        <div key={data.key}>
                            <ChipMaterial
                                label={`Invest Money:${data.money}, Stock Price:${data.stockPrice}`}
                                onDelete={props.handleDeleteChip(data)}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}
