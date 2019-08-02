import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NewsService} from './shared/news.service';
import Article = namespace.Article;

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit, OnDestroy{
  p: number = 1;
  sub: Subscription
  articles: Article[]
  articles2: Article[]
  totalResults: number
  totalResults2: number
  isLoading = false
  constructor(private newsservice: NewsService) { }
  ngOnInit() {
    this.getNews()
    this.getNewsSci()
  }
  getNewsSci() {
    this.sub = this.newsservice.getNewsSCI().subscribe((ress) => {
     // console.log(res)
      this.articles = ress['articles']
     // console.log(this.articles2)
      this.totalResults2 = ress['totalResults']
     // console.log(this.totalResults2)
    }, (error) => {
      console.log(error)
      this.isLoading = false
    }, () => {
      this.isLoading = true
    })
  }
getNews() {
    this.sub = this.newsservice.getNewsTH().subscribe((res) => {
      // console.log(res)
      this.articles = res['articles']
     // console.log(this.articles)
      this.totalResults = res['totalResults']
     // console.log(this.totalResults, 'news')
    }, (error) => {
      console.log(error)
      this.isLoading = false
    }, () => {
      this.isLoading = true
    })
}
ngOnDestroy(): void {
    this.sub.unsubscribe()
}
}
