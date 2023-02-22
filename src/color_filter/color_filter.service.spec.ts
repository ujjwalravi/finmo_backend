import { Test, TestingModule } from '@nestjs/testing';
import { ParkService } from '../park/park.service';
import { ParkingLotService } from '../parking_lot/parking_lot.service';
import { ColorFilterService } from './color_filter.service';
import { Park } from '../park/park.model';

describe('ColorFilterService', () => {
	let service: ColorFilterService;
    let secondService: ParkService;
    let thirdService: ParkingLotService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
            imports: [Park],
			providers: [ColorFilterService, ParkService, ParkingLotService],
		}).compile();

		service = module.get<ColorFilterService>(ColorFilterService);
        secondService = module.get<ParkService>(ParkService);
        thirdService = module.get<ParkingLotService>(ParkingLotService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

    describe('getRegNumbers', () => {
		it('should return the registration numbers of parked cars', () => {
            secondService.parkedCarsMap.set(1, new Park(1, "KA-12355", "green"));
            secondService.parkedCarsMap.set(2, new Park(2, "KA-123", "red"));
            secondService.parkedCarsMap.set(3, new Park(3, "KA-1234", "green"));
            const regNums = service.getRegNumbers("green");
            const expectedRes = ["KA-12355", "KA-1234"];
			expect(regNums).toStrictEqual(expectedRes);
		});
	});

    describe('getSlotNumbers', () => {
		it('should return the slot numbers of parked cars', () => {
            secondService.parkedCarsMap.set(1, new Park(1, "KA-12355", "green"));
            secondService.parkedCarsMap.set(2, new Park(2, "KA-123", "red"));
            secondService.parkedCarsMap.set(3, new Park(3, "KA-1234", "green"));
            const slotNums = service.getSlotNumbers("green");
            const expectedRes = [1, 3];
			expect(slotNums).toStrictEqual(expectedRes);
		});
	});
});
