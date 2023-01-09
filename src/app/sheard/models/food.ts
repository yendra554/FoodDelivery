export class Foods{
  id! : number;
  price!: number;
  name!: string;
  favorites: boolean = false;
  star: number = 0;
  tags?: string[];
  imageUrl!:string;
  cookTime!: string;
  origins!:string[];
}
