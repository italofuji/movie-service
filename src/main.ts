import express, { Request, Response } from "express"

const app = express()
const port = 8080

app.use(express.json())

app.get("/", (_request: Request, response: Response) => {
  response.status(200).json({ message: "hello" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
