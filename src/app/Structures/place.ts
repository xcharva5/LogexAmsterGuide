export interface Place {
  trcid: string;
  title: string;
  location: {
    city: string,
    adress: string,
    zipcode: string,
    latitude: string,
    longitude: string
  };
  urls: Array<string>;
  media: Array<Media>;
  dates: {
    startdate: Date;
  };
}

export interface Media {
  url: string;
  main: string;
}
