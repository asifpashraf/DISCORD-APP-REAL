


import React, { useState } from 'react';
import ServerBooxModal from './ServerBooxModal';

import serverbosterimg from '/src/assets/settings-images/serverbosterimg.png';
import serverbooster1 from '/src/assets/settings-images/serverbooster1.png';
import serverbosterimg4 from '/src/assets/settings-images/serverbosterimg4.png';
import serverboster5 from '/src/assets/settings-images/serverboster5.png';
import Esc from './Esc'

function ServerBooster() {
  const [Ismodalopen, Setismodalopen] = useState(false);

  const togglemodal = () => {
    Setismodalopen(!Ismodalopen);
  };

  const table = [
    { id: 1, para1: "Perks", heading2: "Level 1", para2: "2 Boosts", heading3: "Level 2", para3: "7 Boosts", heading4: "Level 3", para4: "14 Boosts" },
  ];

  const table1 = [
    { id: 1, para1: "Emoji Slots", heading2: "100", heading3: "150", heading4: "250" },
    { id: 2, para1: "Sticker Slots", heading2: "15", heading3: "30", heading4: "60" },
    { id: 3, para1: "Soundboard Slots", heading2: "24", heading3: "30", heading4: "60" },
    { id: 4, para1: "Soundboard Slots", heading2: "24", heading3: "36", heading4: "48" },
    { id: 5, para1: "Stream Quality", heading2: "720p & 60fps", heading3: "1080p & 60fps", heading4: "1080p & 60fps" },
    { id: 6, para1: "Upload Size Limit", heading2: "10MB", heading3: "50MB", heading4: "100MB" },
    { id: 7, para1: "Video Stage Seats", heading2: "50", heading3: "150", heading4: "300" },
    { id: 8, para1: "Animated Server Icon", heading2: "✓", heading3: "✓", heading4: "✓" },
    { id: 9, para1: "Server Invite Background", heading2: "✓", heading3: "✓", heading4: "✓" },
    { id: 10, para1: "Server Banner", heading2: "X", heading3: "Static", heading4: "Animated" },
    { id: 11, para1: "Emoji Slots", heading2: "X", heading3: "✓", heading4: "✓" },
    { id: 12, para1: "Emoji Slots", heading2: "X", heading3: "X", heading4: "✓" },
  ];

  return (
    <div className="serverbooster_first">
      <div className="serverbooster_second">
        {/* <button>×</button>
        <h6>ESC</h6> */}
      </div>
      <div className="serverbooster_third">
        <img src={serverbosterimg} alt="" />
      </div>
      <div className="serverbooster_fourth">
        <h3>Boost your favorite servers</h3>
        <p>Server Boosts start at $4.99 / Month.</p>
      </div>
      <div className="serverbooster_fifth">
        <div className="serverbooster_5_5">
          <img src={serverbooster1} alt="" /> 
        </div>
        <div className="serverbooster_5_6">
          <button onClick={togglemodal}>Boost this server</button>
        </div>
      </div>
      <ServerBooxModal Ismodalopen={Ismodalopen} togglemodal={togglemodal} />
      {table.map(item => (
        <div className="server_box_table" key={item.id}>
          <div className="server_box_table1">
            <p>{item.para1}</p>
          </div>
          <div className="server_box_table2">
            <h3>{item.heading2}</h3>
            <p>{item.para2}</p>
          </div>
          <div className="server_box_table2">
            <h3>{item.heading3}</h3>
            <p>{item.para3}</p>
          </div>
          <div className="server_box_table2">
            <h3>{item.heading4}</h3>
            <p>{item.para4}</p>
          </div>
        </div>
      ))}
      {table1.map(item1 => (
        <div className="servar_box_first" key={item1.id}>
          <div className="server_box_table_2">
            <p>{item1.para1}</p>
          </div>
          <div className="server_box_table_3">
            <h3>{item1.heading2}</h3>
          </div>
          <div className="server_box_table_3">
            <h3>{item1.heading3}</h3>
          </div>
          <div className="server_box_table_3">
            <h3>{item1.heading4}</h3>
          </div>
        </div>
      ))}
      <div className="server_box_1">
        <img src={serverbosterimg4} alt="" />
      </div>
      <div className="server_box_2">
      <img src={serverboster5} alt="" />
      </div>

      <Esc/>
    </div>
  );
}

export default ServerBooster;
