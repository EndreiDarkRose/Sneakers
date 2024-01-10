import ContentLoader from "react-content-loader";

export const contentLoader = () => {
  return [...Array(8)].map((_, index) => (
    <ContentLoader
      speed={2}
      width={210}
      height={260}
      viewBox="0 0 210 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="30" y="35" rx="10" ry="10" width="150" height="90" />
      <rect x="30" y="139" rx="5" ry="5" width="150" height="15" />
      <rect x="30" y="163" rx="5" ry="5" width="70" height="15" />
      <rect x="30" y="221" rx="5" ry="5" width="105" height="22" />
      <rect x="146" y="212" rx="5" ry="5" width="32" height="32" />
    </ContentLoader>
  ));
};

export default contentLoader;
