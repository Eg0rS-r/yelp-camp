import React from "react";
import ContentLoader from "react-content-loader";

interface CampSkeletonProps {
	key: number;
}

const CampSkeleton: React.FC<CampSkeletonProps> = (props) => (
  <ContentLoader
    speed={2}
    width={326}
    height={364}
    viewBox="0 0 326 364"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
		{...props}
  >
    <rect x="1" y="0" rx="5" ry="5" width="326" height="180" />
    <rect x="1" y="196" rx="5" ry="5" width="163" height="20" />
    <rect x="1" y="224" rx="5" ry="5" width="326" height="54" />
    <rect x="18" y="301" rx="10" ry="10" width="290" height="48" />
  </ContentLoader>
);

export default CampSkeleton;
