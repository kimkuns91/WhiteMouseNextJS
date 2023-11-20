import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="page">
      <h2 style={{fontSize: "64px",fontWeight: "800", margin: "10px 0"}}>404 ERROR</h2>
      <p style={{fontSize: "24px", fontWeight: "600", margin: "10px 0"}}>It seems you have lost your way in space</p>
      <Image
        src="/images/notFoundImg.png"
        alt="notFoundImg"
        width={500}
        height={500}
      />
      <Link href='/' style={{fontSize: "24px", fontWeight: "600", margin: "20px 0"}}>To return home</Link>
    </section>
  );
}
