import { Routes } from '@angular/router';
import { SortingComponent } from './sorting/sorting.component';
import { FilteringComponent } from './filtering/filtering.component';
import { PagingComponent } from './paging/paging.component';
import { EditingComponent } from './editing/editing.component';
import { Part2DesignEvaluationComponent } from './part2-design-evaluation/part2-design-evaluation.component';

export const routes: Routes = [
//   { path: 'editing', component: EditingComponent, data: { text: 'editing' } },
  //   { path: 'paging', component: PagingComponent, data: { text: 'paging' } },
  //   { path: 'grid-editing', component: GridEditingComponent, data: { text: 'grid-editing' } },
  //   { path: 'grid-batch-editing', component: GridBatchEditingComponent, data: { text: 'Grid Batch Editing' } },
  //   { path: 'teet', component: TeetComponent, data: { text: 'Teet' } },
  //   { path: 'basi-grid', component: BasiGridComponent, data: { text: 'basi-grid' } },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'paging',
  },
  { path: 'paging', component: PagingComponent, data: { text: 'Paging' } },
  { path: 'sorting', component: SortingComponent, data: { text: 'Sorting' } },
  { path: 'filtering', component: FilteringComponent, data: { text: 'Filtering' } },
  { path: 'editing', component: EditingComponent, data: { text: 'editing' } },

  { path: 'part2-design-evaluation', component: Part2DesignEvaluationComponent, data: { text: 'Part 2 Design Evaluation' } }
];
