import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotModule } from './parking_lot/parking_lot.module';
import { ParkModule } from './park/park.module';

@Module({
  imports: [ParkingLotModule, ParkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
