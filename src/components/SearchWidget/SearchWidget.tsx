import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import S from "./SearchWidget.module.css";
import { useEffect, useState } from "react";

type SearchWidgetProps = {
  updateInputData: (arg0: { adults: number; children: number; arrival: Date; duration: number }) => void;
};

export const SearchWidget = ({ updateInputData }: SearchWidgetProps) => {
  const [arrival, setArrival] = useState(new Date());
  const [duration, setDuration] = useState(0);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSubmit = (event?: React.FormEvent) => {
    event && event.preventDefault();
    updateInputData({ adults, children, arrival, duration });
  };

  useEffect(() => {
    updateInputData({ adults, children, arrival, duration });
  }, [adults, children, arrival, duration]);

  return (
    <form className={S.widget} onSubmit={handleSubmit}>
      <div className={S.flex}>
        <Input className={S.flexItem} inputType="date" hint={"dd.mm.yyyy"} onChange={(e) => setArrival(new Date(e.target.value))}>
          Arrival
        </Input>
        <Input className={S.flexItem} inputType="number" onChange={(e) => setDuration(Number(e.target.value))}>
          Duration
        </Input>
        <Input className={S.flexItem} inputType="number" onChange={(e) => setAdults(Number(e.target.value))}>
          Adults
        </Input>
        <Input className={S.flexItem} inputType="number" onChange={(e) => setChildren(Number(e.target.value))}>
          Children
        </Input>
      </div>
      <Button onClick={handleSubmit}>Show availability</Button>
    </form>
  );
};
