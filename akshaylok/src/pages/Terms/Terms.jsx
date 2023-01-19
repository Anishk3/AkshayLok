import './terms.css'
import {Navbar} from '../../components'

function Terms() {
  return (
    <div className="pdf">
      <Navbar login={true} />
      <iframe
        src="https://drive.google.com/file/d/14grDSc5-kt9JONJ8CFqrkrsdGhZvS8QV/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Terms;
