import {  Route } from './route.model';

export type Resource = {
  uuid: string;
  name:string;
  noOfColumns:number,
  resourceColumns:{};
  routes: Route[];
};



