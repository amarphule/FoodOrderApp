import classes from "./Checkout.module.css";
const Checkout = (props) => {
  return (
    <form>
      <div className={classes.controls}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.controls}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.controls}>
        <label htmlFor="postal-code">Postal code</label>
        <input type="text" id="postal-code" />
      </div>
      <div className={classes.controls}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
