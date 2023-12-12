document.getElementById("replybtn").addEventListener("click", showReply);

function showReply() {

    let output = document.getElementById("outputReply");
    console.log(output)

    document.getElementById("outputReply").innerHTML = `<div id="commentsec">I have more information... this link will show all the answers. 
    <b><a href="index1.html">click here</a></b> 
    <p><pre>- therealfrankenstein</pre></p> 
    <img src="img/frankenstein-03.webp" alt="franken" width="500"></div> `;
}