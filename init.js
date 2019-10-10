import app from "./app";

//DB connection

require("./database/connection");

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
