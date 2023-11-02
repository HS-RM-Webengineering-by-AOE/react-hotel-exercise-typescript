import S from "./Room.module.css";

type RoomProps = {
  name: string;
  adults: number;
  children: number;
  price: number;
  amount: number;
  imgUrl?: string;
};

export const Room = ({ name, adults, children, price, amount, imgUrl = "https://picsum.photos/500/300" }: RoomProps) => {
  return (
    <div className={S.room}>
      <div style={{ backgroundImage: `url(${imgUrl})` }} className={S.img} />
      <div className={S.roomDetails}>
        <h4 className={S.roomHeadline}>{name}</h4>
        <div>Adults: {adults}</div>
        <div>Children: {children}</div>
        <div>Price: {price}€/night</div>
        <div>Available: {amount}</div>
      </div>
    </div>
  );
};
