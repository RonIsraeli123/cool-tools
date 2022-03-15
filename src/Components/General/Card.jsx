import * as React from 'react';
import CardMaterial from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './General.css'

export const Card = (props) => {
    return (
        <div className='centerColumn'>
            <CardMaterial sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.image}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography className='center' gutterBottom variant="h5" component="div">
                        {props.header}
                    </Typography>
                    <Typography className='center' variant="body2" color="text.secondary">
                        {props.text}
                    </Typography>
                    <div className='margin'>
                        {props.itemContent}
                    </div>
                </CardContent>
            </CardMaterial >
        </div>
    );
}
