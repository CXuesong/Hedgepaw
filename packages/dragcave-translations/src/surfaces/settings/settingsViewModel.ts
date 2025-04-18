import { ObservableViewModelBase } from "src/utils/observableViewModel";

export class SettingsViewModel extends ObservableViewModelBase {
  private _isOpened = false;
  public get isOpened(): boolean {
    return this._isOpened;
  }
  public set isOpened(value: boolean) {
    if (this._isOpened === value) return;
    this._isOpened = value;
    this._notifyChanged("isOpened");
  }
}
