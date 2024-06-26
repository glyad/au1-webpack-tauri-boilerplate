import {bootstrap} from 'aurelia-bootstrapper';
import {ComponentTester, StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';
import { expect } from "@jest/globals";

describe('Stage App Component', () => {
  let component: ComponentTester<unknown>;

  beforeEach(() => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('app'))
      .inView('<app></app>');
  });

  afterEach(() => component.dispose());

  it('should render message', done => {
    component.create(bootstrap).then(() => {
      const view = component.element;
      expect(view.textContent.trim()).toContain('Hello Fucking World!');
      done();
    }).catch(e => {
      //fail(e);
      done(e);
    });
  });
});
