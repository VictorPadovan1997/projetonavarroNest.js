import { Controller, Post, Body, Get, Query, Delete } from '@nestjs/common';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto'
import { CategoriasService } from './categorias.service'
import { Categoria } from './interfaces/categoria.interface'


@Controller('api/v1/categorias')
export class CategoriasController {

    constructor(private readonly categoriaServices: CategoriasService) {}

    @Post()
    async criar(
        @Body() CriarCategoriaDto: CriarCategoriaDto) {
        await this.categoriaServices.criar(CriarCategoriaDto)
    }

    @Get() 
    async consultar(   
        @Query('name') name: string): Promise<Categoria[] | Categoria> {
            if (name) {
                return await this.categoriaServices.consultarPeloNome(name);
            }
    }

}

