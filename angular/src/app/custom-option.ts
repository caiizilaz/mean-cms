import { ToastOptions } from 'ng2-toastr';

export class CustomOption extends ToastOptions {
  animate = 'flyLeft';
  newestOnTop = true;
  showCloseButton = true;
  positionClass= 'toast-bottom-left';
}