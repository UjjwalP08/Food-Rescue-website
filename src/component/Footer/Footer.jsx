const Footer = () => {
  return (
    <footer className="p-10 bg-[#154a4a] text-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          <a href="tel:1800-00-000" className="text-white hover:underline">
            Tel: 1800-00-000
          </a>
          &nbsp;| Email:&nbsp;
          <a
            href="mailto:support@foodrescue.com"
            className="text-white hover:underline"
          >
            support@foodrescue.com
          </a>
          &nbsp;| Copyright © {new Date().getFullYear()}{" "}
          <span className="font-medium">FoodRescue</span> | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
