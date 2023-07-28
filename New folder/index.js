const http = require('http');
const url = require('url') 
const hostname = '127.0.0.1';
const port = 8008;

const server = http.createServer(async (req, res) => {
  const q =url.parse(req.url,true)
  if(q.pathname==="/numbers"){
    const objects=q.search.split("&url=")
    objects[0]=objects[0].slice(5)
    let numbers = await []
    objects.forEach(async(number)=>{
        const data = await fetchdata(number)
        console.log(data)
        numbers= await numbers.concat(data)
    })
    console.log(numbers)
  }
});
const fetchdata = async (number)=>{
    let res = await fetch(number)
    let data = await res.json()
    return data.numbers
}
server.listen(port, hostname, () => {
  
});