import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="129" cy="129" r="129" />
    <rect x="0" y="281" rx="0" ry="0" width="280" height="27" />
    <rect x="0" y="333" rx="0" ry="0" width="280" height="88" />
    <rect x="0" y="450" rx="0" ry="0" width="90" height="27" />
    <rect x="119" y="440" rx="31" ry="31" width="155" height="45" />
  </ContentLoader>
);

export default Skeleton;
