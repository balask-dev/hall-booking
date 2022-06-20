import express from "express";
const app = express();
const PORT = 4000 || process.env.PORT;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Connected");
});

let rooms = [];
let bookedData = [];

app.post("/rooms/create", (req, res) => {
  let room = {};
  room.id = req.body.room_id;
  room.status = "false";
  room.seats = req.body.no_of_seats;
  room.amenities = req.body.amenities;
  rooms.push(room);
  res.send(rooms);
});

app.post("/rooms/reg/:id", (req, res) => {
  let bookings = {};
  let { id } = req.body.room_id;
  if (room[id].status == !false) {
    bookings[id].room_id = req.body.room_id;
    bookings[id].name = req.body.name;
    bookings[id].date = req.body.date;
    bookings[id].start_time = req.body.start_time;
    bookings[id].end_time = req.body.end_time;
    bookings[id].status = "true";
    bookedData.push(bookings);
    res.send(booked);
  } else console.log("NotAvailable");
});

app.get("/rooms/roomData", (req, res) => {
  res.send(bookedData);
});

app.get("/rooms/customerData", (req, res) => {
  let customerData = bookedData.filter((data) => {
    return {
      name: customerData.name,
      roomId: customerData.room_id,
      data: customerData.date,
      startTime: customerData.start_time,
      endtime: customerData.end_time,
    };
  });
  res.send(customerData);
});
app.listen(PORT);
