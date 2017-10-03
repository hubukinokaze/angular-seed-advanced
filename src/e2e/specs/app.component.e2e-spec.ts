import { t } from '../index';
import { browser, element, by } from 'protractor';

t.describe('App', function() {

  t.be(async function() {
    return await browser.get('/');
  });

});
