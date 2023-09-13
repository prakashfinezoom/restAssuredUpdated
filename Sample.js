const { expect } = require('chai');
const express = require('express');
const app = express();

app.use(express.json());

let jsonData = {
  "data": [
    {
      "id": 1,
      "name": "Bagavathi",
      "location": "Nellai"
    },
    {
      "id": 2,
      "name": "Kamal",
      "location": "chennai"
    },
    {
      "id": 3,
      "name": "janaki",
      "location": "trichy"
    },
    {
      "id": 4,
      "name": "sammer",
      "location": "ramnad"
    },
    {
      "id": 5,
      "name": "linga",
      "location": "madurai"
    }
  ]
  
};


app.get('/users', (req, res) => {
  res.json(jsonData);
});


app.post('/users', (req, res) => {

  const newUser = req.body;
  if (!Number.isInteger(newUser.id)) {
    
    return res.status(400).json({ error: 'Invalid data type for id. Expected an integer.' });
  }

  if (typeof newUser.name !== 'string') {
    return res.status(400).json({ error: 'Invalid data type for name. Expected a string.' });
  }

  if (typeof newUser.location !== 'string') {
    return res.status(400).json({ error: 'Invalid data type for location. Expected a string.' });
  }

  if (newUser.id.toString().length > 5) {
    return res.status(400).json({ error: 'Maximum character limit exceeded for id' });
  }

  if (newUser.name.length > 25) {
    return res.status(400).json({ error: 'Maximum character limit exceeded for name' });
  }

  if (newUser.location.length > 50) {
    return res.status(400).json({ error: 'Maximum character limit exceeded for location' });
  }

  jsonData.data.push(newUser);

  res.status(201).json({ message: 'User added successfully' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
