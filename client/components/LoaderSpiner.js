import Loader from "react-loader-spinner";
import { Container } from "reactstrap";

function LoaderSpiner(props) {
  //other logic
  return (
    <div style={{ margin: '250px',display: 'flex', justifyContent: 'center' }}>
      <Loader
      type="ThreeDots" 
      color="#00BFFF" 
      height={80} 
      width={80} //3 secs
    />
    </div>
  );
}

export default LoaderSpiner;