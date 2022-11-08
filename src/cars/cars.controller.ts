import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor( private readonly CarsService: CarsService ) {}

    @Get()
    getAllCars() {

        return this.CarsService.findAll();

    }

    @Get(':id')
    getCardById( @Param('id', ParseIntPipe ) id: number ) {

        return this.CarsService.findOneById(id);

    }

    @Post()
    createCar( @Body() body: any ) {
        return body;
    }

    @Patch(':id')
    updateCar( @Param('id', ParseIntPipe) id: number, @Body() body: any ) {
        return {
            body,
            id
        };
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: number ) {
        return {
            method: 'delete',
            id
        };
    }
    
}
