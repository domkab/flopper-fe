import clsx from "clsx";
import MailchimpSubscribe from "react-mailchimp-subscribe";

interface CustomFormProps {
  status?: 'sending' | 'error' | 'success' | null;
  message?: string | null;
  onValidated: (formData: { EMAIL: string }) => void;
  spaceTopClass?: string;
  subscribeBtnClass?: string;
}

const CustomForm: React.FC<CustomFormProps> = ({
  status,
  message = "",
  onValidated,
  spaceTopClass,
  subscribeBtnClass
}) => {
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
    <div className={clsx("subscribe-form-3", spaceTopClass)}>
      <div className="mc-form">
        <div>
          <input
            className="email"
            ref={node => (email = node)}
            type="email"
            placeholder="Your Email Address"
            required
          />
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
        <div
          className={`clear-3 ${subscribeBtnClass ? subscribeBtnClass : ""}`}
        >
          <button className="button" onClick={submit}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

interface SubscribeEmailTwoProps {
  mailchimpUrl: string;
  spaceTopClass?: string;
  subscribeBtnClass?: string;
}

const SubscribeEmailTwo: React.FC<SubscribeEmailTwoProps> = ({
  mailchimpUrl,
  spaceTopClass,
  subscribeBtnClass
}) => {
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
            spaceTopClass={spaceTopClass}
            subscribeBtnClass={subscribeBtnClass}
          />
        )}
      />
    </div>
  );
};

export default SubscribeEmailTwo;
