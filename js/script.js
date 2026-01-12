function handleInput() {
 var name = prompt("enter your name: ");
 var msg = `Your name is ${name}`;
 document.getElementById("opArea").innerText = msg;

}