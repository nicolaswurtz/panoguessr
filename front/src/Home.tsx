import { useEffect } from "react";
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/virtual-tour-plugin/index.css';

export default function Home() {
  const GeoVisioInit = async () => {
    const GeoVisio = await import('geovisio');
    const GeoVisioInstance = new GeoVisio.Viewer(
      "viewer",  // Div ID
      "https://api.panoramax.xyz/api",  // STAC API endpoint
      { map: true }  // Viewer options
    );
  };
  
  useEffect(() => {
    GeoVisioInit();
  }, []);
  
  return (
    <>
      <div id="viewer" style={{width: '500px', height: '500px'}}></div>
    </>
  );
}