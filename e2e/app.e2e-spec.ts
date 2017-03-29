import { PokeChallengePage } from './app.po';

describe('poke-challenge App', () => {
  let page: PokeChallengePage;

  beforeEach(() => {
    page = new PokeChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
