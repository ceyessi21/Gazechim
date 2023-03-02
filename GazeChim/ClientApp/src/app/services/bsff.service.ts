// import { Injectable } from '@angular/core';
// import { catchError, Observable, tap } from 'rxjs';
// import { BsffCollectionType } from '../models/bsff/bsff-collection';
// import { BsffPdfType } from '../models/bsff/bsff-pdf-type';
// import { BsffType } from '../models/bsff/bsff-type';
// import { BsffInput } from '../models/bsff/inputs/bsff-input';
// import { BsffSignatureInput } from '../models/bsff/inputs/BsffSignatureInput';
// import { ApiService } from './api.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class BsffService {
//   //Instanciate the api service
//   constructor(private http: ApiService) {}

//   public getAll(): Observable<BsffCollectionType> {
//     return this.http.get<BsffCollectionType>('bsffs').pipe(
//       tap((e) => console.log('success')),
//       catchError(this.http.handleError<BsffCollectionType>('get all bsffs'))
//     );
//   }

//   public getById(id: string): Observable<BsffType> {
//     return this.http.get<BsffType>(`bsff/${id}`).pipe(
//       tap((e: BsffType) => console.log('success')),
//       catchError(this.http.handleError<BsffType>('get bsff by id'))
//     );
//   }

//   public getPdf(id: string): Observable<BsffPdfType> {
//     return this.http.get<BsffPdfType>(`bsff/pdf/${id}`).pipe(
//       tap((e: BsffPdfType) => console.log('success')),
//       catchError(this.http.handleError<BsffPdfType>('get bsff pdf '))
//     );
//   }

//   public post(bsffInput: BsffInput): Observable<BsffInput> {
//     return this.http.post<BsffInput>('bsff', bsffInput).pipe(
//       tap((e: any) => console.log(`success`)),
//       catchError(this.http.handleError<BsffInput>('add Bsff'))
//     );
//   }

//   public sign(
//     id: string,
//     bsffSignatureInput: BsffSignatureInput
//   ): Observable<BsffSignatureInput> {
//     return this.http
//       .post<BsffSignatureInput>(`bsff/sign/${id}`, bsffSignatureInput)
//       .pipe(
//         tap((e: any) => console.log(`success`)),
//         catchError(this.http.handleError<BsffSignatureInput>('sign bsff'))
//       );
//   }
// }
