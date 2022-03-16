const express = require('express');
const ExpressError = require('./expressError')
const app = express();

app.get('/mean', (req, res) => {
    try {
        const { nums } = req.query
        let l = nums.split(",")
        let result = 0
        let count = 0
        for (var num in l) {
            result = result + Number(l[num])
            count++
        }
        result = result / count

        return res.json(`response:{operation:'mean',value:${result}}`)
    } catch {
        res.send('error')
    }
})

app.get('/median', (req, res) => {
    try {
        const { nums } = req.query
        let l = nums.split(",")
        let count = 0
        for (var num in l) {
            count++
        }
        if (count % 2 == 1) {
            half = Math.floor(count / 2) + 1
            result = l[half - 1]
        } else {
            half = count / 2
            result = (Number(l[half - 1]) + Number(l[half])) / 2
        }

        return res.json(`response:{operation:'median',value:${result}}`)
    } catch {
        res.send('error')
    }
})

app.get('/mode', (req, res) => {
    try {
        const { nums } = req.query
        let l = nums.split(",")
        let count = 0
        let result = 0
        let base = 0
        for (var num in l) {
            base = l.filter(x => x === l[num]).length
            count = Math.max(count, base)
            if (count === base) {
                result = l[num]
            }
        }


        return res.json(`response:{operation:'mode',value:${result}}`)
    } catch {
        res.send('error')
    }
})

app.listen(3000, function() {
    console.log('App on part 3000');
})