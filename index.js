

const server = Bun.serve({
    port:8050,
    fetch(req){
        const url = new  URL(req.url)
        const pathname = url.pathname
        console.log(url)
        console.log(pathname)


        switch(pathname){
        case '/':
            return new Response('Welcome to BarterX')
            
        case '/products':
            return new Response('Here are the products up for Sale in BarterX')
            
        case '/login':
            return new Response('Login to the BarterX')
            
        case '/signup':
            return new Response('Sign up to the BarterX')
            
        case '/profile':
            return new Response('Trader Profile')
            
        case '/cart':
            return new Response('Your Shopping Cart is here')
            
        case '/checkout':
            return new Response("Lets' start shipping")
            
        case '/orders':
            return new Response('Your Orders are here')
            
        case '/categories':
            return new Response('Browse Categories')
            
        case '/chat':
            return new Response('Your Chat with fellow Traders')
            
        case '/contact':
            return new Response('Contact Us at')
            
        case '/about':
            return new Response('The modern approach to trading our commodities')

        default:
            return new Response(`The modern approach to trading our commodities`)
            
    }
    }

    
})

