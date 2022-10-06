import { UserLC } from "../entity/UserLC"
import { LC } from "../entity/LC"
import { AppDataSource } from "../data-source"
import { Request,  Response } from "express"



export const getUsersLC = async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(UserLC).find()
return response.json (users)
};


export const getUserLC = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserLC).findOneBy(id)
    return response.json (user)
};

export const saveUserLC = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(UserLC).save(request.body)
return response.json(user)
}

export const updateUserLC = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserLC).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserLC).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({message: 'User not found!'})
};

export const removeUserLC = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserLC).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserLC).findOneBy(id)
        return response.json({message: 'User file removed'})
    }
    return response.status(404).json({message: 'User not found!'})
};










export const getUsrLC = async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(LC).find()
return response.json (users)
};


export const getLC = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(LC).findOneBy(id)
    return response.json (user)
};

export const saveLC = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(LC).save(request.body)
return response.json(user)
}

export const updateLC = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(LC).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(LC).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({message: 'User not found!'})
};

export const removeLC = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(LC).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(LC).findOneBy(id)
        return response.json({message: 'User file removed'})
    }
    return response.status(404).json({message: 'User not found!'})
};





