import Script from 'next/script';
import { Map, MapMarker  } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=b26e186abb61e7b9ce1010719b5d31e7&libraries=services,clusterer&autoload=false`;

const KakaoMap = () => {
  // 37.52330156722382
  // 126.88513311460922
  let position = { lat: 37.52330156722382, lng: 126.88513311460922 };

  /* 플로렌스 오목교점 위도(latitude), 경도(longitude) */
  // position = { lat: 37.5232884, lng: 126.885202 };

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={position}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={position}>
          {/* <div className="" style={{ color: "#000" }}>플로렌스 오목교점</div> */}
        </MapMarker>
      </Map>
    </>
  );
};

export default KakaoMap;