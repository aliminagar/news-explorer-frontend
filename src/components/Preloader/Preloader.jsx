import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="circle-preloader"></div>
      <p className="preloader-text">Searching for news...</p>
    </div>
  );
};

export default Preloader;
