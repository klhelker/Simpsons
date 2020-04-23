const express = require ("express");
const path = require ("path")
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
app.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
)

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);