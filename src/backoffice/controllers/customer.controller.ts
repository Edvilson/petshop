import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contract';
import { CreateCustomerDto } from '../dtos/create-customer-dto';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';
import { User } from '../models/user.model';
import { AccountService } from '../services/account.service';
import { CustomerService } from '../services/customer.service';

//localhost:3000/customers
@Controller('v1/customers') //Base da Url
export class CustomerController {

    constructor(
        private readonly accountService: AccountService,
        private readonly customerService: CustomerService) {

    }

    @Get()
    get() {
        return new Result(null, true, [], null);
    }

    @Get(':document')
    getById(@Param('document') document) {
        return new Result(null, true, {}, null);
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract))
    async post(@Body() model: CreateCustomerDto) {
        const user = await this.accountService.create(
            new User(model.document, model.password, true)
        );
        const customer = new Customer(model.name, model.document, model.email, null, null, null, null, user)        
        const res = await this.customerService.create(customer);

        return new Result('Cliente Criado com sucesso', true, res, null);
    }

    @Put(':document')
    put(@Param('document') document, @Body() body) {
        return new Result('Cliente atualizado com sucesso', true, body, null);
    }

    @Delete(':document')
    delete(@Param('document') document, @Body() body) {
        return new Result('Cliente removido com sucesso', true, body, null);
    }
}