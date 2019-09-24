export interface Place {
  trcid: string;
  title: string;
  location: {
    city: string,
    adress: string,
    zipcode: string,
    latitude: string,
    longitude: string
  }
  dates: {
    startdate: Date;
  }

}
