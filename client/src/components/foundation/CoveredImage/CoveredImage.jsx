import React from 'react';

/**
 * @typedef {object} Props
 * @property {string} alt
 * @property {string} src
 */

/**
 * アスペクト比を維持したまま、要素のコンテンツボックス全体を埋めるように画像を拡大縮小します
 * @type {React.VFC<Props>}
 */
const CoveredImage = ({ alt, src }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        alt={alt}
        className="absolute left-1/2 top-1/2 max-w-none transform -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover"
        src={src}
      />
    </div>
  );
};

export { CoveredImage };
