import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef();
  
  useEffect(() => {
    const GeoVisioInit = async () => {
        const GeoVisio = await import("geovisio");
        new GeoVisio.Viewer(
          "viewer",  // Div ID
          "https://api.panoramax.xyz/api",  // STAC API endpoint
          { map: true }  // Viewer options
        );
    };
    GeoVisioInit();
}, []);
  
  return ref && (
    <>
      <div id="viewer" style={{width: '500px', height: '500px'}}></div>
      Coucou
    </>
  );
}