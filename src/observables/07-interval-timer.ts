import { interval, timer } from 'rxjs';

// https://rxjs.dev/api/index/function/interval
const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );


const interval$ = interval(1000);

// const timer$    = timer(0);
// const timer$    = timer(2000);
// const timer$    = timer(2000, 1000 );
const timer$    = timer( hoyEn5 ); // para cuando queremos programar una actividad en el futuro


console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer )
console.log('Fin');







