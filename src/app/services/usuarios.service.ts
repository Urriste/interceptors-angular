import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios() {


    return this.http.get('https://reqres.in/api/user').pipe(
      map((res: any) => {

        return res['data']

      }),
      catchError(err => {

        console.warn("Ocurrio un error", err)

        return throwError("Error")

      })

    );

  }
}
