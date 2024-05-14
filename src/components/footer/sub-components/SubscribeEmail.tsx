import PropTypes from "prop-types";
import MailchimpSubscribe from "react-mailchimp-subscribe";

interface CustomFormProps {
  status?: 'sending' | 'error' | 'success' | null;
  message?: string | null;
  onValidated: (formData: { EMAIL: string }) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ status, message, onValidated }) => {
  let email: HTMLInputElement | null = null;
  const submit = () => {
    if (email && email.value.includes("@")) {
      onValidated({
        EMAIL: email.value
      });
      email.value = "";
    }
  };

  return (
    <div className="subscribe-form">
      <div className="mc-form">
        <div>
          <input
            id="mc-form-email"
            className="email"
            ref={node => (email = node)}
            type="email"
            placeholder="Enter your email address..."
          />
        </div>
        <div className="clear">
          <button className="button" onClick={submit}>
            SUBSCRIBE
          </button>
        </div>
      </div>

      {status === "sending" && (
        <div style={{ color: "#3498db", fontSize: "12px" }}>sending...</div>
      )}
      {status === "error" && (
        <div
          style={{ color: "#e74c3c", fontSize: "12px" }}
          dangerouslySetInnerHTML={{ __html: message ?? "" }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#2ecc71", fontSize: "12px" }}
          dangerouslySetInnerHTML={{ __html: message ?? "" }}
        />
      )}
    </div>
  );
};

interface SubscribeEmailProps {
  mailchimpUrl: string;
}

const SubscribeEmail: React.FC<SubscribeEmailProps> = ({ mailchimpUrl }) => {
  return (
    <div>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={
              typeof message === 'string' ? message : message?.toString() || null
            }
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default SubscribeEmail;
