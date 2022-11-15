import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


const numbers = [1,2,3,4,5,6];

const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer, 0 );
console.log('total arr', total );

interval(500).pipe(
    take(6),
    tap( console.log ),// tap para ver que es lo que está sucediendo
    reduce( totalReducer )
)
    .subscribe({
        next: val => console.log('next:', val ),
        complete: () => console.log('Complete')
    });





