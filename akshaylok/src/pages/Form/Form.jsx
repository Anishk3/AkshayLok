import { useState, useContext } from "react";
import { ethers } from "ethers";
import { AuthContext } from "../../context/authContext";
import { Footer } from '../../components';

import { Navbar, NotificationSlider } from "../../components";
import axios from "../../hooks/axios";

import { Link } from "react-router-dom";


import "./form.css";

function Form() {
  const { userMetamask, data } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const [publicAddress, setPublicAddress] = useState("null");

  const [currentContractVal, setCurrentContractVal] = useState(null);

  //ether js variables
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);


  //form inouts
  const [name, Setname] = useState(null)
  const [contact, setContact] = useState(null)
  const [years, setYears] = useState(null)
  const [dateOfStarting, setDate] = useState(null)

  //button variale
  const [buttonFunc, setButtonFunc] = useState("metamask")
  const [loading, setLoading] = useState(false)


  //notiff
  const [notif, setNotif] = useState(false)

  let contract_ABI = [
    "function deployContractakl(int _years, string memory _name, address _userAddress, string memory _dateOfAgreement) public",
    "function getAddr() public view returns(address)",
  ];

  let contractAdd = "0x2Bdf8FE2F02c4802b2814c4bc844a7ea5547F1b3";

  function connectWalletHandler(e) {
    e.preventDefault();
    if (window.ethereum) {
      //requesting accounts
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((result) => {
          accountChangedHandler(result[0]);
          setPublicAddress(result[0]);
          console.log(result[0]);
          setConnButtonText("Wallet Connected");

        });
    } else {
      setErrorMessage("Metamask Not Present");
    }
  }

  function accountChangedHandler(newAccount) {
    setDefaultAccount(newAccount);
    updateEthers();
  }

  function updateEthers() {
    //only read functionality
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    //read and write functionality has access to pseudokey
    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    // aruguments are : 1.contractAddress, 2.contract_ABI, 3. signer
    let tempContract = new ethers.Contract(
      contractAdd,
      contract_ABI,
      tempSigner
    );
    setContract(tempContract);
    console.log("signer :", tempSigner);

    userMetamask({
      signer: tempSigner,
    });

    setNotif(true)
    setButtonFunc("deploy")

  }

  async function deployContract(e) {
    e.preventDefault();
    setLoading(true)

    console.log(`form input check ${name}, ${contact}, ${years}, ${dateOfStarting} `)

    const res = await contract.deployContractakl(
      years,
      name,
      publicAddress,
      dateOfStarting
    );
    const confirm = await res.wait();
    console.log(confirm);

    const newAddr = await contract.getAddr();
    console.log("newAddr : ", newAddr);

    const TransactionData = {
      transactionHash: confirm.transactionHash,
      contractAddr: newAddr,
      details: {
        years,
        name,
        publicAddress,
        dateOfStarting
      },
    };


    const sendData = {
      email: data.email,
      transaction: TransactionData,
    };


    const respond = await axios.put("/transaction", sendData);
    console.log(respond.data);

    setLoading(false)
  }

  return (
    <div className="registrationForm">
      <Navbar login={true} />
      <NotificationSlider data={notif} />
      <div className="main">
        <h1>New Connection</h1>
        <form>
          <div className="first-input" >
            <label for="name">Name <br /> <span>As per Government ID</span></label>
            <input 
              type="text" 
              id="name" 
              placeholder="john Doe"
              onChange={(e)=>{
                Setname(e.target.value)
              }}
              />
          </div>

          <div>
            <label for="contact"> Contact Nuber </label>
            <input 
              type="tel" 
              id="contact" 
              placeholder="6574832938"
              onChange={(e)=>{
                setContact(e.target.value)
              }}
              />
          </div>

          <div>
            <label for="years">Years</label>
            <input 
              type="number" 
              id="years" 
              placeholder="Years"
              onChange={(e)=>{
                setYears(e.target.value)
              }}
              />
          </div>

          <div>
            <label for="date">Date of Starting</label>
            <input 
              type="date" 
              id="date" 
              placeholder="12-10-2002"
              onChange={(e)=>{
                setDate(e.target.value)
              }}
              />
          </div>

              { buttonFunc != "metamask" && (
                <div className="terms" >
                <label for="date">Type  <strong>"CONFIRM"</strong> To Accept <Link to='/terms'>Terms and Conditions</Link> </label>
                <input 
                  type="text" 
                  id="confirm" 
                  placeholder="CONFIRM"
                  />
              </div>
              ) }


            
            
          <button
            type="submit"
            className="btn third"
            disabled = {loading ? true : false}
            onClick={(e) => {
              if(buttonFunc == "metamask"){
                connectWalletHandler(e);
              }else{
                deployContract(e)
              }
            }}
          >
            {buttonFunc == "metamask" ? "connect to metamask" : "Sign the Agreement"}
          </button>
          
        </form>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Form;
