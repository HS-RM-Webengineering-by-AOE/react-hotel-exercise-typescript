interface Room {
  name: string;
  beds: { forChildren: boolean; doubleBed: boolean }[];
  price: number;
  amount: number;
}
