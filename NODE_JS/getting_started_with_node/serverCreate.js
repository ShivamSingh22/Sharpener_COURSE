const http=require('http')

const server=http.createServer((res)=>{
    res.json('Shivam')
});

server.listen(4000,()=>{
    console.log('Shivam')
});