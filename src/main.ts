import express from "express"

const app = express()
const port = 8080
const OK = 200

app.use(express.json())

app.get("/", (_request, response) => {
  response.status(OK).json({ message: "hello" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
