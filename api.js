// Configuration and Requires
const YXPH = require('./config/YeXiuPH')

YXPH.app.use(YXPH.express.json())
YXPH.app.use(YXPH.bodyParser.json())
YXPH.app.use(YXPH.bodyParser.urlencoded({ extended: true }))

// Routes
const main = require('./routes/Main')
const char = require('./routes/Characters')
const user = require('./routes/Users')

YXPH.app.use('/', main)
YXPH.app.use('/', char)
YXPH.app.use('/', user)

// Listen to port | Server Start
YXPH.app.listen(YXPH.port, () => {
    console.log('API Server Started')
})