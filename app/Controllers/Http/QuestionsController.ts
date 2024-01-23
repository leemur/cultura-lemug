// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PreguntaScheme from '../../../Schemas/Preguntas'

export default class QuestionsController {

    public async GetAllQuestions({
        params,
        request,
        response,
      }: HttpContextContract) {
        const resultados = await PreguntaScheme.find()
        response.send(resultados)
        response.status(200)        
    }
}
