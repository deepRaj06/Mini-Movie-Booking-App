let walBal = JSON.parse(localStorage.getItem('amount'));
let wallet = document.getElementById('wallet');
wallet.innerHTML = walBal;

// Implement debouncing for network request

async function searchMovies()
{
    try{
        const q = document.getElementById('search').value;
        const res = await fetch(`https://www.omdbapi.com/?s=${q}&apikey=8155b2f4`);
        // console.log(res);
        const data = await res.json();
        // console.log(data);
        const movies = data.Search;
        console.log(movies);
        return movies;
    }
    catch(err)
    {
        console.log(err);
    }
}

let movies = document.getElementById('movies')
function appendMovies(data)
{
    // movies.innerHTML = '';
    if(data == null)
    {
        return false;
    }
    data.forEach( function (ele) {

        // movies.innerHTML = '';

        let div = document.createElement('div');
        div.style.border = '1px solid black';
        
        let img = document.createElement('img');
        img.src = ele.Poster;

        let title = document.createElement('p');
        title.innerText = ele.Title;

        let bookNow = document.createElement('button');
        bookNow.setAttribute('class', 'book_now');
        // bookNow.innerText = 'Book Now';
        bookNow.style.cursor = 'pointer';
        bookNow.innerHTML = `<a href='checkout.html'>Book Now</a>`;
        bookNow.style.textDecoration = 'none';

        // bookNow.addEventListener( onclick, (ele) => {
        //         bookNow(ele);
        //     })

        // bookNow.setAttribute('a', './checkout.html')
        // bookNow.setAttribute('onclick');

        // bookNow.onclick((e) => {
        //     console.log('Im fun');
        //     })


        div.append(img, title, bookNow);
        // bookNow.onclick( function() {
        //     window.location.href = 'checkout.html';
        // })
        movies.append(div);
    })
}
// let bookNow = document.getElementsByClassName('book_now');

// function bookNow(ele){
//      window.location.href = 'checkout.html';
//      localStorage.setItem('movie', JSON.stringify(ele));
// }

async function main()
{
    let data = await searchMovies();
    if(data == '')
    {
        return false;
    }
    appendMovies(data);
}

let clearId;

function debounce(func, delay)
{
    if(clearId)
    {
        clearTimeout(clearId);
    }

    clearId = setTimeout( function () {
        func();
    }, delay);
}
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
