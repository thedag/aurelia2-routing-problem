import { IRoute } from "@aurelia/router";
import { GdprHome } from './home/gdpr-home';
import { GdprServers } from './servers/gdpr-servers';

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function simpleRoute(id, component): IRoute {
  return {
    id,
    title: capitalize(id),
    path: id,
    component
  };
}

const defaultRoute: IRoute = { id: 'Home', title: 'Home', path: '', component: GdprHome };

export class MyApp {
  static routes: IRoute[] = [
    defaultRoute,
    simpleRoute("servers", GdprServers)
  ];
}