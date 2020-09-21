import { Injectable, Logger, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';
import { exception } from 'console';

//Usaremos a service para fazer a persistência (ainda em memória) 
@Injectable()
export class JogadoresService {

    private jogadores: Jogador[] = [];
    private readonly logger = new Logger(JogadoresService.name);

    async consultarJogadorPeloEmail(email:string):Promise<Jogador>{
        this.logger.log(`mail: ${email}`);
        const jogadorEncontrado = this.jogadores.find(jogador => jogador.email===email);
        if(jogadorEncontrado){
            return jogadorEncontrado;
        }else{
            throw new NotFoundException(`Jogador com email ${email} não encontrado`);
        }
    }

    async consultarTodosJogadores():Promise<Jogador[]>{
        return this.jogadores;
    }

    async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto){
        await this.criar(criarJogadorDto);
    }

    private criar(criarJogadorDto: CriarJogadorDto): void{
        //desestruturação
        const {name, phoneNumber, email} = criarJogadorDto;
        const jogador:Jogador = {
             _id: uuidv4(),
             name,
             phoneNumber,
             email,
             ranking:'A',
             posicaoRanking:1,
             urlPlayer:"www.photos.com/foto1.jpg"
        };
        this.jogadores.push(jogador);
        //usaremos o logger para logar nossas transações
        this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)} `)
    }
}
