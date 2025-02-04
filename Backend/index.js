require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');
const {UsersModel} = require("./model/UsersModel");
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 1856;
const uri = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000/', 'http://localhost:3001/'],
  credentials: true,
}));
const JWT_SECRET = process.env.JWT_SECRET || "UserFE1878";
//Sending Sample data to holdings
// app.get("/addHoldings",async(req,res)=>{
//     let tempHoldings = [
//     {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//         day: "+2.99%",
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//         day: "+0.11%",
//       },
//       {
//         name: "HINDUNILVR",
//         qty: 1,
//         avg: 2335.85,
//         price: 2417.4,
//         net: "+3.49%",
//         day: "+0.21%",
//       },
//       {
//         name: "INFY",
//         qty: 1,
//         avg: 1350.5,
//         price: 1555.45,
//         net: "+15.18%",
//         day: "-1.60%",
//         isLoss: true,
//       },
//       {
//         name: "ITC",
//         qty: 5,
//         avg: 202.0,
//         price: 207.9,
//         net: "+2.92%",
//         day: "+0.80%",
//       },
//       {
//         name: "KPITTECH",
//         qty: 5,
//         avg: 250.3,
//         price: 266.45,
//         net: "+6.45%",
//         day: "+3.54%",
//       },
//       {
//         name: "M&M",
//         qty: 2,
//         avg: 809.9,
//         price: 779.8,
//         net: "-3.72%",
//         day: "-0.01%",
//         isLoss: true,
//       },
//       {
//         name: "RELIANCE",
//         qty: 1,
//         avg: 2193.7,
//         price: 2112.4,
//         net: "-3.71%",
//         day: "+1.44%",
//       },
//       {
//         name: "SBIN",
//         qty: 4,
//         avg: 324.35,
//         price: 430.2,
//         net: "+32.63%",
//         day: "-0.34%",
//         isLoss: true,
//       },
//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//         day: "+0.15%",
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         day: "-0.24%",
//         isLoss: true,
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         day: "-0.25%",
//         isLoss: true,
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//         day: "+0.32%",
//       },
    
//     ];

//     tempHoldings.forEach((item)=>{
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHolding.save(); 
//     });
//     res.send("Done!");
// })

// app.get("/addPositions",async(req,res)=>{
//   let tempPositions = [
    
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempPositions.forEach((item)=>{
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//   newPosition.save();
//   });
//   res.send("Done!");
// })

app.get("/allHoldings",async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions",async(req,res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrders",async(req,res)=>{
  const {name,qty,price,mode} = req.body;
  const newOrder = new OrdersModel({
    name : name,
    qty : qty,
    price : price,
    mode : mode,
  });
  await newOrder.save();
  
  const holding = await HoldingsModel.findOne({name});
  if(mode === "BUY"){
    if(holding){
      const newQty = holding.qty + qty;
      const newAvg = (holding.qty * holding.avg + qty * price)/newQty;
      const newPrice = newAvg*newQty;
      holding.qty = newQty;
      holding.avg = newAvg;
      holding.price = newPrice;
      await holding.save();
    }
    else{
      const newHolding = new HoldingsModel({
        name : name,
        qty: qty,
        avg: qty*price,
        price: price,
        net: "+0.0%",
        day: "+0.0%",
      });
      await newHolding.save();
    }
  }
  else if(mode === "SELL"){
    if(holding){
      if(holding.qty >= qty){
        holding.qty -= qty;
        if(holding.qty == 0){
          await HoldingsModel.findOneAndDelete({name : holding.name});
        }
        else{
          holding.save();
        }
      }
      else{
          return res.status(400).send("Insufficient holdings to sell");
      }
    }
    else{
        return res.status(400).send("Stock not found in holdings");
      }
  }
});

app.get("/allOrders",async(req,res)=>{
  const orders = await OrdersModel.find({});
  res.json(orders);
});

app.get("/summaryHoldings",async(req,res)=>{
  const holdingsData = await HoldingsModel.find({});
  res.json(holdingsData);
});

app.post("/signup", async (req, res) => {
    try {
        const { fullname, username, email, password, phonenumber } = req.body;
        // Validate input fields
        if (!fullname || !username || !email || !password || !phonenumber) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // Check if user already exists by email or phonenumber
        const existingUser = await UsersModel.findOne({
            $or: [{ email }, { phonenumber }],
        });
        if (existingUser) {
            return res.status(400).json({
                message: existingUser.email === email
                    ? "Email is already registered"
                    : "Phone number is already registered",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UsersModel({
            fullname,
            username,
            email,
            password: hashedPassword,
            phonenumber,
        });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during user signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/login", async (req, res) => {
  const { loginField, password } = req.body;
  const isPhoneNumber = /^\d{10}$/.test(loginField);
  let user;
  if (isPhoneNumber) {
      user = await UsersModel.findOne({ phonenumber: loginField });
  } else {
      user = await UsersModel.findOne({ username: loginField });
  }
  if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials." });
  }
  res.status(200).json({ message: "Login successful" });
});


app.listen(PORT,()=>{
    console.log("Listening to the 1856 port!");
    mongoose.connect(uri);
    console.log("Connected to database successfully!");
});