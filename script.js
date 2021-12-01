//select all elements we wish to manipulate in some way with javascript
//can grab elements via element name, class name, and id
const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

//random quote function
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    //when working with an API we should use async code to let the rest of the page work normally while we make a request
    //fetch url and convert the response into JSON
    //once we have JSON, we can then see what parts of the response we want to use
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        //change the quote and author text whenever the information gets loaded 
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

copyBtn.addEventListener("click", ()=> {
    //copying the quote text on a copyBtn click
    navigator.clipboard.writeText(quoteText.innerText);
});

//create a url to load a new tweet with our current quote as content and have it open in another window
twitterBtn.addEventListener("click", ()=> {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

//call the randomquote funcion on a click
quoteBtn.addEventListener("click", randomQuote);