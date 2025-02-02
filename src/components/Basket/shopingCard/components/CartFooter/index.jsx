import formatPrice from "../../../../Utilities/priceFormatter";
import Button from "react-bootstrap/Button";

const CartFooter = ({ total }) => {
  const { count, price } = total;

  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} ед.</div>
      <div className="cart-footer__price">{formatPrice(price)} руб.</div>
      <Button type="button" className="NavBar-Btn" variant={"light"}>
        Оформить заказ
      </Button>
    </footer>
  );
};

export default CartFooter;
