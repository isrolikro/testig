import React, { FC, useState } from 'react';

interface Props {
    url: string,
    size: string,
    date: string
}
const QRCodeInfo:FC<Props> = ({date, size, url}) => {
  
  return (
    <div className="qrInfo">
      <p>URL: {url}</p>
      <p>Size: {size}</p>
      <p>Date and Time: {date}</p>
    </div>
  );
}

export default QRCodeInfo;
