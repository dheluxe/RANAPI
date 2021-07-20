// Configuration and Requires
const YXPH = require('./config/YeXiuPH')
const Route = require('./routes/Route')

YXPH.app
    .use(YXPH.express.json())
    .use(YXPH.bodyParser.json())
    .use(YXPH.bodyParser.urlencoded({ extended: true }))
    .use('/', Route.user, Route.auth, Route.char, Route.main)
    .get('/', (req, res) => {
        res.redirect('https://yxphstudios.tech')
    })

// Listen to port | Server Start
YXPH.app.listen(YXPH.PORT, () => {
    console.log(`API Server Started at ${YXPH.PORT}`)
})