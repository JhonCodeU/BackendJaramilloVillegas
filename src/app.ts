import express from 'express'
import morgan from 'morgan'
import indexRoutes from './routes'
const bodyParser = require('body-parser')
const cors = require('cors');

class Application{
    app: express.Application;
    
    constructor() { 
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', 3000);
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    middlewares() { 
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use(indexRoutes);
    }
    
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

export default Application;