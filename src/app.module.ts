import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotModule } from './parking_lot/parking_lot.module';

@Module({
  imports: [ParkingLotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
