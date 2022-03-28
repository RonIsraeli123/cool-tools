import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Content.css'


export const Content = () => {
    const [firstDiscount, setFirstDiscount] = useState('')
    const [secondDiscount, setSecondDiscount] = useState('')
    const [result, setResult] = useState('')

    const validation = () => {
        if (firstDiscount <= 0 || firstDiscount >= 100)
            throw new Error("first discount price must be bigger than 0% and less than 100%")
        if (secondDiscount <= 0 || secondDiscount >= 100)
            throw new Error("second discount price must be bigger than 0% and less than 100%")
    }

    const calcDiscount = () => {
        try {
            validation()
            const result = parseFloat(firstDiscount) + ((100 - parseFloat(firstDiscount)) / 100 * parseFloat(secondDiscount))
            setResult(result)
            setFirstDiscount(result)
            setSecondDiscount('')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='calculator'>
            <TextField onChange={(e) => { setFirstDiscount(e.target.value) }} label="First Discount" color="secondary" type="number" value={firstDiscount} focused />
            <TextField onChange={(e) => { setSecondDiscount(e.target.value) }} label="Second Discount" color="secondary" type="number" value={secondDiscount} focused />
            <Button onClick={calcDiscount} variant="contained">Calculate</Button>
            {result ?
                <h4>
                    total discount percent - {result}
                </h4> :
                ''
            }

        </div>
    )
}
