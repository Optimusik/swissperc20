// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    constructor() ERC20("PERC20Token", "PERC") {
        _mint(msg.sender, 1 * 10 ** decimals());
    }

    function mintToken(address to) public {
        _mint(to, 1 * 10 ** decimals());
    }
}
