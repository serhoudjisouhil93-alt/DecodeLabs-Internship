const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Temporary data storage in memory
let tasks = [
  { id: 1, title: "Learn Backend Basics", status: "completed" }
];

// Endpoint 1: Retrieve tasks (GET)
app.get('/api/tasks', (req, res) => {
  res.status(200).json({ success: true, data: tasks });
});

// Endpoint 2: Add a new task with validation (POST)
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;

  // Validation: Check if title is missing or empty
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({
      success: false,
      error: "Title is required and cannot be empty."
    });
  }

  const newTask = {
    id: tasks.length + 1,
    title: title.trim(),
    status: "pending"
  };

  tasks.push(newTask);
  res.status(201).json({ success: true, data: newTask });
});

// Start listening for incoming requests
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});