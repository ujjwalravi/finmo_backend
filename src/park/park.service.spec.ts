import { Test, TestingModule } from '@nestjs/testing';
import { ParkService } from './park.service';
import { ParkingLotService } from '../parking_lot/parking_lot.service';
import { Park } from './park.model';

describe('ParkService', () => {
	let service: ParkService;
    let secondService: ParkingLotService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
            imports: [Park],
			providers: [ParkService, ParkingLotService],
		}).compile();

		service = module.get<ParkService>(ParkService);
        secondService = module.get<ParkingLotService>(ParkingLotService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

    describe('parkCar', () => {
		it('should park the car return slot', () => {
            secondService.parking_lot_size = 5;
            const demoParkedCar = new Park(1, "KA-123", "green");
            service.parkedCarsMap.set(1, demoParkedCar);
			const parkCar = service.parkCar("KA-546", "red");
			expect(parkCar).toBe(2);
		});

        it('should throw error if parking slot are full', () => {
			secondService.parking_lot_size = 2;
			service.parkedCarsMap.set(1, new Park(1, "KA-123", "green"));
            service.parkedCarsMap.set(2, new Park(2, "KA-1236", "red"));
			const parkVehicle = () => {
				return service.parkCar("KA-789", "white");
			};
			expect(parkVehicle).toThrowError();
		});

		it('should throw error if any one of the parameter is missing', () => {
			secondService.parking_lot_size = 1;
			service.parkedCarsMap.set(1, new Park(1, "KA-123", "green"));
			const parkVehicle = () => {
				return service.parkCar(undefined, "white");
			};
			expect(parkVehicle).toThrowError();
		});
	});

    describe('freeSlot', () => {
		it('should free the slot when slot number is passed', () => {
            const demoParkedCar = new Park(1, "KA-123", "green");
            service.parkedCarsMap.set(1, demoParkedCar);
			const freeSlot = service.freeSlot(1);
			expect(freeSlot).toBe(1);
		});

        it('should throw error if the passed slot number is already free', () => {
            const demoParkedCar = new Park(1, "KA-123", "green");
            service.parkedCarsMap.set(1, demoParkedCar);
			const freeSlots = () => {
				return service.freeSlot(2);
			};
			expect(freeSlots).toThrowError();
		});

        it('should free the slot when registration number is passed', () => {
            const demoParkedCar = new Park(1, "KA-123", "green");
            service.parkedCarsMap.set(1, demoParkedCar);
			const freeSlot = service.freeSlot(null, "KA-123");
			expect(freeSlot).toBe(1);
		});

        it('should throw error if the passed registration number is not in parking', () => {
            const demoParkedCar = new Park(1, "KA-123", "green");
            service.parkedCarsMap.set(1, demoParkedCar);
			const freeSlots = () => {
				return service.freeSlot(null, "BR-1254");
			};
			expect(freeSlots).toThrowError();
		});
	});

    describe('getStatus', () => {
		it('should return the status of the parking lot', () => {
            service.parkedCarsMap.set(1, new Park(1, "KA-123", "green"));
            service.parkedCarsMap.set(2, new Park(2, "KA-1234", "red"));
            const slotList = service.getStatus();
            const expectedRes = [{"allocated_slot_number": 1, "car_reg_no": "KA-123", "color": "green"}, {"allocated_slot_number": 2, "car_reg_no": "KA-1234", "color": "red"}];
			expect(slotList).toStrictEqual(expectedRes);
		});
	});
});
