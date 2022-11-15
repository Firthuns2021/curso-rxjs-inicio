import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5);

// take , para limitar las emisiones de nuestros observables
numeros$.pipe(
    tap( t => console.log('tap', t) ),
    take(2) // le estamos diciendo que solo se cuente hasta la posición 2
)
    .subscribe({
        next: val => console.log('next:' , val),
        complete: () => console.log('complete'),
    });





