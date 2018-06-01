import { Injectable } from '@nestjs/common';
/**
 * Created by jakubkolecki on 01.06.2018.
 */

@Injectable()
export class PropertiesService {
  private omdbUrl = 'http://www.omdbapi.com';
  private omdbApikey = 'eb9b8329';
  public getOmbApiURL = () => {
    return `${this.omdbUrl}/?apikey=${this.omdbApikey}`
  }
}