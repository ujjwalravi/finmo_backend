import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotModule } from './parking_lot/parking_lot.module';
import { ColorFilterModule } from './color_filter/color_filter.module';
import { ParkModule } from './park/park.module';

@Module({
  imports: [ParkingLotModule, ParkModule, ColorFilterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
