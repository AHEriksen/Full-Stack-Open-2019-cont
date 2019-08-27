require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');

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

app.use(express.static('build'));
app.use(cors());
app.use(bodyParser.json());

morgan.token('data', req => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - \
:response-time ms :data'));

const errorHandler = (e, req, res, next) => {
  console.log(e);

  if (e.name === 'CastError' && e.kind === 'ObjectId') {
    return res.status(400).send({error: 'malformatted id'});
  }
  
  next(e);
}

app.get('', (req, res) => {
  res.send('root');
})

app.get('/info', (req, res) => {
  const date = Date();

  Person.count({})
    .then(result => {
      const message = `Phonebook has info for ${result} people`;
      res.send(
        `<div>
          <p>${message}</p>
          <p>${date}</p>
        </div>`
      );
    })
    .catch(e => next(e));
});

app.get('/api/persons', (req, res) => {
  Person.find({})
    .then(persons => res.json(persons.map(person => person.toJSON())));
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON());
      }
      else {
        res.status(404).end();
      }
    })
    .catch(e => next(e));
});

const generateId = () => {
  return Math.floor(1 + Math.random() * 100000);
}

app.post('/api/persons', (req, res) => {
  const body = req.body;
  const alreadyExists = persons.find(person => person.name === body.name);
  if (!body.name) {
    return res.status(422).json({error: 'name missing'});
  }
  if (!body.number) {
    return res.status(422).json({error: 'number missing'});
  }
  if (alreadyExists) {
    return res.status(409).json({error: 'person already in phonebook'})
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    id: generateId()
  });

  person.save()
    .then(savedPerson => res.json(savedPerson.toJSON()));
});

app.put('/api/persons/:id', (req, res) => {
  const body = req.body;

  const person = {
    name: body.name,
    number: body.number
  };

  Person.findByIdAndUpdate(req.params.id, person, {new: true})
    .then(updatedPerson => {
      res.json(updatedPerson.toJSON());
    })
    .catch(e => next(e));
});

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end();
    })
    .catch(e => next(e));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
