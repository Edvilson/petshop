import{ Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contract';
import { CreateCustomerDto } from '../dtos/create-customer-dto';
import { Result } from '../models/result.model';

//localhost:3000/customers
@Controller('v1/customers') //Base da Url
export class CustomerController {
    @Get()
    get(){
        return new Result(null, true, [], null);
    }

    @Get(':document')
    getById(@Param('document') document){
        return new Result(null, true, {}, null);
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract))
    post(@Body() body: CreateCustomerDto){
        return new Result('Cliente criado com sucesso', true, body, null);
    }

    @Put(':document')
    put(@Param('document') document, @Body() body){
        return new Result('Cliente atualizado com sucesso', true, body, null);
    }

    @Delete(':document')
    delete(@Param('document') document, @Body() body){
        return new Result('Cliente removido com sucesso', true, body, null);
    }
}