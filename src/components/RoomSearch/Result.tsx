import { Room } from "./Room";

type ResultProps = {
  loading: boolean;
  data?: { name: string; adults: number; children: number; price: number; amount: number; imgUrl?: string }[];
  error?: string;
};

export const Result = ({ loading, data, error }: ResultProps) => {
  if (loading) {
    return <h1>Loading...</h1>;
  } else if (!loading && error) {
    return (
      <div>
        <h1>Error!</h1>
        <p>{`${error}`}</p>
      </div>
    );
  } else if (!data || data.length < 1) {
    return (
      <>
        <h3>Unfortunately, we couldn't find any rooms</h3>
        <p>Try another time, another filter, or contact us via our contact options.</p>
      </>
    );
  }

  return (
    <>
      <h2>These rooms are available</h2>
      {data.map(({ name, adults, children, price, amount, imgUrl }) => (
        <Room key={name} name={name} adults={adults} children={children} price={price} amount={amount} imgUrl={imgUrl} />
      ))}
    </>
  );
};
