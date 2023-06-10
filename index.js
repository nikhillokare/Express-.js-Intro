const express = require("express");
const path = require("path");
const app = express();
const port = 4500;
// const middleware = (req, res, next) => {
//   console.log(req);
// };
app.use(express.static(path.join(__dirname, "public")));
// app.use(middleware);

app.get("/hello/:name", (req, res) => {
  res.send("Hello World" + req.params.name);
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
//Private localhost server
app.listen(port, () => {
  console.log(`Server is running fine on port ${port}`);
});
