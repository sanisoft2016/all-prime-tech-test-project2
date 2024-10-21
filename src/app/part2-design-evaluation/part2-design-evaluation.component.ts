import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-part2-design-evaluation',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './part2-design-evaluation.component.html',
  styleUrl: './part2-design-evaluation.component.css'
})

export class Part2DesignEvaluationComponent {

  notYetImplemented()
  {
    alert("Sorry, This is Not Yet Implemented!");
  }
  constructor(private router: Router)
   {

  }
}
