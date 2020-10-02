import { Injectable } from '@nestjs/common';
import { Address } from 'src/backoffice/models/address.model';
import { Flunt } from 'src/utils/flunt';
import { Contract } from '../contract';

@Injectable()
export class CreateAddressContract implements Contract{
    errors: any[];

    validate(model: Address): boolean {
        const flunt = new Flunt();

        flunt.isFixedLen(model.zipcode, 8, 'CEP Inválido');
        flunt.hasMinLen(model.street, 3, 'Rua Inválida');
        flunt.hasMinLen(model.neighborhood, 3, 'Bairro inválido');
        flunt.hasMinLen(model.city, 3, 'Cidade inválida');
        flunt.isFixedLen(model.state, 2, 'Estado Inválido');
        flunt.isFixedLen(model.country, 3, 'País Inválido');

        this.errors = flunt.erros;
        return flunt.isValid();
    }

}