const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require("./config/db");

connectDB()



app.use(express.json({extended: false}))
app.use(cors())

// api routes
app.use("/api/quotes", require("./routes/api/quotes"));




if (process.env.NODE_ENV === "production") {
  // static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))

