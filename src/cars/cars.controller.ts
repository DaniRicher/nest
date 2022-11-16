import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes( ValidationPipe )
export class CarsController {

    constructor( private readonly CarsService: CarsService ) {}

    @Get()
    getAllCars() {

        return this.CarsService.findAll();

    }

    @Get(':id')
    getCardById( @Param('id', ParseUUIDPipe ) id: string ) {

        return this.CarsService.findOneById(id);

    }

    @Post()
    createCar( @Body() createCarDto: CreateCarDto ) {

        return this.CarsService.createCar( createCarDto );

    }

    @Patch(':id')
    updateCar( @Param('id', ParseUUIDPipe ) id: number, @Body() updateCarDto: UpdateCarDto ) {

        return updateCarDto;

    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: number ) {

        return {
            method: 'delete',
            id
        };

    }
    
}
