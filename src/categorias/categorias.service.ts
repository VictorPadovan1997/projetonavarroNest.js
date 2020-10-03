import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel('Categoria')
    private readonly categoriaModel: Model<Categoria>,
  ) {}

  private readonly logger = new Logger(CategoriasService.name);

  async consultarCategoria(): Promise<Categoria[]> {
    return await this.categoriaModel.find().exec();
  }

  async consultarPeloNome(name: string): Promise<Categoria> {
    const categoria = await this.categoriaModel.findOne({ name }).exec();
    if (!categoria) {
      throw new NotFoundException(`${name} não encontrado`);
    }
    return categoria;
  }

  async criar(CriarCategoriaDto: CriarCategoriaDto): Promise<Categoria> {
    const criaCategoria = new this.categoriaModel(CriarCategoriaDto);
    return await criaCategoria.save();
  }

}
