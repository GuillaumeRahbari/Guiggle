import { GuigglePage } from './app.po';

describe('guiggle App', function() {
  let page: GuigglePage;

  beforeEach(() => {
    page = new GuigglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
