import { stats } from "../constants";
import styles from "../style";

const Statistics = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className="">
        <h4 className="">{stat.value}</h4>
        <p className="">{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Statistics;
