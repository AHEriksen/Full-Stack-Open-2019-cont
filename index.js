const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

app.get('/info', (req, res) => {
  const date = Date();
  const message = `Phonebook has info for ${persons.length} people`;
  res.send(`<div>
              <p>${message}</p>
              <p>${date}</p>
            </div>`
          )
})

app.get('/api/persons', (req, res) => {
  res.json(persons);
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);
  if (person)
    res.json(person);
  else
    res.status(404).end();
})

const generateId = () => {
  return Math.floor(1 + Math.random() * 100000);
}

app.post('/api/persons', (req, res) => {
  const body = req.body;
  if (!body.name) {
    return res.status(400).json({error: 'content missing'});
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  console.log(person);

  persons = persons.concat(person);
  console.log(persons);
  res.json(person);
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);
  res.status(204).end();
})

const PORT = 3001;
app.listen(PORT, () => {
  `Server running on port ${PORT}`;
})
