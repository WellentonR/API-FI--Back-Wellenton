import {Router,  Request, Response} from 'express'
import { getUserLC, getUsersLC, saveUserLC, updateUserLC, removeUserLC} from './controller/UserController'
import { getUsrLC, getLC, saveLC, updateLC, removeLC} from './controller/UserController'


const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json( {message: 'hello Word!'})
}) 

routes.get('/UsersLC',getUsersLC)
routes.get('/UserLC/:id',getUserLC)
routes.post('/UserLC',saveUserLC)
routes.put('/UserLC/:id',updateUserLC)
routes.delete('/UserLC/:id',removeUserLC)

routes.get('/LC',getUsrLC)
routes.get('/LC/:id',getLC)
routes.post('/LC',saveLC)
routes.put('/LC/:id',updateLC)
routes.delete('/LC/:id',removeLC)

export default routes