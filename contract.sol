pragma solidity ^0.8.4;


contract deployContract{
    akshayLok private akl;


    function deployContractakl(int _years, string memory _name, address _userAddress, string memory _dateOfAgreement) public {
        akl = new akshayLok(_years,_name,_userAddress,_dateOfAgreement);
    }

    function getAddr() public view returns(address) {
        return address(akl);
    }
}


contract akshayLok {
    
    int immutable Years;
    string  Name;
    address immutable UserAddress;
    address immutable GovtAddress = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
    string DateOfAgreement;
    

    constructor(int _years, string memory _name, address _userAddress, string memory _dateOfAgreement){
        Years = _years;
        Name = _name;
        UserAddress = _userAddress;
        DateOfAgreement = _dateOfAgreement;
    }

    function getAttributes() public view returns(int, string memory,  address,  address, string memory){
        return (Years, Name, UserAddress, GovtAddress, DateOfAgreement);
    }
  
}
