import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'src/types/model';
import Swal from 'sweetalert2';
import { TableApi } from '../api/table.api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tables: Table[]
  table: Table
  
  constructor(private tableApi: TableApi, private route: ActivatedRoute,
    private router: Router) {   }

  ngOnInit(): void {
    this.fetch()
  }

  refreshList(): void {
    this.fetch();
  }

  successDeleteNotification(){
    Swal.fire({
      icon: "success",
      title: "Table has been deleted.",
      showConfirmButton: false,
      timer: 1000,
      position: "bottom-right"
    })
  }

  fetch() {
    this.tableApi.getTables().subscribe(tables => {
      this.tables = tables;
    })
  }

  delete(id): void {
    this.tableApi.deleteTable(id)
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
          this.successDeleteNotification();
        },
        error => {
          console.log(error);
        });
  }
}
