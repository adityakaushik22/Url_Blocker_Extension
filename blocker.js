const defineCSS = ()=>{
    return `<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #F7DC6F, #82E0AA,#AF7AC5);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
        
    }
    @keyframes gradient {
        0% {
        background-position: 0% 50%;
        }
        50% {background-position: 100% 50%;
        }
        100% {
        background-position: 0% 50%;
        }
    }
    img{
        width: 500px;
        height: auto;
    }
    </style>
    `
}

var meme ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExC7ncqUH_yZvra5uH9nUOkj3qc7pEbNoO1Av5tli3L-AXDrnqupoEg_D09nMpEOkpfs&usqp=CAU"

var imgURL = chrome.runtime.getURL("/icons/padhai.jpg");


const defineHTML = () => {
    return `<div class="content">
    <img id="img" src="">
    </div>
    `
}




const block_urls = ["www.twitter.com", "www.instagram.com", "www.reddit.com", "twitter.com"]
const set = new Set(block_urls)

if(set.has(window.location.hostname)){
    document.head.innerHTML = defineCSS();
    document.body.innerHTML = defineHTML();    
    document.getElementById("img").src = imgURL;
}