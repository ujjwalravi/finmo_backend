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
});
