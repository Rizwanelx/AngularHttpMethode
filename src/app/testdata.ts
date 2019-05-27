import { InMemoryDbService } from 'angular-in-memory-web-api';


export class TestData implements InMemoryDbService {
  createDb() {
    const bookdetails = [
      { id: 1, name: 'Mr. Nice', category: 'Angular', writer: 'John Smith' },
    ];
    return {books: bookdetails};
  }

}
