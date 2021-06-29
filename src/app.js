const express = require('express');
const app = express();

const path = require("path");

//acceso a la carpera public
app.use(express.static(path.resolve(__dirname, "../public")));

//website routes
app.use(require("./routes/web"));

app.set("port",process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("server running on http://localhost:" +app.get("port")));