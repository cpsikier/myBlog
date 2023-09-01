export type MenuRow = {
  id: number;
  pid: number;
  path: string;
  name: string;
  level: number;
  component: string;
  meta: {
    icon?: string;
    title: string;
    [index: string]: any;
  };
};

export type MenuRouteRow = MenuRow & {
  component: any;
  id: number;
  level: number;
  redirect?: any;
  meta?: { [index: string]: any };
  children?: MenuRouteRow[];
};