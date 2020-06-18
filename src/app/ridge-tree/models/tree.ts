export interface ITree {
  text: string;
  value: number;
  children: IChild[];
}
interface IChild {
  text: string;
  value: number;
  checked?: boolean;
  children?: IChild[];
}
