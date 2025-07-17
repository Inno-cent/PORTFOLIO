import React from "react";
import "./index.scss";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-wrapper">
        <p>
          Got a project idea you’d like to explore? Or just want to chat over
          coffee? I’m always open to new opportunities, conversations, and
          collaborations — feel free to reach out!
        </p>
        <div className="contact-btn">
          <Link href="/contact">
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
