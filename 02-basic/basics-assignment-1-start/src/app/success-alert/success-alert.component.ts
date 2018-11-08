import {Component} from "@angular/core";

@Component({
  selector: 'app-success-alert',
  template: `
    <h3 class="success">Success</h3>
  `,
  styles: [`
    .success {
      color: green;
    }
  `]
})
export class SuccessAlertComponent {
}
