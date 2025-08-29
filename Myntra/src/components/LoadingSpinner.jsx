const LoadingSpinner = () => {
    return(
      <div className="d-flex justify-content-center spinner">
    <div className="spinner-border" role="status" style={{width :"10rem", height: "10rem"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
    )
  };
  
  export default LoadingSpinner;
  