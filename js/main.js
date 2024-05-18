
const allQuotes = [
    {
        quote: `Be yourself; everyone else is already taken.`,
        author: `Oscar Wilde`
    }
    ,
    {
        quote: `so many books so little time`,
        author: `frank zappa`
    }
    ,
    {
        quote: `A room without books is like a body without a soul.`,
        author: `Marcus Tullius Cicero`
    }
    ,
    {
        quote: `You only live once, but if you do it right, once is enough.`,
        author: ` Mae West`
    }
    ,
    {
        quote: `Be the change that you wish to see in the world.`,
        author: `mahtma ghandi`
    },
    {
        quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
        author: `Dr. Seuss`
    }

    ,
    {
        quote: `A friend is someone who knows all about you and still loves you`,
        author: `Elbert Hubbard`
    }

    ,
    {
        quote: `In three words I can sum up everything I've learned about life: it goes on.`,
        author: `Robert Frost`
    },

    {
        quote: `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`,
        author: `J.K. Rowling, Harry Potter and the Goblet of Fire`
    },

    {
        quote: `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . `,
        author: `C.S. Lewis, The Four Loves`
    },

]

QuotesLoc = allQuotes

localStorage.setItem('QuotesLoc', JSON.stringify(allQuotes))


function displayQuote() {

    let div = ``
    const i = Math.floor(Math.random() * allQuotes.length + 1)

    div += `<div class="col-8 mx-auto  p-5 position-relative border-black rounded-2">
        <h3>${allQuotes[i].quote}</h3>
        <span class="position-absolute text-capitalize fs-5 lead ">${allQuotes[i].author}</span>
    </div>
    <button onclick="deleteQuote()"
                    class=" btn btn-outline-warning d-block  my-5 px-5 fs-1 offset-5 col-2">clear</button>
    `




    document.getElementById('rowOfContents').innerHTML = div

}

function deleteQuote() {
    const div = ``
    document.getElementById('rowOfContents').innerHTML = div

}