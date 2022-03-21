import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Chips } from '../../../General/Chips'
import { calcAveragePrice } from '../../../../Algorithm/CalcAverage'
import './Content.css'


export const Content = () => {
    const [moneyAmount, SetMoneyAmount] = useState('')
    const [stockPurchasePrice, setStockPurchasePrice] = useState('')
    const [invests, setInvests] = useState([])
    const [result, setResult] = useState('')
    const [counter, setCounter] = useState(0)

    const validationAdd = () => {
        if (moneyAmount <= 0)
            throw new Error("Money amount must be bigger than 0")
        if (stockPurchasePrice <= 0)
            throw new Error("Stock purchase price and sale price must be bigger than 0")
    }

    const validationCalc = () => {
        if (Object.keys(invests).length <= 0)
            throw new Error("Need to add invests before calculate")
    }

    const handleDeleteChip = (chipToDelete) => () => {
        setInvests((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const addInvest = () => {
        try {
            validationAdd()
            setInvests([...invests, { "key": counter, "money": moneyAmount, "stockPrice": stockPurchasePrice }]);
            setCounter(counter + 1)
            SetMoneyAmount('')
            setStockPurchasePrice('')
            setResult('')
        } catch (error) {
            alert(error.message)
        }
    }

    const calcAverage = () => {
        try {
            validationCalc()
            const result = calcAveragePrice(invests)
            setResult(result)
            SetMoneyAmount('')
            setStockPurchasePrice('')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='calculator'>
            <TextField onChange={(e) => { SetMoneyAmount(e.target.value) }} label="Money Amount" color="secondary" type="number" value={moneyAmount} focused />
            <TextField onChange={(e) => { setStockPurchasePrice(e.target.value) }} label="Stock Purchase Price" color="secondary" type="number" value={stockPurchasePrice} focused />
            {Object.keys(invests).length ?
                <Chips invests={invests} handleDeleteChip={(chipToDelete) => handleDeleteChip(chipToDelete)} />
                :
                ''
            }
            <Button onClick={addInvest} variant="contained">Add</Button>
            {Object.keys(invests).length ?
                <Button onClick={calcAverage} variant="contained">Calculate</Button>
                :
                ''
            }
            {result && Object.keys(invests).length ?
                <h4>
                    Stock Average Price - {result}
                </h4> :
                ''
            }

        </div>
    )
}
