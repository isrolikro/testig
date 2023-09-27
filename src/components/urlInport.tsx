import { useState } from "react";
import QRCodeInfo from '../components/qrinfr'
import './urlInport.css'
function urlInport() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState('')
  const [qrInfo, setQrInfo] = useState({ url: '', size: '', date: '' })

  const handleQr =()=> {
    setQr(`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=100x100`)
    const newQRInfo = {
      url: url,
      size: '100x100',
      date: new Date().toLocaleString(),
    };
    setQrInfo(newQRInfo)
  }
  
  
  return (
    <div className="urlDiv">
      <input
        type="url"
        placeholder="Enter Url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <p>The URL is:{url}</p>
      {qr && <img src={qr} alt='qr'/>}
      <div> 
        <button onClick={handleQr} >Get a QR code</button>
        <QRCodeInfo {...qrInfo}/>
      </div>
    </div>
  );
}

export default urlInport;
