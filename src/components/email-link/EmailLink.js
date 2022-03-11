import "./EmailLink.css";

const EmailLink = () => {
  return (
    <div className="content-container-right">
      <div className="email-content">
        <a
          className="email"
          href="mailto:javierarango.business@gmail.com"
          target="_blank"
        >
          javierarango.business@gmail.com
        </a>
      </div>
    </div>
  );
};

export default EmailLink;
