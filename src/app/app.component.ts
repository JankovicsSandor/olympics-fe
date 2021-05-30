import { BehaviorSubject } from 'rxjs';
import { LoadingService } from './services/loading.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(public loadService: LoadingService) {
    this.loadService.getLoading$().subscribe(this.isLoading);
  }
}
