import st from "./Prices.module.css";

const Prices = () => {
  return (
    <section className={st.prices}>
      <h3 className={st.title}>Prices</h3>
      <div className={st.wrapper}>
        <div className={st.priceBox}>
          <p className={st.mainPrice}>200 RSD for 24 hrs</p>
        </div>
        <div className={st.subscriptions}>
          <div className={st.subscription}>
            <p className={st.term}>Rent for a day</p>
          </div>
          <div className={st.subscription}>
            <p className={st.discount}>- 15 %</p>
            <p className={st.term}>Weekly subscription</p>
            <div className={st.divider}></div>
            <p className={st.price}>
              <span>1428</span> rsd
              <br />
              per week
            </p>
          </div>
          <div className={st.subscription}>
            <p className={st.discount}>- 30 %</p>
            <p className={st.term}>Monthly subscription</p>
            <div className={st.divider}></div>
            <p className={st.price}>
              <span>5040</span> rsd
              <br />
              per month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
