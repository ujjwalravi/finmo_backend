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

    @Post('clear')
    clearSlot(
        @Body('slot_number') slot_number?: number,
        @Body('car_registration_no') car_registration_no?: string
    ) {
        const freedSlot = this.parkService.freeSlot(
            slot_number,
            car_registration_no
        );
        return {freed_slot_number: freedSlot};
    }

    @Get('status')
    getStatus() {
        // return this.parkService.getSlots();
        return this.parkService.getStatus();
    }
}