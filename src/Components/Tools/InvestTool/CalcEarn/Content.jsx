import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { CalcStockChange } from '../../../../Algorithm/Invest/ClaclEarn'
import './Content.css'


export const Content = () => {
    const [moneyAmount, SetMoneyAmount] = useState('')
    const [stockPurchasePrice, setStockPurchasePrice] = useState('')
    const [salePrice, setSalePrice] = useState('')
    const [result, setResult] = useState('')

    const validation = () => {
        if (moneyAmount <= 0)
            throw new Error("Money amount must be bigger than 0")
        if (stockPurchasePrice <= 0 || salePrice <= 0)
            throw new Error("Stock purchase price and sale price must be bigger than 0")
    }

    const calcEarn = () => {
        try {
            validation()
            const result = CalcStockChange(stockPurchasePrice, salePrice, moneyAmount)
            setResult(result)
            SetMoneyAmount(result)
            setStockPurchasePrice('')
            setSalePrice('')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='calculator'>
            <TextField onChange={(e) => { SetMoneyAmount(e.target.value) }} label="Money Amount" color="secondary" type="number" value={moneyAmount} focused />
            <TextField onChange={(e) => { setStockPurchasePrice(e.target.value) }} label="Stock Purchase Price" color="secondary" type="number" value={stockPurchasePrice} focused />
            <TextField onChange={(e) => { setSalePrice(e.target.value) }} label="Sale Price" color="secondary" type="number" value={salePrice} focused />
            <Button onClick={calcEarn} variant="contained">Calculate</Button>
            {result ?
                <h4>
                    total money after sale (without taxes) - {result}
                </h4> :
                ''
            }

        </div>
    )
}
