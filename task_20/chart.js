const ws = new WebSocket('wss://ws.postman-echo.com/raw');


ws.addEventListener('message', (event) => {
  console.log(event);
});
ws.addEventListener('open' , (event) => {
  console.log(event);
});
ws.addEventListener('close', (event) => {
  console.log('close');
});

setTimeout(()=>{
  ws.close();
},15000);


setTimeout(()=>{
  ws.send('Hello motherfucker');
 },5000);
 