import Container from "./components/container";
import Container2 from "./components/container2";
import Container3 from "./components/container3";
import Footer from "./components/footer";
import styles from "./page.module.css";

export default function HairCare() {
  return (
    <div className={styles.page}>
      <Container />
      <Container2 />
      <Container3/>

      <Footer />
    </div>
  );
}