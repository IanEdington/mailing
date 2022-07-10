import { useState } from "react";
import HotIFrame from "./HotIFrame";

type InterceptProps = {
  data?: Intercept;
};

const Intercept: React.FC<InterceptProps> = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  if (!data) {
    return <></>; // loading, should be quick bc everything is local
  }

  return (
    <>
      <div>subject: "{data.subject}"</div>
      <div>from: {data.from}</div>
      <div> to: {data.to}</div>
      <div> cc: {data.cc}</div>
      <div> bcc: {data.bcc}</div>
      {data.html && (
        <HotIFrame
          isMobile={isMobile}
          setIsMobile={setIsMobile}
          srcDoc={data.html}
        />
      )}
    </>
  );
};

export default Intercept;