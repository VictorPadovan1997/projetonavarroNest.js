import { Document } from 'mongoose'

export interface Categoria extends Document {
    categoria:string;
    descricao:string;
    name:string;
}