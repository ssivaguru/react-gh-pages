import React, {Component} from 'react';
import '../../assets/css/App.scss';
import logo from '../../assets/img/naviagtionBar_img.jpg'
import emailimg from '../../assets/img/icons8-send-email-80.png'
import phoneimg from '../../assets/img/icons8-phone-100.png'


const sidebarWrapper = ["Introduction","About","Work","SkillSet"]



class NaviagtionBar extends Component {

    renderImageLine(text, imagePath) {
      return (
        <div className="imageLine">
            <img src={emailimg} className="image"/> 
            <p className="text">{text}</p>
         </div>
      )
    }

    navigationOnclick(e) {
      console.log(e.target.id)
     var element =  document.getElementById(e.target.id)
      element.className="active"
    }
    render() {
      return (
        <div id="naviagtionBar" className="naviagtionBar" >
          <div className="logo">
            <div className="logo-img">
              <img src={logo} alt="logo_img"/>
            </div>
            <div className="logo-text">
              Siva Guru
            </div>
          </div>
          {this.renderImageLine("sivabaddy35@gmail.com",'../../assets/img/icons8-send-email-80.png')}
          {this.renderImageLine("8939756845",{phoneimg})}

          <div className="sidebarWrapper">
              <ul className="nav">
                {sidebarWrapper.map((nav) => <li id={nav} onClick={(e) => this.navigationOnclick(e)}>{nav}</li>)}
              </ul>
            </div>
        </div>
      );
    }
}

export default NaviagtionBar;
