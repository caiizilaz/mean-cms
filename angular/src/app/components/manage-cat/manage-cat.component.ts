import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-manage-cat',
  templateUrl: './manage-cat.component.html',
  styleUrls: ['./manage-cat.component.scss']
})
export class ManageCatComponent implements OnInit {
  @Input() cat;
  @Output() callback: EventEmitter<object[]> = new EventEmitter<object[]>();
  catList: object[] = [];
  caretDown: boolean = false;
  catName: string;
  selectedCat: object[] = [];
  constructor(public toastr: ToastsManager,
    private catService: CatService) { }
  ngOnInit() {
    this.catService.getCat().subscribe(data => {
      this.catList = data;
      if (this.cat) {
        this.setSelectCat();
      }
    })
  }
  addNewCat() {
    const cat = {
      name: this.catName
    }
    this.catService.addCat(cat).subscribe(data => {
      this.chkToast(data);
    });
  }
  delCat(id) {
    this.catService.deleteCat(id).subscribe(data => {
      this.chkToast(data);
    })
  }
  selectCat(d) {
    this.selectedCat.push(d);
    let index = this.catList.indexOf(d);
    this.catList.splice(index, 1);
    this.callback.emit(this.selectedCat)
  }
  deSelectCat(d) {
    this.catList.push(d);
    let index = this.selectedCat.indexOf(d);
    this.selectedCat.splice(index, 1);
    this.callback.emit(this.selectedCat)
  }
  setSelectCat() {
    this.cat.map((c) => {
      return this.catList.forEach((cl, index) => {
        if (cl["_id"] === c) {
          this.selectedCat.push(this.catList[index]);
          this.catList.splice(index, 1);
        }
      });
    });
  }
  toggleDropDown(val) {
    this.caretDown = val;
  }
  chkToast(data) {
    if (data.success) {
      this.catList = data.cat;
      this.toastr.success(data.msg, 'Success!');
      this.catName = '';
    } else {
      this.toastr.error(data.msg, 'Oops!');
    }
  }
}
