import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';

import { ParkingLotService } from '../parking_lot/parking_lot.service';
import { Park } from './park.model';

@Injectable()
export class ParkService {
    @Inject() private readonly parkingLotService: ParkingLotService

    public parkedCarsMap = new Map();

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

    freeSlot(slot_number?: number, car_registration_no?: string) {
        if (typeof slot_number === 'number') {
            if (this.parkedCarsMap.has(slot_number) === false) {
                throw new NotFoundException(`The slot number ${slot_number} is already free.`);
            }
            this.parkedCarsMap.delete(slot_number);
            return slot_number;
        }

        if (typeof car_registration_no === 'string') {
            let slotNum: number = -1;
            this.parkedCarsMap.forEach (function(value, key) {
                if (value.car_reg_no === car_registration_no) {
                    slotNum = value.allocated_slot_number;
                }
            });
            if (slotNum !== -1) {
                this.parkedCarsMap.delete(slotNum);
                return slotNum;
            }
            throw new NotFoundException(`Unable to find car with number ${car_registration_no} in parking.`);
        }
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

    fetchParkedCars() {
        return this.parkedCarsMap;
    }
}