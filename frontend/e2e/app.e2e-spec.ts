import { AngularElasticsearchPage } from './app.po';

describe('angular-elasticsearch App', function() {
  let page: AngularElasticsearchPage;

  beforeEach(() => {
    page = new AngularElasticsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
