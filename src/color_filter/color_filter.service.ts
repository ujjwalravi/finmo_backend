import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import { ParkService } from '../park/park.service';

@Injectable()
export class ColorFilterService {
    @Inject() private readonly parkService: ParkService

    getRegNumbers(color: string) {
        let tempList = [];
        let parkedCars = this.parkService.fetchParkedCars();
        parkedCars.forEach (function(value, key) {
            if (value.color === color) {
                tempList.push(value.car_reg_no);
            }
        })
        return tempList;
    }

    getSlotNumbers(color: string) {
        let tempList = [];
        let parkedCars = this.parkService.fetchParkedCars();
        parkedCars.forEach (function(value, key) {
            if (value.color === color) {
                tempList.push(value.allocated_slot_number);
            }
        })
        return tempList;
    }
}