import { Observable } from 'rxjs';

export class ObservableSample {

  public execute(): void {
    const obs$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000)

      setTimeout(() => {
        observer.complete();
      }, 2000)
    });

    obs$.subscribe(
      v => {
        console.log(v);
      },
      e => {
        console.log(e);
      },
      () => {
        console.log('complete');
      })
  }
}
