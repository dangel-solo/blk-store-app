import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class CustomModalService {
  bsModalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent(
    component: any,
    initialState: any = {},
    style: string
  ): BsModalRef {
    this.bsModalRef = this.modalService.show(component, {
      initialState,
      class: style,
    });

    return this.bsModalRef;
  }

  closeModal(): void {
    this.bsModalRef?.hide();
  }
}
