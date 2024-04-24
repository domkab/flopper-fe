import PropTypes from "prop-types";
import clsx from "clsx";
import SubscribeEmailTwo from "../../components/newsletter/SubscribeEmailTwo";


interface NewsletterTwoProps {
  spaceTopClass?: string;
  spaceBottomClass: string;
  subscribeBtnClass?: string;
 }

const NewsletterTwo: React.FC<NewsletterTwoProps> = ({
  spaceTopClass,
  spaceBottomClass,
  subscribeBtnClass
}) => {
  return (
    <div className={clsx("subscribe-area-3", spaceTopClass, spaceBottomClass)}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-10 ms-auto me-auto">
            <div className="subscribe-style-3 text-center">
              <h2>Subscribe </h2>
              <p>Subscribe to our newsletter to receive news on update</p>
              {/* subscription form */}
              <SubscribeEmailTwo
                mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                spaceTopClass="mt-35"
                subscribeBtnClass={subscribeBtnClass}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterTwo;
