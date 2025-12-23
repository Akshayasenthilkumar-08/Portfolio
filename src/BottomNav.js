import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="dock-wrap">
      <nav className="dock-bar">
        <div className="dock-item">

          <FaHome />
          <a href="#home"><span>Home</span></a>
          
        </div>

        <div className="dock-item">
             <a href="#projects"> <FaProjectDiagram /></a>
          <a href="#projects"><span>Projects</span></a>
          
        </div>

        <div className="dock-item">
         
          <a href="#about">  <FaUser /></a>
          <a href="#about"> <span>About</span></a>
         
        </div>

        <div className="dock-item">
          <a href="#contact">   <FaEnvelope /></a>
          <a href="#contact">  <span>Contact</span></a>
        </div>

        {/* indicator MUST be last */}
        <div className="dock-indicator" />
      </nav>
    </div>
  );
}
