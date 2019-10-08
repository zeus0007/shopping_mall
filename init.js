import app from "./app";
import { sequelize } from "./models";

sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connection succesfully!!");
  })
  .catch(err => {
    console.log("Fail to DB Connection : ", err);
  });

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
