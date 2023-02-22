import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParkingLotService {
    public parking_lot_size: number = -1;

    initSlot(noOfSlot: number) {
        if (typeof noOfSlot !== 'number' || noOfSlot <= 0) {
            throw new BadRequestException(`The 'no_of_slot' expects a postive number as value.`);
        }
        if (this.parking_lot_size != -1) {
            throw new BadRequestException('The parking slots has been already initialized. Kindly make PATCH request to increase the slots.');
        }
        this.parking_lot_size = noOfSlot;
        return this.parking_lot_size;
    }

    incrementSlot(noOfSlot: number) {
        if (typeof noOfSlot !== 'number' || noOfSlot <= 0) {
            throw new BadRequestException(`The 'no_of_slot' expects a postive number as value.`);
        }
        if (this.parking_lot_size === -1) {
            throw new BadRequestException('The parking slot is not initialized. Kindly make POST request to initialize the slots.');
        }
        this.parking_lot_size = this.parking_lot_size + noOfSlot;
        return this.parking_lot_size;
    }

    getParkingLotSize() {
        return this.parking_lot_size;
    }
}