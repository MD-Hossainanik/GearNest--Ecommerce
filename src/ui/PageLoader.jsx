import "./PageLoader.css";

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-card">
        {/* Spinner */}
        <div className="spinner"></div>

        {/* Brand Name */}
        <h2 className="brand-name">GearNest</h2>

        {/* Loading text */}
        <p className="loading-text">Loading your shopping experience...</p>

        {/* Animated dots */}
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
