import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.css']
})
export class LazyLoadComponent implements OnInit {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  text6: any;
  text7: any;
  text8: any;
  text9: any;
  text14: any;
  text10: any;
  text11: any;
  text12: any;
  text13: any;
  text15: any;
  text16: any;
  text17: any;
  text18: any;
  text19: any;
  text20: any;
  text21: any;
  text22: any;
  text23: any;
  text24: any;
  text25: any;
  text26: any;
  text27: any;
  text28: any;


  user: any = {
    name: "Thang",
    age: 24
  }

  ages: any = [
    { value: 10 },
    { value: 11 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
  ];

  employees = [
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33",
    },
    {
      id: 2,
      firstName: "Priscella",
      lastName: "Signe",
      email: "psigne1@berkeley.edu",
      gender: "Female",
      ipAddress: "183.243.228.65",
    },
    // more data
  ];

  constructor() { }

  ngOnInit(): void {
    const observer = {
      next: (val: any) => console.log(val),
      error: (err: any) => console.log(err),
      complete: () => console.log('complete'),
    };
    this.text1 = `
    import { PreloadAllModules } from "@angular/router";

    const routes: Routes = [
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },
      {
        path: "",
        redirectTo: "article",
        pathMatch: "full",
      },
    ];
    
    @NgModule({
      imports: [
        RouterModule.forRoot(routes, {
          preloadingStrategy: PreloadAllModules,
        }),
      ],
      exports: [RouterModule],
    })
    export class AppRoutingModule {}
    `;
    this.text2 = `
    forkJoin([of(1), of('hello'), of({ foo: 'bar' })]).subscribe(observer);
    // output: [1, 'hello', {foo: 'bar'}]
    // output: 'complete'
    
    forkJoin({ one: of(1), hello: of('hello'), foo: of({ foo: 'bar' }) }).subscribe(
      observer
    );
    /**
     * output:
     * {
     *   one: 1,
     *   hello: 'hello',
     *   foo: { foo: 'bar' }
     * }
     * output: 'complete'
     */
    `;
    this.text3 = `
    forkJoin([
      this.apiService.getAccountDropdown(),
      this.apiService.getDepartmentDropdown(),
      this.apiService.getStoreDropdown(),
    ]).subscribe(observer);
    // output: [accountList, departmentList, storeList]
    // output: 'complete'
      `;
    this.text4 = `
    forkJoin(
      [
        this.apiService.getAccountDropdown(),
        this.apiService.getDepartmentDropdown(),
        this.apiService.getStoreDropdown(),
      ],
      (accountList, departmentList, storeList) => {
        return {
          accounts: accountList,
          departments: departmentList,
          stores: storeList,
        };
      }
    ).subscribe(observer);
    // output: { accounts: [...], departments: [...], stores: [...] }
    // output: 'complete'
      `;
    this.text5 = `
    combineLatest([
      interval(2000).pipe(map((x) => First:  x})), // {1}
      interval(1000).pipe(map((x) => Second: x})), // {2}
      interval(3000).pipe(map((x) => Third:  x})), // {3}
    ]).subscribe(observer);
    
    // output:
    // sau 3s, v?? interval(3000) c?? kho???ng th???i gian d??i nh???t:
    // [First 0, Second 2, Third 0] -- v?? sao? v?? t???i 3s, th?? {2} ???? emit ??c 3 l???n r???i (3s, m???i gi??y nh???y t??? 0 -> 1 -> 2)
    
    // sau 1s k??? ti???p: (gi??y th??? 4)
    // [First 1, Second 2, Third 0] -- v?? sao? v?? l??c n??y l?? gi??y th??? 4, {1} ???? emit ??c 2 l???n (4s, m???i 2 gi??y nh???y t???  0 -> 1)
    // [First 1, Second 3, Third 0] -- v?? sao? v?? l??c n??y l?? gi??y th??? 4, {2} ???? emit ??c l???n th??? 4 (0 -> 1 -> 2 -> 3)
    
    // sau 1s k??? ti???p: (gi??y th??? 5)
    // [First 1, Second 4, Third 0] -- {2} emit l???n th??? 5
    
    // sau 1s k??? ti???p: (gi??y th??? 6)
    // [First 2, Second 4, Third 0] -- {1} emit l???n th??? 3
    // [First 2, Second 5, Third 0] -- {2} emit l???n th??? 6
    // [First 2, Second 5, Third 1] -- {3} emit l???n th???
      `;
    this.text6 = `
    this.vm$ = combineLatest([
      this.paginationService.currentPage$,
      this.paginationService.currentSize$,
      this.paginationService.totalCount$,
      this.paginationService.currentOffset$,
    ]).pipe(
      map((currentPage, currentSize, totalCount, currentOffset) => {
        return {
          currentPage,
          currentSize,
          totalCount,
          currentOffset,
        };
      })
    );
    
    onSizeChanged(newSize: number) {
      this.paginationService.updateSize(newSize);
    }
    
    onPageChanged(newPage: number) {
      this.paginationService.updatePage(newPage);
    }
      `;
    this.text7 = `
    <ng-container *ngIf="vm$ | async as vm">
    <app-show-total
      [offset]="vm.currentOffset"
      [total]="vm.totalCount"
      [size]="vm.currentSize"
    ></app-show-total>
    <!-- Display: 1 - 20 of 100 -->
    <app-paginator
      [current]="vm.currentPage"
      [total]="vm.totalCount"
      [size]="vm.currentSize"
      (sizeChanged)="onSizeChanged($event)"
      (pageChanged)="onPageChanged($event)"
    ></app-paginator>
  </ng-container>
      `;
    this.text8 = `
    this.vm$ = combineLatest(
      [
        this.paginationService.currentPage$,
        this.paginationService.currentSize$,
        this.paginationService.totalCount$,
        this.paginationService.currentOffset$,
      ],
      (currentPage, currentSize, totalCount, currentOffset) => {
        return {
          currentPage,
          currentSize,
          totalCount,
          currentOffset,
        };
      }
    );
      `;
    this.text9 = `
    combineLatest(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(observer);
    // [1, 4, 7], // c??? 3 emit
    // [2, 4, 7], // obs1 emit 2, combineLatest emit gi?? tr??? 2 c???a obs1 v?? 2 gi?? tr??? c?? c???a obs2 v?? obs3
    // ...        // sau 1 lo???t emit
    // [3, 6, 9]
      `;
    this.text10 = `
    zip(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(observer);
    // [1, 4, 7]; // 3 s??? ?????u ti??n ??? t???ng observable
    // [2, 5, 8]; // 3 s??? ti???p theo
    // [3, 6, 9]; // 3 s??? cu???i c??ng
      `;
    this.text11 = `
    zip(of(1, 2, 3, 99), of(4, 5, 6), of(7, 8, 9)).subscribe(observer);
    // [1, 4, 7]; // 3 s??? ?????u ti??n ??? t???ng observable
    // [2, 5, 8]; // 3 s??? ti???p theo
    // [3, 6, 9]; // 3 s??? cu???i c??ng
    // 99 c???a observable ?????u ti??n s??? b??? b??? qua v?? observable th??? 2 v?? th??? 3 ???? complete m???t r???i.
      `;
    this.text12 = `
    const age$ = of<number>(29, 28, 30);
    const name$ = of<string>('Chau', 'Trung', 'Tiep');
    const isAdmin$ = of<boolean>(true, false, true);
    
    zip(age$, name$, isAdmin$).pipe(
      map(([age, name, isAdmin]) => ({ age, name, isAdmin }))
    );
    // output:
    // { age: 29, name: 'Chau', isAdmin: true }
    // { age: 28, name: 'Trung', isAdmin: false }
    // { age: 30, name: 'Tiep', isAdmin: true }
    
    // d??ng v???i projectFunction
    zip(age$, name$, isAdmin$, (age, name, isAdmin) => ({
      age,
      name,
      isAdmin,
    })).subscribe(observer);
    // output:
    // { age: 29, name: 'Chau', isAdmin: true }
    // { age: 28, name: 'Trung', isAdmin: false }
    // { age: 30, name: 'Tiep', isAdmin: true }
      `;
    this.text13 = `
    const log = (event, val) => event}: JSON.stringify(val)};
    const getCoords = pipe(
      map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
    );
    const documentEvent = (eventName) =>
      fromEvent(document, eventName).pipe(getCoords);
    
    zip(documentEvent('mousedown'), documentEvent('mouseup')).subscribe((e) =>
      console.log(log('start', e[0])} log('end', e[1])})
    );
    // output:
    // start: {"x":291,"y":136} end: {"x":143,"y":168}
    // start: {"x":33,"y":284} end: {"x":503,"y":74}
      `;
    this.text14 = `
    concat(of(4, 5, 6).pipe(delay(1000)), of(1, 2, 3)).subscribe(observer);
    // output:
    // sau 1s:
    // 4-5-6-1-2-3
    // output: 'complete'
      `;
    this.text15 = `
    const fiveSecondTimer = interval(1000).pipe(take(5));

    concat(fiveSecondTimer, fiveSecondTimer, fiveSecondTimer).subscribe(observer);
    // output: 0,1,2,3,4 - 0,1,2,3,4 - 0,1,2,3,4
    // output: 'complete'
    
    // d??ng repeat()
    concat(fiveSecondTimer.pipe(repeat(3))).subscribe(observer);
    // output: 0,1,2,3,4 - 0,1,2,3,4 - 0,1,2,3,4
    // output: 'complete'
      `;
    this.text16 = `
    merge(of(4, 5, 6).pipe(delay(1000)), of(1, 2, 3)).subscribe(observer);
    // output:
    // 1,2,3
    // sau 1s: 4,5,6
    // output: 'complete'
      `;
    this.text17 = `
    merge(
      interval(2000).pipe(mapTo('emit every 2 seconds'), take(3)),
      interval(1000).pipe(mapTo('emit every 1 second'), take(3))
    ).subscribe(observer);
    
    // output:
    // (sau 1s):
    // emit every 1 second
    // (sau 2s):
    // emit every 2 seconds
    // emit every 1 second
    // (sau 3s):
    // emit every 1 second - c??i n??y complete, v?? ???? emit 3 l???n r???i (take(3))
    // (sau 4s):
    // emit every 2 seconds
    // (sau 6s):
    // emit every 2 seconds - c??i n??y complete (take(3))
    // output: 'complete'
      `;
    this.text18 = `
    merge(
      interval(1000).pipe(mapTo('first'), take(5)), // will take 5 seconds to complete
      interval(2000).pipe(mapTo('second'), take(3)), // will take 6 seconds to complete
      interval(3000).pipe(mapTo('third'), take(2)), // will take 6 seconds to complete
      2
    ).subscribe(observer);
    
    // output:
    // (sau 1s):
    // first
    // (sau 2s):
    // first
    // second
    // (sau 3s):
    // first
    // (sau 4s):
    // first
    // second
    // (sau 5s):
    // first (first complete (take(5)), third s??? b???t ?????u ???????c subscribe)
    // (sau 6s):
    // second (second complete (take(3)))
    // (sau 8s):
    // third (v?? third b???t ?????u ??c subscribe ??? gi??y th??? 5)
    // (sau 11s):
    // third (third complete v?? take(2))
      `;
    this.text19 = `
    const formControlValueChanges = Object.keys(this.formGroup.value).map((key) =>
    this.formGroup.get(key).valueChanges.pipe(map((value) => ({ key, value })))
  ); // v?? d??? t??? {firstName: 'Chau', lastName: 'Tran'} -> [Observable<{key, value}>, Observable<{key, value}>]
  merge(...formControlValueChanges).subscribe(({key, value}) => {
    if (key === 'firstName') {...};
    if (key === 'lastName') {...};
  });
      `;
    this.text20 = `
    race(
      interval(1000).pipe(mapTo('fast')),
      interval(2000).pipe(mapTo('medium')),
      interval(3000).pipe(mapTo('slow'))
    ).subscribe(observer);
    // output: fast - 1s -> fast - 1s -> fast - 1s -> fast...
      `;
    this.text21 = `
    race(
      timer(10000), // timer 10 second
      this.userClick$, // user click event
      this.componentDestroy$ // navigate -> ngOnDestroy
    )
      .pipe(takeUntil(this.componentDestroy$)) // ch??ng ta c??ng s??? ko mu???n l???ng nghe v??o race n???a n???u nh?? componentDestroy$
      .subscribe(() => this.closeBanner());
      `;
    this.text22 = `
    fromEvent(document, 'click')
    .pipe(withLatestFrom(interval(1000)))
    .subscribe(observer);
  // output:
  // - click tr?????c 1s --- ch??? ?????n 1s --> [MouseEvent, 0]
  // - click sau 1s -> [MouseEvent, 0];
  // - click l??c 5.5s -> [MouseEvent, 4]; // sau 5s th?? gi?? tr??? g???n nh???t c???a interval(1000) l?? 4 (0 - 1 - 2 - 3 -4)
      `;
    this.text23 = `
    this.apiService.getSomething().pipe(withLatestFrom(this.currentLoggedInUser$));
    // c??c b???n g???i m???t API v?? c??c b???n mu???n d??ng k???t qu??? c???a API n??y + v???i th??ng tin c???a ng?????i d??ng ??ang ????ng nh???p ????? th???c hi???n nghi???p v??? k?? ti???p
      `;
    this.text24 = `
    of('world').pipe(starWith('Hello')).subscribe(observer);
    // output:
    // 'Hello'
    // 'word'
    // 'complete'
      `;
    this.text25 = `
    this.books$ = this.apiService.getBooks().pipe(startWith([]));

    <ng-container *ngIf="books$ | async as books">
    <!-- v?? books$ ???? c?? startWith([]) n??n gi?? tr??? c???a books s??? l?? truthy ngay t??? ?????u, n??n *ngIf n??y s??? truthy v?? render b??n trong ng-container ngay -->
    </ng-container>
      `;
    this.text26 = `
    of('hi', 'how are you?', 'sorry, I have to go now')
    .pipe(endWith('goodbye!'))
    .subscribe(observer);
  // output:
  // 'hi'
  // 'how are you?'
  // 'sorry, I have to go now'
  // 'goodbye!'
      `;
    this.text27 = `
    from([1, 2, 3, 4, 5])
    .pipe(
      pairwise(),
      map((prev, cur) => prev + cur)
    )
    .subscribe(observer);
  // output:
  // 3 (1 + 2)
  // 5 (2 + 3)
  // 7 (3 + 4)
  // 9 (4 + 5)
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
