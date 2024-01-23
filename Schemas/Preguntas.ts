import mongoose from 'mongoose';
const { Schema } = mongoose;

const Preguntas = new Schema({
  title: String, // String is shorthand for {type: String}
  detalle_pregunta: String,
  ejemplo: String,
  fecha: Date,
  id_categoria: Number,
  mayor_de_edad: Boolean
});

export default Preguntas