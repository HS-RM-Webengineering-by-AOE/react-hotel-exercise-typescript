import { Container } from "../components/Container/Container";
import { Result } from "../components/RoomSearch/Result";

import Styles from "./index.module.css";
import { SearchWidget } from "../components/SearchWidget/SearchWidget";
import { useEffect, useState } from "react";

const API_URL = "https://ws23-24-hotel-api-production.up.railway.app/rooms";

function transformRooms(raw: Room[]) {
  return raw.map(({ name, beds, price, amount }: Room) => {
    let adults = 0;
    let children = 0;
    beds.forEach(({ forChildren, doubleBed }) => {
      const size = doubleBed ? 2 : 1;
      if (forChildren) {
        children = children + size;
      } else {
        adults = adults + size;
      }
    });

    return {
      name,
      adults,
      children,
      price,
      amount,
    };
  });
}

type TransformedRoomData = { name: string; adults: number; children: number; price: number; amount: number }[];

const Page = () => {
  const [formState, setFormState] = useState({ adults: 2, children: 0, arrival: new Date(), duration: 2 });

  const [data, setData] = useState<TransformedRoomData | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(undefined);
    setLoading(true);
    const url = new URL(API_URL);

    url.searchParams.append("adults", `${formState.adults}`);
    url.searchParams.append("children", `${formState.children}`);

    fetch(url.toString())
      .then((r) => r.json())
      .then((response: Room[]) => setData(transformRooms(response)))
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [formState.adults, formState.children]);

  return (
    <Container className={Styles.flex}>
      <div className={Styles.left}>
        <Result data={data} error={error} loading={loading} />
      </div>
      <div className={Styles.right}>
        <SearchWidget updateInputData={setFormState} />
      </div>
    </Container>
  );
};
export default Page;
