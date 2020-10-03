import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Jogador } from 'src/jogadores/interfaces/jogador.interface';

export const CategoriaSchema = new mongoose.Schema({
    categoria: { type: String, unique: true},
    descricao: { type: String, unique: true},
    name:{ type: String, unique: true},
}, {timestamps: true, collection: 'categorias'});
