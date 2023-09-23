import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftData from '../data/gifts.js'

// what is the double underscore mean? 
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// why do we do stuff with the homepath here instead of say in a home.js file? 
router.get('/', (req, res) => {
    res.status(200).json(giftData)
})

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router;