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
  sub: Subscription
  articles: Article[]
  totalResults: number
  isLoading = false
  constructor(private newsservice: NewsService) { }
  ngOnInit() {
    this.getNews()
  }
getNews() {
    this.sub = this.newsservice.getNewsTH().subscribe((res) => {
      // console.log(res)
      this.articles = res['articles']
      console.log(this.articles)
      this.totalResults = res['totalResults']
      console.log(this.totalResults, 'news')
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
