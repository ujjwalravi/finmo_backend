import { Test, TestingModule } from '@nestjs/testing';
import { ParkingLotService } from './parking_lot.service';

describe('ParkingLotService', () => {
	let service: ParkingLotService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ParkingLotService],
		}).compile();

		service = module.get<ParkingLotService>(ParkingLotService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('initSlot', () => {
		it('should initialise the slot', () => {
			service.parking_lot_size = -1;
			const payload = 5;
			const initialiseSlots = service.initSlot(payload);
			expect(initialiseSlots).toBe(payload);
		});

		it('should throw error if type is not number or the value is less than 0', () => {
			const payload = -5;
			service.parking_lot_size = -1;
			const initialiseSlots = () => {
				return service.initSlot(payload);
			};
			expect(initialiseSlots).toThrowError();
		});

		it('should throw error if parking slot is already initialised', () => {
			const payload = 5;
			service.parking_lot_size = 1;
			const initialiseSlots = () => {
				return service.initSlot(payload);
			};
			expect(initialiseSlots).toThrowError();
		});
	});

	describe('incrementSlot', () => {
		it('should increment the slot', () => {
			service.parking_lot_size = 5;
			const currSize = service.parking_lot_size
			const payload = 10;
			const incrementSlots = service.incrementSlot(payload);
			expect(incrementSlots).toBe(payload + currSize);
		});

		it('should throw error if type is not number or the value is less than 0', () => {
			const payload = -5;
			service.parking_lot_size = 2;
			const incrementSlots = () => {
				return service.incrementSlot(payload);
			};
			expect(incrementSlots).toThrowError();
		});

		it('should throw error if parking slot is not initialised', () => {
			const payload = 5;
			service.parking_lot_size = -1;
			const incrementSlots = () => {
				return service.incrementSlot(payload);
			};
			expect(incrementSlots).toThrowError();
		});
	});

	describe('getParkingLotSize', () => {
		it('should fetch the slot size', () => {
			service.parking_lot_size = 5;
			const fetchSlotSize = service.getParkingLotSize();
			expect(fetchSlotSize).toBe(service.parking_lot_size);
		});
	});
});
