import{ Controller, Delete, Get, Post, Put } from '@nestjs/common';

//localhost:3000/customer
@Controller('v1/customers') //Base da Url
export class CustomerController {
    @Get()
    get(){
        return 'Obter cliente';
    }

    @Post()
    post(){
        return 'Criar cliente';
    }

    @Put()
    put(){
        return 'Atualizar cliente';
    }

    @Delete()
    delete(){
        return 'Deletar cliente';
    }
}