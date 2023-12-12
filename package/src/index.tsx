import axios from 'axios';
import type {
  AppTrackerConfiguration,
  CollectedData,
  NetworkConfiguration,
  TrackedUserConfiguration,
  TrackerInterface,
} from './types';

class Tracker implements TrackerInterface {
  constructor(
    public network: NetworkConfiguration,
    public appTracker: AppTrackerConfiguration,
    public trackedUser: TrackedUserConfiguration
  ) {}

  private constratData<T>(eventType: string, data: T): CollectedData<T> {
    return {
      appName: this.appTracker.appId,
      userId: this.trackedUser.userId,
      type: eventType,
      data,
      date: Date.now(),
    };
  }

  public pushEvent<T>(eventType: string, data: T): void {
    const postData: CollectedData<T> = this.constratData<T>(eventType, data);

    axios.post(this.network.host.concat(this.network.endpoint), postData, {
      headers: this.network.requestHeaders,
    });
  }
}

export default Tracker;
