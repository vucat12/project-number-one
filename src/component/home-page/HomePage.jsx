import React from "react";
import { Galleria } from 'primereact/galleria';
import '../../common-style/galleriaDemo.scss';

function HomePage() {
  return (
    <div className="galleria-demo">
    <div className="card">
        <h5>Indicators with Click Event</h5>
        {/* <Galleria numVisible={5} style={{ maxWidth: '640px' }}
            showThumbnails={false} showIndicators item={<img src="../file-source/background.jpg" style={{width: '100%', height: '500px'}}></img>}/> */}
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" style={{width: '100%', height: '500px'}}/>
    </div>
    <div className="background" style={{width: '100%', height: '500px'}}>
        aaaaaa
    </div>
</div>
  );
}

export default HomePage;
