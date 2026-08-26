import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {

  currentRole = signal('Java Full Stack Developer');

  roles = [
    'Java Full Stack Developer',
    'Software Development Engineer',
    'Problem Solver'
  ];

  private roleIndex = 0;
  private roleInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.roleInterval = setInterval(() => {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.currentRole.set(this.roles[this.roleIndex]);
    }, 2500);
  }

  ngOnDestroy(): void {
    if (this.roleInterval) {
      clearInterval(this.roleInterval);
    }
  }
}
