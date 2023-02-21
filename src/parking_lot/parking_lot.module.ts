import { Module } from '@nestjs/common';

import { ParkingLotController } from './parking_lot.controller';
import { ParkingLotService } from './parking_lot.service';

@Module({
    controllers: [ParkingLotController],
    providers: [ParkingLotService],
    exports: [ParkingLotService]
})
export class ParkingLotModule {}
