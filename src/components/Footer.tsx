const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold mb-2">9JOURNEYS Tours & Travels</p>
        <p className="text-sm opacity-90">Your Trusted Travel Partner Across India</p>
        <p className="text-xs mt-4 opacity-75">
          © {new Date().getFullYear()} 9Journeys. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
