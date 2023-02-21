import { Body, Controller, Post, Get, Patch } from '@nestjs/common';

import { ParkService } from './park.service';


@Controller('park')
export class ParkController {
    constructor(private readonly parkService: ParkService) {}

    @Post()
    addCar(
        @Body('car_reg_no') car_reg_no: string,
        @Body('car_color') car_color: string
    ) {
        const slotNumber = this.parkService.parkCar(
            car_reg_no,
            car_color
        );
        return {allocated_slot_number: slotNumber};
    }

    @Get()
    helloWorld() {
        // return this.parkService.getSlots();
        return this.parkService.getStatus();
    }
}