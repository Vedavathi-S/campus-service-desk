const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Campus Service Desk Notification Service is running");
});

app.post("/api/notifications", (req, res) => {
    const { email, message } = req.body;

    console.log("New notification received");
    console.log("Email:", email);
    console.log("Message:", message);

    res.status(201).json({
        message: "Notification received successfully"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Notification service running on http://localhost:${PORT}`);
});