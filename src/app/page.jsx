import Container from "./components/container";
import Container2 from "./components/container2";
import Container3 from "./components/container3";
import Container4 from "./components/container4";
import Container5 from "./components/container5";
import Container6 from "./components/container6";
import Footer from "./components/footer";
import styles from "./page.module.css";

export default function HairCare() {
  return (
    <div className={styles.page}>
      <Container />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Footer />
    </div>
  );
}