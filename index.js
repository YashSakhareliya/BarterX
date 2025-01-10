import http from 'http'
import fs from 'fs'

const PORT = 8050

const server = http.createServer((req,res)=>{
    let log =  `Request Method ${req.method} and url ${req.url} - ${new Date()} \n`
    console.log(log)
    fs.appendFileSync('logs.txt',log)
    if(req.method != 'GET'){
        // res.writeHead(405)
        res.end('Method Not Allowed')
        return  
    }

    switch(req.url){
        case '/':
            res.write('Welcome to the BarterX')
            res.end()
            break
        case '/products':
            res.write('Here are the products up for Sale in BarterX')
            res.end()
            break
        case '/login':
            res.write('Login to the BarterX')
            res.end()
            break
        case '/signup':
            res.write('Sign up to the BarterX')
            res.end()
            break
        case '/profile':
            res.write('Trader Profile')
            res.end()
            break
        case '/cart':
            res.write('Your Shopping Cart is here')
            res.end()
            break
        case '/checkout':
            res.write("Lets' start shipping")
            res.end()
            break
        case '/orders':
            res.write('Your Orders are here')
            res.end()
            break
        case '/categories':
            res.write('Browse Categories')
            res.end()
            break
        case '/chat':
            res.write('Your Chat with fellow Traders')
            res.end()
            break
        case '/contact':
            res.write('Contact Us at')
            res.end()
            break
        case '/about':
            res.write('The modern approach to trading our commodities')
            res.end()
            break
        default:
            res.writeHead(404)
            res.end('Page Not Found')
            break
    }
})

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})