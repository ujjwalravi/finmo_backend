import { Injectable, Inject, BadRequestException } from '@nestjs/common';

import { ParkingLotService } from '../parking_lot/parking_lot.service';
import { Park } from './park.model';

@Injectable()
export class ParkService {
    @Inject() private readonly parkingLotService: ParkingLotService

    private parkedCarsMap = new Map();

    getSlots() {
        console.log(this.parkingLotService);
        return this.parkingLotService.getParkingLotSize();
    }

    parkCar(car_reg_no: string, car_color: string) {
        const parkingSlotSize = this.parkingLotService.getParkingLotSize();
        for (let i=1; i<=parkingSlotSize; i++) {
            if (this.parkedCarsMap.has(i) === false) {
                const newParkedCar = new Park(i, car_reg_no, car_color);
                this.parkedCarsMap.set(i, newParkedCar);
                return i;
            }
        }
        throw new BadRequestException('Parking slots are full. Kindly wait for the slot to be freed.');
    }

    getStatus() {
        let tempList = [];
        this.parkedCarsMap.forEach (function(value, key) {
            tempList.push({
                "allocated_slot_number": value.allocated_slot_number,
                "car_reg_no": value.car_reg_no,
                "color": value.color
            });
        })
        return tempList;
    }
}