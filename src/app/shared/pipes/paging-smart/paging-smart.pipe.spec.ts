import { PagingSmartPipe } from './paging-smart.pipe';

describe('PagingSmartPipe', () => {
  let pipe: PagingSmartPipe;

  beforeEach((() => {
    pipe = new PagingSmartPipe;
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
