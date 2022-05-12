import { animate, AnimationMetadata, AnimationTriggerMetadata, query, stagger, style, transition, trigger } from '@angular/animations';

const enter: AnimationMetadata[] = [
  style({ transform: 'scale(0) translateY(100%) rotate(45deg)' }),
  stagger(100, animate('0.5s ease-in-out'))
];

export const popover: AnimationTriggerMetadata = trigger('popover', [
  transition(':enter', query(':enter, app-add-item', enter)),
  transition(':increment', query(':enter', enter)),
  transition(':leave, :decrement', query(':leave',
    animate('0.5s ease-in-out', style({ transform: 'scale(0) rotate(45deg)' }))))
]);
