import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {FooModule} from './foo/foo.module';
import {FooComponent} from './foo/foo.component';
import {FooService} from './foo/foo.service';
import {FooServiceMock} from './foo/foo.service.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FooModule,
      ],
      declarations: [
        AppComponent
      ],
    }).overrideComponent(FooComponent, {set: {providers: [{provide: FooService, useClass: FooServiceMock}]}})
      .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testbedOverrideComponent'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testbedOverrideComponent');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('testbedOverrideComponent app is running!');
  });
});
