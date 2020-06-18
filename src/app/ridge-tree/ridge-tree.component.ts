import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {RigdeTreeService} from './rigde-tree.service';
import {TreeviewItem} from 'ngx-treeview';
import {ITree} from './models/tree';
import {Subscription} from 'rxjs';


@Component({
  selector: 'yl-ridge-tree',
  templateUrl: './ridge-tree.component.html',
  styleUrls: ['./ridge-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RidgeTreeComponent implements OnInit, OnDestroy {

  itCategory: TreeviewItem[] = [];
  treeConfig = {
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 500
  };
  sub: Subscription;
  url: string = '';

  constructor(private rigdeTreeService: RigdeTreeService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getTreeData();
    this.url = this.rigdeTreeService.apiUrl;
  }

  getTreeData(): void {
    this.sub = this.rigdeTreeService.getTree().subscribe((tree: ITree) => {
      this.itCategory.push(new TreeviewItem(tree));
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChangeUrl(): void {
    this.url = this.rigdeTreeService.apiUrl;
    if (this.itCategory.length > 0) {
      this.itCategory = [];
      this.getTreeData();
    }
  }
}
