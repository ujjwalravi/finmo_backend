import { Module } from '@nestjs/common';

import { ColorFilterController } from './color_filter.controller';
import { ColorFilterService } from './color_filter.service';
import { ParkModule } from '../park/park.module';

@Module({
    controllers: [ColorFilterController],
    providers: [ColorFilterService],
    imports: [ParkModule]
})
export class ColorFilterModule {}
