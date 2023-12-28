//layout of application
// adding the wave at the bottom of page
import wave from "../Vectors.png";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100px",
          overflow: "hidden",
        }}
      >
        <Image
          src={wave} // Replace with the actual path to your wave image
          alt="Wave Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
