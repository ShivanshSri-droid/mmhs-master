import React from "react";
import "./unpaidCard.css";

const UnpaidCard = () => {
  const data = [
    {
      img: "https://picsum.photos/seed/kdkdie/200",
      name: "Dawud Khan",
      gr_id: "GR 12314125",
      standard: "VII",
      division: "A",
      amount: "₹1,50,21",
    },
    {
      img: "https://picsum.photos/seed/dkeid/200",
      name: "Helena Somes",
      gr_id: "GR 12314125",
      standard: "VII",
      division: "C1",
      amount: "₹50,004",
    },
    {
      img: "https://picsum.photos/seed/yooo/200",
      name: "Peter Jim",
      gr_id: "GR 12314125",
      standard: "VII",
      division: "C1",
      amount: "₹40,004",
    },
    {
      img: "https://picsum.photos/seed/meeaoo/200",
      name: "Melina Truth",
      gr_id: "GR 12314125",
      standard: "VII",
      division: "B5",
      amount: "₹30,004",
    },
    {
      img: "https://picsum.photos/seed/blahblah/200",
      name: "Hawkins Jr.",
      gr_id: "GR 12314125",
      standard: "XI",
      division: "C1",
      amount: "₹20,004",
    },
    {
      img: "https://picsum.photos/seed/yeahh/200",
      name: "Louis Vanhouten",
      gr_id: "GR 12314125",
      standard: "XI",
      division: "C1",
      amount: "₹10,004",
    },
  ];

  return (
    <div className="unpaid_card">
      <h3>Unpaid Student Intuition</h3>
      <h6>You have 456 contacts</h6>
      <div></div>
      {data.map((data) => {
        return (
          <div className="list_box">
            <div
              className="img_box"
              style={{ background: `url(${data.img})` }}
            ></div>
            <div className="list_info1">
              <h4>{data.name}</h4>
              <p>GR 1234567</p>
            </div>
            <div className="list_info2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6V12C17.9983 13.5908 17.3656 15.1159 16.2407 16.2407C15.1159 17.3656 13.5908 17.9983 12 18H6.00002C5.7348 18 5.48045 18.1054 5.29291 18.2929C5.10537 18.4804 5.00002 18.7348 5.00002 19C5.00002 19.2652 5.10537 19.5196 5.29291 19.7071C5.48045 19.8946 5.7348 20 6.00002 20H12C14.121 19.9976 16.1544 19.1539 17.6542 17.6542C19.1539 16.1544 19.9976 14.121 20 12V6C20 5.73478 19.8947 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5C18.7348 5 18.4804 5.10536 18.2929 5.29289C18.1054 5.48043 18 5.73478 18 6Z"
                  fill="#FF6175"
                />
                <path
                  d="M12 17C13.3256 16.9984 14.5965 16.4712 15.5338 15.5338C16.4712 14.5965 16.9984 13.3256 17 12V5C16.9984 3.6744 16.4712 2.40353 15.5338 1.46619C14.5965 0.528847 13.3256 0.00156145 12 0H5C3.6744 0.00156145 2.40353 0.528847 1.46619 1.46619C0.528847 2.40353 0.00156145 3.6744 0 5V12C0.00156145 13.3256 0.528847 14.5965 1.46619 15.5338C2.40353 16.4712 3.6744 16.9984 5 17H12ZM5.81 7.4141L7.0883 9.1817L11.3207 5.2657C11.5155 5.08556 11.7738 4.99018 12.0389 5.00053C12.304 5.01089 12.5542 5.12612 12.7343 5.3209C12.9144 5.51568 13.0098 5.77403 12.9995 6.03913C12.9891 6.30423 12.8739 6.55436 12.6791 6.7345L7.6187 11.416C7.51484 11.512 7.39179 11.5849 7.25767 11.6299C7.12355 11.6749 6.98142 11.6908 6.84067 11.6768C6.69991 11.6628 6.56373 11.6191 6.44112 11.5485C6.31852 11.478 6.21227 11.3822 6.1294 11.2676L4.19 8.5859C4.04241 8.37076 3.98474 8.10646 4.0293 7.84939C4.07387 7.59232 4.21713 7.36285 4.42853 7.20994C4.63992 7.05703 4.9027 6.9928 5.1608 7.03094C5.4189 7.06908 5.65187 7.20658 5.81 7.4141Z"
                  fill="#FF6175"
                />
              </svg>
              <div>
                <h3>VII-A</h3>
                <p>Class</p>
              </div>
            </div>
            <p className="list_info3">₹1,50,21</p>
          </div>
        );
      })}
    </div>
  );
};

export default UnpaidCard;
