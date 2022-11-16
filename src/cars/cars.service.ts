import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";

import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    findAll() {
        return this.cars;
    }

    findOneById( id: string ) {
        
        const car = this.cars.find( car => car.id === id );
        if( !car ) {
            throw new NotFoundException(`Car with id ${ id } not found`);
        }
        
        return car;
    }

    createCar( createCarDto: CreateCarDto ) {

        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push( car );

        return car;
        
    }

    updateCar( id: string, updateCarDto: UpdateCarDto) {

        

    }

}
