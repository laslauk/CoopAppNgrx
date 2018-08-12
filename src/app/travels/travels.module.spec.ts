import { TravelsModule } from './travels.module';

describe('TravelsModule', () => {
  let travelsModule: TravelsModule;

  beforeEach(() => {
    travelsModule = new TravelsModule();
  });

  it('should create an instance', () => {
    expect(travelsModule).toBeTruthy();
  });
});
