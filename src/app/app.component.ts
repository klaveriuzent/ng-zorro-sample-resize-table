import { Component } from '@angular/core';

import { NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'nz-demo-resizable-table',
  template: `
    <nz-table #basicTable [nzData]="listOfData">
      <thead>
        <tr>
          <th nz-resizable nzPreview [nzWidth]="'180px'" [nzMaxWidth]="256" [nzMinWidth]="60" (nzResizeEnd)="onResize($event, 'name')">
            Nama
            <nz-resize-handle nzDirection="right">
              <div class="resize-trigger"></div>
            </nz-resize-handle>
          </th>
          <th nz-resizable nzPreview [nzWidth]="'180px'" [nzMaxWidth]="256" [nzMinWidth]="60" (nzResizeEnd)="onResize($event, 'age')">
            Umur
            <nz-resize-handle nzDirection="right">
              <div class="resize-trigger"></div>
            </nz-resize-handle>
          </th>
          <th nz-resizable nzPreview [nzWidth]="addressWidth" [nzMaxWidth]="256" [nzMinWidth]="60" (nzResizeEnd)="onResize($event, 'address')">
            Addres
            <nz-resize-handle nzDirection="right">
              <div class="resize-trigger"></div>
            </nz-resize-handle>
          </th>
          <th>
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
          <td>-</td>
        </tr>
      </tbody>
    </nz-table>
  `,
  styles: [
    `
      .nz-resizable-preview {
        border-width: 0;
        border-right-width: 1px;
      }
    `,
  ],
})
export class NzDemoResizableTableComponent {
  nameWidth = '180px';
  ageWidth = '180px';
  addressWidth = '200px';

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  onResize({ width }: NzResizeEvent, col: string): void {
    if (col === 'name') {
      this.nameWidth = `${width}px`;
    } else if (col === 'age') {
      this.ageWidth = `${width}px`;
    } else if (col === 'address') {
      this.addressWidth = `${width}px`;
    }
  }
}
