// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
import "./../node_modules/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

contract PaymentProcessor {
    address public admin; //address of merchant
    IERC20 public dai;

    event PaymentVerified(address payer, uint amount, uint paymentID, uint date);
    constructor(address adminAddress, address daiAddress) public {
        admin = adminAddress;
        dai = IERC20(daiAddress);
    }

    function pay(uint amount, uint paymentID) external{
        dai.transferFrom(msg.sender, admin, amount);
        emit PaymentVerified(msg.sender, amount, paymentID, block.timestamp);
    }
}
