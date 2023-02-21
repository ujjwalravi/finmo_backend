import { Body, Controller, Post, Get, Patch } from '@nestjs/common';

import { ParkingLotService } from './parking_lot.service';


@Controller('parking_lot')
export class ParkingLotController {
    constructor(private readonly parkingLotService: ParkingLotService) {}

    @Post()
    initializeSlots(
        @Body('no_of_slot') noOfSlot: number
    ) {
        const totalSlot = this.parkingLotService.initSlot(noOfSlot);
        return {total_slot: totalSlot};
    }

    @Patch()
    increaseSlots(
        @Body('increment_slot') noOfSlot: number
    ) {
        const totalSlot = this.parkingLotService.incrementSlot(noOfSlot);
        return {total_slot: totalSlot};
    }

    @Get()
    helloWorld() {
        return "Hellow World";
    }
}