// window.addEventListener('DOMContentLoaded', (event) => {
//     alert('Hello')

//     var h1 = document.querySelector('h1')

//     console.log(h1)
// });

// window.addEventListener('Ivan', (event) => {
//     alert('Hello')

//     var h1 = document.querySelector('h1')

//     console.log(h1)
// })

// window.addEventListener('DOMContentLoaded', (event) => {
//     alert('Hello')

//     var h1 = document.querySelector('h1')
//     console.log(document)
//     console.log(h1)
// });

window.addEventListener('DOMContentLoaded', (event) => {
    var arr = [
        {
            name: 'John',
            lastName: 'Doe',
            age: '24',
            position: 'Back End Engineer',
            geneder: 'male',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, numquam enim consequatur fugiat laudantium suscipit ullam et ...',
        },
        {
            name: 'Joahn',
            lastName: 'Sims',
            age: '22',
            position: 'Front End programer',
            geneder: 'female',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, numquam enim consequatur fugiat laudantium suscipit ullam et ...',
        },
        {
            name: 'Alex',
            lastName: 'Jamson',
            age: '28',
            position: 'UX Designer',
            geneder: 'male',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-10.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, numquam enim consequatur fugiat laudantium suscipit ullam et ...',
        },
        {
            name: 'Curtis',
            lastName: 'Black',
            age: '27',
            position: 'UI Designer',
            geneder: 'male',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-15.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, numquam enim consequatur fugiat laudantium suscipit ullam et ...',
        }
    ];

    arr.forEach(function(person) {
        console.log(person);
    })
});
