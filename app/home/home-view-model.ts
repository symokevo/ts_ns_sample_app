import { Observable, ObservableArray } from '@nativescript/core';
import { FlickModel } from '~/models/flick.model';
import { FlickService } from '~/services/flick.service';

// Add the contents of the HomeViewModel class
export class HomeViewModel extends Observable {
  private _flicks: FlickModel[];

  constructor() {
    super();
    this.populateFlicks();
  }

  // this will be used as the data source of our listView
  get flicks(): ObservableArray<FlickModel> {
    return new ObservableArray(this._flicks);
  }

  populateFlicks(): void {
    this._flicks = FlickService.getInstance().getFlicks();
  }
};
