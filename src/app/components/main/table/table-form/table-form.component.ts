import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Table } from 'src/types/model';
import Swal from 'sweetalert2';
import { TableApi } from '../../api/table.api';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {
  table: Table;
  form: FormGroup;
  private routeSub: String;

  constructor(private tableApi: TableApi, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]]
    })
    this.routeSub = this.route.snapshot.params.id;
    this.tableApi.getTable(this.routeSub).subscribe(table => {
      if (table) {
        this.form.patchValue(table)
        this.table = table;
      }
    })
  }

  ngOnDestroy() {
    this.routeSub = null;
  }

  newTable(): void {
    this.table;
  }

  successNotification(){
    Swal.fire({
      icon: "success",
      title: "Table has been saved.",
      showConfirmButton: false,
      timer: 1000,
      position: "bottom-right"
    })
  }

  submit(): void {
    if (this.form.invalid) {
      return alert("failed");
    }
    let body = this.form.value;
    console.log(this.table);
    console.log(body)
    if(this.table) {
      body = Object.assign({}, body, { id: this.table.id})
      this.tableApi.updateTable(this.table.id, body).pipe(tap(() => {
      })).subscribe((response) => {
        console.log(response);
        this.successNotification();
        this.router.navigate(['/table']);
      }, (error) => {
        console.log(error)
      })
    } else {
      this.tableApi.saveTable(body)
      .subscribe(
        response => {
          console.log(response);
          this.successNotification();
          this.router.navigate(['/table']);
        },
        error => {
          console.log(error);
        });
    }
  }

}
