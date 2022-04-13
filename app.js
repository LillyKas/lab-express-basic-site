//set up 

const express = require('express');
const { get } = require('express/lib/response');

const app = express()
const port = 3000;

//this registers the public folder so that we can access the static assets in the client
app.use(express.static(__dirname + '/public'))


app.get('/',(req, res)=>{
    console.log('home page')
    //res.send('<h1>This is the homepage 🌈🦄 </h1>')
    res.sendFile(__dirname + '/views/home-page.html')

})

app.get('/about', (req, res) =>{

    console.log('about route')
    res.sendFile(__dirname + '/views/about-page.html')
})


app.get('/works',(req, res)=>{
    console.log('works page')
    res.sendFile(__dirname + '/views/works-page.html')

})




app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})