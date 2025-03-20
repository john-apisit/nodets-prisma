import express, {Request, Response} from 'express'

const app = express()
const PORT = process.env.PORT ?? 3000

// Middleware
app.use(express.json())

// Routes



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
