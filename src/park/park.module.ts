import { Module } from '@nestjs/common';

import { ParkController } from './park.controller';
import { ParkService } from './park.service';

import { ParkingLotModule } from '../parking_lot/parking_lot.module';


@Module({
    controllers: [ParkController],
    providers: [ParkService],
    imports: [ParkingLotModule]
})
export class ParkModule {}
