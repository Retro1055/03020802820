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
    for(let i = 0; i<objects.length;i++){
        const data =await fetchdata(objects[i])
        numbers=numbers.concat(data)
    }
    numbers.sort(function(a, b){return a - b})
    numbers= numbers.filter((item,
        index) => numbers.indexOf(item) === index)
   const responsedata= {
    "numbers": numbers
   }
    const jsonContent = JSON.stringify(responsedata);
  res.end(jsonContent);
  }
});
const fetchdata = async (number)=>{
    let res = await fetch(number)
    let data = await res.json()
    return data.numbers
}
server.listen(port, hostname, () => {
  
});