import React from "react";
import "./popular.css";

function Popular() {
  return (
    <div className="popular">
      <h1 className="mtitle">Popular Destinations</h1>
      <div className="poppalce">
        <div className="poppdetail1 poppdetail">
          <img src="../img/bg2.jpg" alt="" className="ppi1 ppi" />
          <div className="tlcon">
            <h2 className="ppt ppt1">Kashi Vishwanath Temple</h2>
            <h3 className="ppl ppl1">Varansi, Uttar Pradesh</h3>
          </div>
        </div>
        <div className="poppdetail2 poppdetail">
          <img src="../img/goldentemple.jpg" alt="" className="ppi2 ppi" />
          <div className="tlcon">
            <h2 className="ppt ppt2">Golden Temple</h2>
            <h3 className="ppl ppl2">Amritsar, Punjab</h3>
          </div>
        </div>
        <div className="poppdetail5 poppdetail">
          <img src="../img/vaishnodevi.jpg" alt="" className="ppi5 ppi" />
          <div className="tlcon">
            <h2 className="ppt ppt5">Vaishno Devi</h2>
            <h3 className="ppl ppl5">Katra, Jammu</h3>
          </div>
        </div>
        <div className="poppdetail3 poppdetail">
          <img src="../img/kedarnath.jpg" alt="" className="ppi3 ppi" />
          <div className="tlcon">
            <h2 className="ppt ppt3">Kedarnath</h2>
            <h3 className="ppl ppl3">kedarnath, Uttarakhand</h3>
          </div>
        </div>
        <div className="poppdetail4 poppdetail">
          <img src="../img/dwarika.jpg" alt="" className="ppi4 ppi" />
          <div className="tlcon">
            <h2 className="ppt ppt4">Dwarika</h2>
            <h3 className="ppl ppl4">Dwarika, Gujarat</h3>
          </div>
        </div>
        <div className="poppdetail7 poppdetail">
          <img src="../img/vrindawan.jpg" alt="" className="ppi7 ppi" />
          <div className="tlcon">
            <h2 className="ppt ppt4">Vrindawan</h2>
            <h3 className="ppl ppl4">Vrindawan, Uttar Pradesh</h3>
          </div>
        </div>
        <div className="poppdetail6 poppdetail">
          <img src="../img/mathura.jpg" alt="" className="ppi6 ppi" />
          <div className="tlcon">
            <h2 className="ppt ppt4">Mathura</h2>
            <h3 className="ppl ppl4">Mathura, Uttar Pradesh</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
