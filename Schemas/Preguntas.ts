import mongoose, { Schema } from 'mongoose';

const PreguntaScheme = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    detalle_pregunta: String,
    ejemplo: String,
    fecha: Date,
    id_categoria: Number,
    mayor_de_edad: Boolean
});

export default mongoose.model('Preguntas', PreguntaScheme, 'Preguntas')