import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Bussiness = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the bussiness,
        <br className="sm:block hidden" /> we'll handle this.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earining rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>
  </section>
);

export default Bussiness;
