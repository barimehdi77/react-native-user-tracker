export type HttpMethod = 'post' | 'get';

export type DevicePlatform = 'ios' | 'android' | 'windows' | 'macos' | 'web';

export interface NetworkConfiguration {
  host: string;

  /**
   * The collector endpoint
   */
  endpoint: string;

  /**
   * The Http Method to use when sending events to the collector
   * @defaultValue 'Post'
   */
  method: HttpMethod;

  /**
   * Custom headers for HTTP requests to the Collector.
   */
  requestHeaders?: Record<string, string>;
}

export interface AppTrackerConfiguration {
  /**
   * Identifier of the app.
   */
  appId: string;

  /**
   * The device platform the tracker runs on.
   * @defaultValue 'android'
   */
  devicePlatform: DevicePlatform;

  /**
   * The language application runs with
   * @defaultValue 'ar'
   */
  appLanguage: string;
}

export interface TrackedUserConfiguration {
  userId: string;
}

export interface TrackerInterface {
  network: NetworkConfiguration;
  appTracker: AppTrackerConfiguration;
  trackedUser: TrackedUserConfiguration;
  pushEvent<T>(eventType: string, data: T): void;
}

export interface CollectedData<T> {
  appName: string;
  userId: string;
  type: string;
  data: T;
  date: number;
}
