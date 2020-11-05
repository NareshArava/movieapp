import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class appervices{
    constructor(private http:HttpClient){
        console.log("hi")
    }
    //public List<movies> getMovies(){}
    getmovies():Observable<any>{
        return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=46cb0826bc9d924445bc90903e183ebf&language=en-US&page=1")

    }
}