import { AngularIcheckPage } from './app.po';

describe('angular-icheck App', () => {
  let page: AngularIcheckPage;

  beforeEach(() => {
    page = new AngularIcheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
