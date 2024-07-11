// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);



const books = [
    {
        title: 'The Great Gatsby',
        generation: 'A',
        publish: 'Scribner',
        edition: 1,
        author: 'F. Scott Fitzgerald',
        language: 'English',
        genre: 'Classic Literature',
        pages: 180,
        year: 1925
    },
    {
        title: 'To Kill a Mockingbird',
        generation: 'B',
        publish: 'Harper Perennial Modern Classics',
        edition: 2,
        author: 'Harper Lee',
        language: 'English',
        genre: 'Classic Fiction',
        pages: 336,
        year: 1960
    },
    {
        title: '1984',
        generation: 'A',
        publish: 'Signet Classics',
        edition: 1,
        author: 'George Orwell',
        language: 'English',
        genre: 'Dystopian Fiction',
        pages: 328,
        year: 1949
    },
    {
        title: 'Pride and Prejudice',
        generation: 'C',
        publish: 'Penguin Classics',
        edition: 3,
        author: 'Jane Austen',
        language: 'English',
        genre: 'Romantic Fiction',
        pages: 432,
        year: 1813
    },
    {
        title: 'The Catcher in the Rye',
        generation: 'B',
        publish: 'Little, Brown and Company',
        edition: 2,
        author: 'J.D. Salinger',
        language: 'English',
        genre: 'Coming-of-Age Fiction',
        pages: 224,
        year: 1951
    }

];


// const userBooks = books.filter((bk) => bk.year === 1960)
// const userBooks = books.filter((bk) => bk.publish >= "Signet Classics")
const userBooks = books.filter((bk) => bk.year >= 1949 && bk.genre === "Coming-of-Age Fiction")



console.log(userBooks);
console.log(userBooks.length);

