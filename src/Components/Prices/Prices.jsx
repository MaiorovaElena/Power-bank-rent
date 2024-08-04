import st from "./Prices.module.css";

const Prices = ({ pricesRef, i18n }) => {
  return (
    <section className={st.prices} ref={pricesRef}>
      <h3 className={st.title}>{i18n.t("prices")}</h3>
      <div className={st.wrapper}>
        <div className={st.priceBox}>
          <p className={st.mainPrice}>{i18n.t("rsd-for")}</p>
        </div>
        <div className={st.subscriptions}>
          <div className={st.subscription}>
            <p className={st.term}>{i18n.t("rent-for")}</p>
          </div>
          <div className={st.subscription}>
            <p className={st.discount}>- 15 %</p>
            <p className={st.term}>{i18n.t("weekly")}</p>
            <div className={st.divider}></div>
            <p className={st.price}>
              <span>1428</span> {i18n.t("rsd")}
              <br />
              {i18n.t("per-week")}
            </p>
          </div>
          <div className={st.subscription}>
            <p className={st.discount}>- 30 %</p>
            <p className={st.term}>{i18n.t("monthly")}</p>
            <div className={st.divider}></div>
            <p className={st.price}>
              <span>5040</span> {i18n.t("rsd")}
              <br />
              {i18n.t("per-month")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
