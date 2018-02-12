import { InMemoryDbService } from 'angular-in-memory-web-api';
import carData from './cars';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = carData;
    return {cars};
  }
}