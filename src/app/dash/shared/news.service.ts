import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import News = namespace.News;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsApiTH = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=a0fb137bf22e4b92a71a78cafe6e6ede'
  constructor(private http: HttpClient) { }
  getNewsTH(): Observable<News> {
    return this.http.get<News>(this.newsApiTH)
  }
}
