import Head from "next/head";
import { Contacto } from "../src/Contacto/Contacto";
import { Header } from "../src/Header/Header";
import { Logros } from "../src/Logros/Logros";
import { Ofrecemos } from "../src/Ofrecemos/Ofrecemos";
import { Panel } from "../src/Panel/Panel";
import { Tutoriales } from "../src/Tutoriales/Tutoriales";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GamerLink</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Plataforma gaming para profesionales"
        />{" "}
      </Head>
      <Header />
      <Panel />
      <div className="gradient-container">
        <Ofrecemos />
        <Tutoriales />
        <Logros />
        <Contacto />
      </div>
    </div>
  );
}
