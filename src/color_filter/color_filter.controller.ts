import { Body, Controller, Post, Get, Patch, Param } from '@nestjs/common';

import { ColorFilterService } from './color_filter.service';


@Controller()
export class ColorFilterController {
    constructor(private readonly colorFilterService: ColorFilterService) {}

    @Get('registration_numbers/:color')
    getRegNumbers(@Param('color') color: string) {
        return this.colorFilterService.getRegNumbers(color);
    }

    @Get('slot_numbers/:color')
    getSlotNumbers(@Param('color') color: string) {
        return this.colorFilterService.getSlotNumbers(color);
    }
}