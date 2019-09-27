export interface Event {
  trcid: string;
  title: string;
  location: {
    name: string,
    city: string,
    adress: string,
    zipcode: string,
    latitude: number,
    longitude: number
  };
  urls: Array<string>;
  media: Array<Media>;
  dates: {
    singles: Date[];
  };
}

export interface Media {
  url: string;
  main: string;
}
