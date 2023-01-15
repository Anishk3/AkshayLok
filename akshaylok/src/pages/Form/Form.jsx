import { useState, useContext } from "react";
import { ethers } from "ethers";
import { AuthContext } from "../../context/authContext";

import { Navbar } from "../../components"

function Form() {


  const {userMetamask, } = useContext(AuthContext)

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const [publicAddress, setPublicAddress] = useState("null")

  const [currentContractVal, setCurrentContractVal] = useState(null);

  //ether js variables
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);


  let contract_ABI =  [
    "function deployContractakl(int _years, string memory _name, address _userAddress, string memory _dateOfAgreement) public",
    "function getAddr() public view returns(address)"

]

  let contractAdd = "0x2Bdf8FE2F02c4802b2814c4bc844a7ea5547F1b3"

  function connectWalletHandler(e) {
    e.preventDefault()
    if (window.ethereum) {
      //requesting accounts
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((result) => {
          accountChangedHandler(result[0]);
          setPublicAddress(result[0])
          console.log(result[0])
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
      signer: tempSigner
    })
    
  }



  async function deployContract(e){
    e.preventDefault()

    const res = await contract.deployContractakl(2,"sid",publicAddress,"12-10-22")
    const confirm = await res.wait()
    console.log(confirm)


    const newAddr = await contract.getAddr()
    console.log("newAddr : ", newAddr)

    

  }

  return (
    <div className="registrationForm">

      <Navbar login={true} />
      <h1>Registration Form</h1>
      <form>

        <div>
          <label for="years">Years</label>
          <input type="number" id="years" placeholder="years"  />
        </div>


        <button type="submit"  onClick={(e)=>{
          connectWalletHandler(e)
        }}>{connButtonText}</button>

        <button type="submit" onClick={(e)=>{
          deployContract(e)
        }} >deploy</button>
        
      </form>
    </div>
  );
}

export default Form;
