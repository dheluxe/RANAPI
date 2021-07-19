// Configuration and Requires
const YXPH = require('./config/YeXiuPH')

// Routes
const main = require('./routes/Main')
const char = require('./routes/Characters')
const user = require('./routes/Users')
const auth = require('./routes/Auth')

YXPH.app
    .use(YXPH.express.json())
    .use(YXPH.bodyParser.json())
    .use(YXPH.bodyParser.urlencoded({ extended: true }))
    .use('/', user, auth, char, main)
    .get('/', (req, res) => {
        res.redirect('https://yxphstudios.tech')
    })

// Listen to port | Server Start
YXPH.app.listen(YXPH.port, () => {
    console.log('API Server Started')
})