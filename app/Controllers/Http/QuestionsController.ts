// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import preguntas from '../../../Schemas/Preguntas'
import mongoose from 'mongoose';


export default class QuestionsController {

    public async branchAll({
        params,
        request,
        response,
      }: HttpContextContract) {
        
        const preguntasModel = mongoose.model('Preguntas');

        await preguntasModel.find({});

            response.status(200)        
    }
}