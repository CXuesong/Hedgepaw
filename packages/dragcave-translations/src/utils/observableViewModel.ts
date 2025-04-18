import { Events } from "jscorlib";
import { eventEmitterToEventSubscriber } from "../utils/eventEmitter";
import * as React from "react";

export interface ObservableViewModel {
  onPropertyChanged: (handler: Events.EventHandler<PropertyChangedEventArgs>) => Disposable;
}

export abstract class ObservableViewModelBase implements ObservableViewModel {
  private _propertyChangedEvent = new Events.EventEmitter<PropertyChangedEventArgs>();
  public onPropertyChanged = eventEmitterToEventSubscriber(this._propertyChangedEvent);
  protected _notifyChanged(propertyName?: string | number | symbol): void;
  protected _notifyChanged(propertyName?: keyof this): void;
  protected _notifyChanged(propertyName?: string | number | symbol): void {
    this._propertyChangedEvent.invoke({ propertyName });
  }
}

export interface PropertyChangedEventArgs {
  readonly propertyName?: string | number | symbol;
}

export function useObservableViewModelSelector<T extends ObservableViewModel, TResult>(
  viewModel: T,
  selector: (viewModel: T) => TResult,
): TResult {
  const [result, setResult] = React.useState(() => selector(viewModel));
  React.useEffect(() => {
    const disposable = viewModel.onPropertyChanged(() => {
      setResult(selector(viewModel));
    });
    return () => disposable[Symbol.dispose]();
  }, [viewModel]);
  return result;
}
