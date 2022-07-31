const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/courses').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/courses').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var COURSES = [
    {
        id: 1,
        name: 'Tênis Mizuno Wave Prophecy 11S - Masculino',
        releaseDate: 'November 2, 2019',
        // description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        // duration: 120,
        // code: 'XLF-1212',
        // rating: 3,
        price: 1599.99,
        imageUrl: '/assets/images/1.png',
    },
    {
        id: 2,
        name: 'Tênis Nike Revolution 6 - Masculino',
        // releaseDate: 'November 4, 2019',
        // description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        // duration: 80,
        // code: 'DWQ-3412',
        // rating: 3.5,
        price: 229.99,
        imageUrl: '/assets/images/2.png',
    },
    {
        id: 3,
        name: 'Tênis adidas Ultraboost 22 Lep - Feminino',
        // releaseDate: 'November 8, 2019',
        // description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        // duration: 80,
        // code: 'QPL-0913',
        // rating: 4.0,
        price: 1199.99,
        imageUrl: '/assets/images/3.png',
    },
    {
        id: 4,
        name: 'Tênis Nike Downshifter 11 - Feminino',
        // releaseDate: 'November 16, 2019',
        // description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        // duration: 80,
        // code: 'OHP-1095',
        // rating: 4.5,
        price: 299.99,
        imageUrl: '/assets/images/4.png',
    },
    {
        id: 5,
        name: 'Tênis Mizuno Wave Prophecy 11S - Masculino',
        // releaseDate: 'November 25, 2019',
        // description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        // duration: 80,
        // code: 'PWY-9381',
        // rating: 5,
        price: 1599.99,
        imageUrl: '/assets/images/5.png',
    }
];
