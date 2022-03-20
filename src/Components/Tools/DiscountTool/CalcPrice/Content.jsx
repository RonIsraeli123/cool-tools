import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Content.css'


export const Content = () => {
    const [itemCost, setItemCost] = useState('')
    const [discount, setDiscount] = useState('')
    const [result, setResult] = useState('')

    const validation = () => {
        if (itemCost <= 0)
            throw new Error("item cost must be bigger than 0")
        if (discount <= 0 || discount >= 100)
            throw new Error("discount price must be bigger than 0% and less than 100%")
    }

    const calcDiscount = () => {
        try {
            validation()
            const result = itemCost - ((discount / 100) * itemCost)
            setResult(result)
            setItemCost(result)
            setDiscount('')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='calculator'>
            <TextField onChange={(e) => { setItemCost(e.target.value) }} label="item cost" color="secondary" type="number" value={itemCost} focused />
            <TextField onChange={(e) => { setDiscount(e.target.value) }} label="discount" color="secondary" type="number" value={discount} focused />
            <Button onClick={calcDiscount} variant="contained">Calculate</Button>
            {result ?
                <h4>
                    total cost after discount - {result}
                </h4> :
                ''
            }

        </div>
    )
}
