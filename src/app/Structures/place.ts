export interface IPlace {
  id: number,
  title: string,
  location: {zipcode: string, city: string, adress: string},
  startdate: Date
}
