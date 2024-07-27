import app from "./app.js";
import connectDB from "./db/index.js";


connectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Running on PORT ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log("MONGODB connection failed ", err);
})



