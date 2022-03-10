import React, {useState} from "react";
import "./leftPane.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const LeftPane = () => {

  const [filter, setFliter] = useState(0);
  const [submenu, setSubmenu] = useState(0);

  // #FF6175 svg selected colour

  return (
    <div className="left_pane">
      <div className="logo_container">
        <img src={logo}></img>
        <div>
          <p>Mary High School</p>
          <p>School Dashboard</p>
        </div>
      </div>
      <div className="user_box">
        <div className="user_picture"></div>
        <div className="user_info">
          <h3>Krishna Saxena</h3>
          <p>Super Admin</p>
        </div>
      </div>
      <h4 className="left_pane_heading">Main Menu</h4>
      <ul>
        <Link to="/">
          <li
            onClick = {() => setFliter(0) }
            className={filter===0?"left_pane__selected_style":"left_pane__normal_style"}
            // style={{selectedStyle}}
            // style={filter===0?{selectedStyle}:{normalStyle}}
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33331 2.3335H5.83331C3.90032 2.3335 2.33331 3.9005 2.33331 5.8335V9.3335C2.33331 11.2665 3.90032 12.8335 5.83331 12.8335H9.33331C11.2663 12.8335 12.8333 11.2665 12.8333 9.3335V5.8335C12.8333 3.9005 11.2663 2.3335 9.33331 2.3335Z"
                  fill={filter===0?"#FF6175":"#717579"}
                />
                <path
                  d="M22.1666 2.3335H18.6666C16.7336 2.3335 15.1666 3.9005 15.1666 5.8335V9.3335C15.1666 11.2665 16.7336 12.8335 18.6666 12.8335H22.1666C24.0996 12.8335 25.6666 11.2665 25.6666 9.3335V5.8335C25.6666 3.9005 24.0996 2.3335 22.1666 2.3335Z"
                  fill={filter===0?"#FF6175":"#717579"}
                />
                <path
                  d="M9.33331 15.1667H5.83331C3.90032 15.1667 2.33331 16.7338 2.33331 18.6667V22.1667C2.33331 24.0997 3.90032 25.6667 5.83331 25.6667H9.33331C11.2663 25.6667 12.8333 24.0997 12.8333 22.1667V18.6667C12.8333 16.7338 11.2663 15.1667 9.33331 15.1667Z"
                  fill={filter===0?"#FF6175":"#717579"}
                />
                <path
                  d="M22.1666 15.1667H18.6666C16.7336 15.1667 15.1666 16.7338 15.1666 18.6667V22.1667C15.1666 24.0997 16.7336 25.6667 18.6666 25.6667H22.1666C24.0996 25.6667 25.6666 24.0997 25.6666 22.1667V18.6667C25.6666 16.7338 24.0996 15.1667 22.1666 15.1667Z"
                  fill={filter===0?"#FF6175":"#717579"}
                />
              </svg>
            </span>
            Dashboard
          </li>
        </Link>
        <Link to="/about-us">
          <li
            onClick = {() => setFliter(1) }
            className={filter===1?"left_pane__selected_style":"left_pane__normal_style"}

            // style={{normalStyle}}
          >
            <span>
              <svg
                className="svg_class"
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10.9373C21.0001 9.94699 20.8548 8.96203 20.5686 8.01394C20.1624 6.66532 19.4775 5.41701 18.5584 4.34976C17.6393 3.28252 16.5063 2.42012 15.2329 1.81837C13.9594 1.21661 12.5738 0.888897 11.1657 0.856433C9.7576 0.82397 8.35837 1.08748 7.05853 1.62991C5.75869 2.17234 4.5872 2.98161 3.61986 4.00536C2.65252 5.02911 1.91088 6.24453 1.44291 7.573C0.974947 8.90146 0.791084 10.3134 0.903219 11.7174C1.01535 13.1214 1.42099 14.4862 2.09388 15.7236L0.908258 19.8851C0.871159 20.0153 0.864785 20.1523 0.889639 20.2854C0.914492 20.4185 0.969894 20.544 1.05149 20.6521C1.13308 20.7601 1.23863 20.8478 1.35984 20.9081C1.48105 20.9685 1.61461 20.9998 1.75001 20.9998C1.83106 20.9996 1.91172 20.9885 1.98976 20.9666L6.15213 19.7801C6.7427 20.1037 7.36561 20.3644 8.01063 20.5579C8.95856 20.8513 9.94524 21.0002 10.9375 20.9998C13.6053 20.9968 16.163 19.9357 18.0494 18.0493C19.9359 16.1628 20.997 13.6051 21 10.9373Z"
                  fill={filter===1?"#FF6175":"#717579"}
                />
                <path
                  d="M27.0918 26.0104L25.9062 21.8489C27.1171 19.6202 27.4401 17.0159 26.8104 14.5588C26.1807 12.1017 24.6448 9.97384 22.5112 8.60229C22.8617 10.3171 22.826 12.0885 22.4065 13.7878C21.9871 15.4871 21.1944 17.0716 20.0862 18.4264C18.9779 19.7811 17.5819 20.8721 15.9994 21.62C14.417 22.3678 12.6878 22.7539 10.9375 22.7502C10.1576 22.7478 9.37995 22.6672 8.61615 22.5095C9.53101 23.9188 10.7819 25.0785 12.2563 25.8842C13.7307 26.6899 15.3824 27.1164 17.0625 27.1252C18.7348 27.1254 20.3803 26.7063 21.8488 25.9063L26.0103 27.0919C26.0883 27.1138 26.169 27.125 26.25 27.1252C26.3854 27.1252 26.519 27.0938 26.6402 27.0335C26.7614 26.9731 26.867 26.8855 26.9485 26.7774C27.0301 26.6694 27.0855 26.5439 27.1104 26.4108C27.1352 26.2777 27.1289 26.1406 27.0918 26.0104V26.0104Z"
                  fill={filter===1?"#FF6175":"#717579"}
                />
              </svg>
            </span>
            About us
          </li>
        </Link>
        <Link to="/advertisment">       
        <li
        onClick = {() => setFliter(2) }
        className={filter===2?"left_pane__selected_style":"left_pane__normal_style"}
          // style={{normalStyle}}
        >
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1666 3.83349H19V1.50016C19 1.19074 18.8771 0.893997 18.6583 0.675205C18.4395 0.456412 18.1427 0.333496 17.8333 0.333496C17.5239 0.333496 17.2271 0.456412 17.0084 0.675205C16.7896 0.893997 16.6666 1.19074 16.6666 1.50016V3.83349H7.33331V1.50016C7.33331 1.19074 7.2104 0.893997 6.9916 0.675205C6.77281 0.456412 6.47607 0.333496 6.16665 0.333496C5.85723 0.333496 5.56048 0.456412 5.34169 0.675205C5.1229 0.893997 4.99998 1.19074 4.99998 1.50016V3.83349H3.83331C2.90506 3.83349 2.01482 4.20224 1.35844 4.85862C0.702062 5.515 0.333313 6.40524 0.333313 7.33349V8.50016H23.6666V7.33349C23.6666 6.40524 23.2979 5.515 22.6415 4.85862C21.9851 4.20224 21.0949 3.83349 20.1666 3.83349Z"
                fill={filter===2?"#FF6175":"#717579"}
              />
              <path
                d="M0.333313 20.1668C0.333313 21.0951 0.702062 21.9853 1.35844 22.6417C2.01482 23.2981 2.90506 23.6668 3.83331 23.6668H20.1666C21.0949 23.6668 21.9851 23.2981 22.6415 22.6417C23.2979 21.9853 23.6666 21.0951 23.6666 20.1668V10.8335H0.333313V20.1668Z"
                fill={filter===2?"#FF6175":"#717579"}
              />
            </svg>
          </span>
          Advertisement
        </li>
        </Link>
        <Link to="/circular">
        <li
        onClick = {() => setFliter(3) }
        className={filter===3?"left_pane__selected_style":"left_pane__normal_style"}
          // style={{normalStyle}}
        >
          <span>
            <svg
              width="20"
              height="18"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5466 7.34432L14.3669 0.781814C14.1362 0.666479 13.8638 0.666479 13.6331 0.781814L0.453414 7.34432C0.175438 7.48371 0 7.76727 0 8.07811C0 8.38896 0.175438 8.67251 0.453414 8.81191L13.6331 15.3744C13.7484 15.4321 13.8742 15.4609 14 15.4609C14.1258 15.4609 14.2516 15.4321 14.3669 15.3744L27.5466 8.81191C27.8246 8.67251 28 8.38896 28 8.07811C28 7.76727 27.8246 7.48371 27.5466 7.34432Z"
                fill={filter===3?"#FF6175":"#717579"}
              />
              <path
                d="M26.3594 20.5339V11.24L24.7188 12.0603V20.5339C23.766 20.8737 23.0781 21.7757 23.0781 22.8437V24.4844C23.0781 24.9378 23.445 25.3047 23.8984 25.3047H27.1797C27.6331 25.3047 28 24.9378 28 24.4844V22.8437C28 21.7757 27.3121 20.8737 26.3594 20.5339Z"
                fill={filter===3?"#FF6175":"#717579"}
              />
              <path
                d="M15.1007 16.842C14.761 17.0118 14.3805 17.1016 14 17.1016C13.6195 17.1016 13.239 17.0118 12.8993 16.842L4.92188 12.8806V14.6406C4.92188 17.8602 8.94031 20.3828 14 20.3828C19.0597 20.3828 23.0781 17.8602 23.0781 14.6406V12.8806L15.1007 16.842Z"
                fill={filter===3?"#FF6175":"#717579"}
              />
            </svg>
          </span>
          Circular
        </li>
        </Link>
        <Link to="/application">
          <li
          onClick = {() => setFliter(4) }
          className={filter===4?"left_pane__selected_style":"left_pane__normal_style"}
            // style={{normalStyle}}
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1666 3.83349H19V1.50016C19 1.19074 18.8771 0.893997 18.6583 0.675205C18.4395 0.456412 18.1427 0.333496 17.8333 0.333496C17.5239 0.333496 17.2271 0.456412 17.0084 0.675205C16.7896 0.893997 16.6666 1.19074 16.6666 1.50016V3.83349H7.33331V1.50016C7.33331 1.19074 7.2104 0.893997 6.9916 0.675205C6.77281 0.456412 6.47607 0.333496 6.16665 0.333496C5.85723 0.333496 5.56048 0.456412 5.34169 0.675205C5.1229 0.893997 4.99998 1.19074 4.99998 1.50016V3.83349H3.83331C2.90506 3.83349 2.01482 4.20224 1.35844 4.85862C0.702062 5.515 0.333313 6.40524 0.333313 7.33349V8.50016H23.6666V7.33349C23.6666 6.40524 23.2979 5.515 22.6415 4.85862C21.9851 4.20224 21.0949 3.83349 20.1666 3.83349Z"
                  fill={filter===4?"#FF6175":"#717579"}
                />
                <path
                  d="M0.333313 20.1668C0.333313 21.0951 0.702062 21.9853 1.35844 22.6417C2.01482 23.2981 2.90506 23.6668 3.83331 23.6668H20.1666C21.0949 23.6668 21.9851 23.2981 22.6415 22.6417C23.2979 21.9853 23.6666 21.0951 23.6666 20.1668V10.8335H0.333313V20.1668Z"
                  fill={filter===4?"#FF6175":"#717579"}
                />
              </svg>
            </span>
            Application
          </li>
        </Link>
        <Link to="/students">
          <li
          onClick = {() => setFliter(5) }
          className={filter===5?"left_pane__selected_style":"left_pane__normal_style"}
            // style={{normalStyle}}
          >
            <span>
              <svg
                width="20"
                height="18"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5466 7.34432L14.3669 0.781814C14.1362 0.666479 13.8638 0.666479 13.6331 0.781814L0.453414 7.34432C0.175438 7.48371 0 7.76727 0 8.07811C0 8.38896 0.175438 8.67251 0.453414 8.81191L13.6331 15.3744C13.7484 15.4321 13.8742 15.4609 14 15.4609C14.1258 15.4609 14.2516 15.4321 14.3669 15.3744L27.5466 8.81191C27.8246 8.67251 28 8.38896 28 8.07811C28 7.76727 27.8246 7.48371 27.5466 7.34432Z"
                  fill={filter===5?"#FF6175":"#717579"}
                />
                <path
                  d="M26.3594 20.5339V11.24L24.7188 12.0603V20.5339C23.766 20.8737 23.0781 21.7757 23.0781 22.8437V24.4844C23.0781 24.9378 23.445 25.3047 23.8984 25.3047H27.1797C27.6331 25.3047 28 24.9378 28 24.4844V22.8437C28 21.7757 27.3121 20.8737 26.3594 20.5339Z"
                  fill={filter===5?"#FF6175":"#717579"}
                />
                <path
                  d="M15.1007 16.842C14.761 17.0118 14.3805 17.1016 14 17.1016C13.6195 17.1016 13.239 17.0118 12.8993 16.842L4.92188 12.8806V14.6406C4.92188 17.8602 8.94031 20.3828 14 20.3828C19.0597 20.3828 23.0781 17.8602 23.0781 14.6406V12.8806L15.1007 16.842Z"
                  fill={filter===5?"#FF6175":"#717579"}
                />
              </svg>
            </span>
            Student Management
          </li>
        </Link>
        <Link to="/teacher">
        <li
        onClick = {() => setFliter(6) }
        className={filter===6?"left_pane__selected_style":"left_pane__normal_style"}
          // style={{normalStyle}}
        >
          <span>
            <svg
              width="18"
              height="20"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.625 0.875H10.375C9.89175 0.875 9.5 1.26675 9.5 1.75V26.25C9.5 26.7332 9.89175 27.125 10.375 27.125H15.625C16.1082 27.125 16.5 26.7332 16.5 26.25V1.75C16.5 1.26675 16.1082 0.875 15.625 0.875Z"
                fill={filter===6?"#FF6175":"#717579"}
              />
              <path
                d="M24.375 9.625H19.125C18.6418 9.625 18.25 10.0168 18.25 10.5V26.25C18.25 26.7332 18.6418 27.125 19.125 27.125H24.375C24.8582 27.125 25.25 26.7332 25.25 26.25V10.5C25.25 10.0168 24.8582 9.625 24.375 9.625Z"
                fill={filter===6?"#FF6175":"#717579"}
              />
              <path
                d="M6.875 16.625H1.625C1.14175 16.625 0.75 17.0168 0.75 17.5V26.25C0.75 26.7332 1.14175 27.125 1.625 27.125H6.875C7.35825 27.125 7.75 26.7332 7.75 26.25V17.5C7.75 17.0168 7.35825 16.625 6.875 16.625Z"
                fill={filter===6?"#FF6175":"#717579"}
              />
            </svg>
          </span>
          Teacher
        </li>
        </Link>
        <li
        onClick = {() => {
          setFliter(9);
          setSubmenu(!submenu);
        } }
        className={filter===9?"left_pane__selected_style":"left_pane__normal_style"}
        >
          <span>
            <svg
              width="18"
              height="20"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.625 0.875H10.375C9.89175 0.875 9.5 1.26675 9.5 1.75V26.25C9.5 26.7332 9.89175 27.125 10.375 27.125H15.625C16.1082 27.125 16.5 26.7332 16.5 26.25V1.75C16.5 1.26675 16.1082 0.875 15.625 0.875Z"
                fill={filter===9?"#FF6175":"#717579"}
              />
              <path
                d="M24.375 9.625H19.125C18.6418 9.625 18.25 10.0168 18.25 10.5V26.25C18.25 26.7332 18.6418 27.125 19.125 27.125H24.375C24.8582 27.125 25.25 26.7332 25.25 26.25V10.5C25.25 10.0168 24.8582 9.625 24.375 9.625Z"
                fill={filter===9?"#FF6175":"#717579"}
              />
              <path
                d="M6.875 16.625H1.625C1.14175 16.625 0.75 17.0168 0.75 17.5V26.25C0.75 26.7332 1.14175 27.125 1.625 27.125H6.875C7.35825 27.125 7.75 26.7332 7.75 26.25V17.5C7.75 17.0168 7.35825 16.625 6.875 16.625Z"
                fill={filter===9?"#FF6175":"#717579"}
              />
            </svg>
          </span>
          Fees Management
          <svg width="30" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 -5.24537e-07L6 6L12 0" fill={filter===9?"#FF6175":"#717579"}/>
          </svg>

        </li>
        <Link to="fee_report">
        <li
          onClick = {() => setFliter(12) }
          className={submenu? (filter==12?"left_pane__selected_style submenu_visible":"left_pane__normal_style submenu_visible"):"submenu_invisible"}
          >
          Fee Report
        </li>
        </Link>
        <Link to="/fee_setup">
        <li
          onClick = {() => setFliter(13) }
          className={submenu? (filter==13?"left_pane__selected_style submenu_visible":"left_pane__normal_style submenu_visible"):"submenu_invisible"}
        >
          Fee Setup
        </li>
        </Link>
        <Link to="/new_admission">
        <li
        onClick = {() => setFliter(10) }
        className={filter===10?"left_pane__selected_style":"left_pane__normal_style"}
          // style={{normalStyle}}
        >
          <span>
            <svg
              width="18"
              height="20"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.625 0.875H10.375C9.89175 0.875 9.5 1.26675 9.5 1.75V26.25C9.5 26.7332 9.89175 27.125 10.375 27.125H15.625C16.1082 27.125 16.5 26.7332 16.5 26.25V1.75C16.5 1.26675 16.1082 0.875 15.625 0.875Z"
                fill={filter===10?"#FF6175":"#717579"}
              />
              <path
                d="M24.375 9.625H19.125C18.6418 9.625 18.25 10.0168 18.25 10.5V26.25C18.25 26.7332 18.6418 27.125 19.125 27.125H24.375C24.8582 27.125 25.25 26.7332 25.25 26.25V10.5C25.25 10.0168 24.8582 9.625 24.375 9.625Z"
                fill={filter===10?"#FF6175":"#717579"}
              />
              <path
                d="M6.875 16.625H1.625C1.14175 16.625 0.75 17.0168 0.75 17.5V26.25C0.75 26.7332 1.14175 27.125 1.625 27.125H6.875C7.35825 27.125 7.75 26.7332 7.75 26.25V17.5C7.75 17.0168 7.35825 16.625 6.875 16.625Z"
                fill={filter===10?"#FF6175":"#717579"}
              />
            </svg>
          </span>
          New Admission
        </li>
        </Link>
        <li
        onClick = {() => setFliter(7) }
        className={filter===7?"left_pane__selected_style":"left_pane__normal_style"}
          // style={{normalStyle}}
        >
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0004 13.9998C10.9894 13.9998 11.9563 13.7065 12.7787 13.157C13.601 12.6075 14.242 11.8264 14.6204 10.9126C14.9989 9.99882 15.0979 8.99332 14.9049 8.02327C14.7118 7.05322 14.2355 6.16219 13.536 5.46288C12.8366 4.76356 11.9455 4.28737 10.9754 4.09452C10.0053 3.90166 8.99985 4.00082 8.08612 4.37944C7.17239 4.75806 6.39146 5.39914 5.84209 6.2216C5.29272 7.04407 4.99958 8.01097 4.99976 9.00004C5.00115 10.3258 5.52847 11.5968 6.46599 12.5342C7.40352 13.4715 8.67464 13.9986 10.0004 13.9998V13.9998Z"
                fill={filter===7?"#FF6175":"#717579"}
              />
              <path
                d="M16.5419 18.131C15.2747 16.8313 13.6489 15.9388 11.872 15.5675C10.0952 15.1963 8.24802 15.3631 6.56646 16.0467C4.88489 16.7303 3.44527 17.8997 2.4315 19.4054C1.41773 20.9112 0.87582 22.6849 0.875 24.5001C0.875 24.7322 0.967187 24.9548 1.13128 25.1189C1.29538 25.2829 1.51794 25.3751 1.75 25.3751H18.2525C18.4846 25.3751 18.7071 25.2829 18.8712 25.1189C19.0353 24.9548 19.1275 24.7322 19.1275 24.5001C19.1309 23.5723 18.9877 22.6498 18.7031 21.7666C18.2795 20.4013 17.5389 19.1555 16.5419 18.131V18.131Z"
                fill={filter===7?"#FF6175":"#717579"}
              />
              <path
                d="M20.5625 14.4375C22.6163 14.4375 24.2812 12.7726 24.2812 10.7188C24.2812 8.66494 22.6163 7 20.5625 7C18.5087 7 16.8438 8.66494 16.8438 10.7188C16.8438 12.7726 18.5087 14.4375 20.5625 14.4375Z"
                fill={filter===7?"#FF6175":"#717579"}
              />
              <path
                d="M20.5625 15.4614C19.3896 15.4658 18.2394 15.7853 17.2322 16.3863C17.4221 16.556 17.6137 16.7232 17.7931 16.9069C18.9845 18.1315 19.8696 19.6204 20.3761 21.2522C20.5496 21.7894 20.6775 22.3402 20.7585 22.8989H26.25C26.482 22.8989 26.7046 22.8067 26.8687 22.6426C27.0328 22.4785 27.125 22.256 27.125 22.0239C27.1231 20.284 26.4311 18.6159 25.2008 17.3856C23.9705 16.1553 22.3024 15.4633 20.5625 15.4614Z"
                fill={filter===7?"#FF6175":"#717579"}
              />
            </svg>
          </span>
          Roles
        </li>
        <li
        onClick = {() => setFliter(8) }
        className={filter===8?"left_pane__selected_style":"left_pane__normal_style"}
          // style={{normalStyle}}
        >
          <span>
            <svg
              width="20"
              height="18"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5588 9.35993C25.0482 9.28577 24.5609 9.09738 24.1332 8.80879C23.7056 8.5202 23.3485 8.13885 23.0887 7.69314C22.8288 7.24742 22.6728 6.74883 22.6324 6.23448C22.5919 5.72013 22.668 5.20329 22.855 4.72243C22.9739 4.40807 22.9914 4.06438 22.9051 3.73957C22.8188 3.41475 22.633 3.12508 22.3738 2.91118C21.2293 1.95014 19.9266 1.19517 18.5238 0.679929C18.2043 0.561264 17.8556 0.546438 17.5272 0.637562C17.1989 0.728687 16.9076 0.921114 16.695 1.18743C16.375 1.59663 15.966 1.92758 15.4991 2.15519C15.0321 2.3828 14.5195 2.50109 14 2.50109C13.4806 2.50109 12.9679 2.3828 12.501 2.15519C12.034 1.92758 11.625 1.59663 11.305 1.18743C11.0924 0.921114 10.8012 0.728687 10.4728 0.637562C10.1445 0.546438 9.79571 0.561264 9.47627 0.679929C8.18098 1.15562 6.96991 1.83499 5.88877 2.69243C5.61624 2.90817 5.41995 3.2055 5.32863 3.54087C5.2373 3.87625 5.25575 4.23205 5.38127 4.55618C5.58318 5.04976 5.6666 5.58379 5.62484 6.11543C5.58309 6.64707 5.41731 7.16153 5.14082 7.61753C4.86432 8.07353 4.48481 8.45839 4.03271 8.74122C3.58062 9.02406 3.06853 9.197 2.53752 9.24618C2.19278 9.28304 1.86898 9.42961 1.61379 9.66432C1.35861 9.89903 1.18552 10.2095 1.12002 10.5499C0.957092 11.3564 0.875019 12.1771 0.875019 12.9999C0.873821 13.6888 0.929427 14.3765 1.04127 15.0562C1.09693 15.4076 1.2668 15.7308 1.5246 15.976C1.78241 16.2211 2.11379 16.3745 2.46752 16.4124C3.01019 16.4634 3.53277 16.6435 3.99151 16.9379C4.45026 17.2322 4.83182 17.6322 5.10427 18.1042C5.37672 18.5763 5.53213 19.1068 5.55749 19.6512C5.58284 20.1957 5.47741 20.7383 5.25002 21.2337C5.10121 21.5559 5.06429 21.9186 5.14514 22.2642C5.22599 22.6098 5.41996 22.9184 5.69627 23.1412C6.83387 24.0848 8.12402 24.8275 9.51127 25.3374C9.68867 25.3989 9.8748 25.4314 10.0625 25.4337C10.3199 25.4331 10.5734 25.3709 10.8018 25.2521C11.0302 25.1334 11.2267 24.9616 11.375 24.7512C11.6869 24.2968 12.1049 23.9254 12.5929 23.6692C13.0808 23.4131 13.6239 23.2799 14.175 23.2812C14.709 23.2819 15.2354 23.4072 15.7124 23.6472C16.1894 23.8872 16.6038 24.2353 16.9225 24.6637C17.1345 24.9487 17.4349 25.1556 17.7767 25.2521C18.1186 25.3486 18.4827 25.3294 18.8125 25.1974C20.081 24.6869 21.2619 23.9813 22.3125 23.1062C22.5764 22.888 22.7644 22.5917 22.8493 22.26C22.9342 21.9282 22.9117 21.5781 22.785 21.2599C22.5792 20.7727 22.4895 20.2443 22.5229 19.7165C22.5563 19.1886 22.712 18.6758 22.9776 18.2184C23.2432 17.761 23.6114 17.3717 24.0533 17.081C24.4952 16.7904 24.9986 16.6064 25.5238 16.5437C25.8643 16.4966 26.181 16.3423 26.428 16.1032C26.675 15.8641 26.8394 15.5525 26.8975 15.2137C27.038 14.4839 27.1142 13.7431 27.125 12.9999C27.1252 12.2161 27.0519 11.4339 26.9063 10.6637C26.8472 10.3323 26.6852 10.028 26.4433 9.79395C26.2014 9.55991 25.8919 9.40804 25.5588 9.35993V9.35993ZM18.375 12.9999C18.375 13.8652 18.1184 14.7111 17.6377 15.4306C17.157 16.15 16.4737 16.7108 15.6743 17.0419C14.8748 17.373 13.9952 17.4597 13.1465 17.2909C12.2978 17.1221 11.5183 16.7054 10.9064 16.0935C10.2946 15.4817 9.87789 14.7021 9.70908 13.8535C9.54027 13.0048 9.62691 12.1251 9.95805 11.3257C10.2892 10.5263 10.8499 9.84298 11.5694 9.36225C12.2889 8.88152 13.1347 8.62493 14 8.62493C15.1603 8.62493 16.2731 9.08587 17.0936 9.90634C17.9141 10.7268 18.375 11.8396 18.375 12.9999Z"
                fill={filter===8?"#FF6175":"#717579"}
              />
            </svg>
          </span>
          Settings
        </li>
      </ul>
    </div>
  );
};

export default LeftPane;
