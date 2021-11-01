export class PromiseSample {
  public execute(): void {
    const p = new Promise<string>((resolveFn, rejectFn) => {
      setTimeout(() => {
        resolveFn('resolve');
      }, 2000);
    });

    p.then(result => {
      console.log('result=>', result);
    });
  }
}
