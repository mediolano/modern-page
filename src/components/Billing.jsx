import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[70%] h-[70%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[80%] h-[80%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        possimus hic saepe? Quod doloremque doloribus nemo tenetur temporibus
        dolorem fugiat reprehenderit possimus alias laborum ipsa excepturi
        dolore, debitis impedit! At ad atque rem, pariatur provident debitis ab?
        Reprehenderit, unde sit?
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="Apple Store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="Google Play"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
