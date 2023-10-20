// when given a problem - look for the eventListener 

document.querySelector("#load-btn").addEventListener("click", async function(){
    // the first parameter to axios.get
    // is the URL of the file or resource
    // if it is a relative URL it will be
    // relative to the .js file that it is called
    const response = await axios.get("contact.txt"); 
    console.log(response);
    document.querySelector("#content").innerHTML = response.data; 
})