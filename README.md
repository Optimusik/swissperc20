
### 1. Install Dependency

```bash
npm install
```

### 2. Set .env File

create .env file in root project

```bash
PRIVATE_KEY="your private key"
```

### 3. Create Smart Contract

- Open contract folder
- Create Token.sol file
- Copy this code and paste there
- Feel free to modify token name and token symbol

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    constructor()ERC20("IzzyToken","IZZY"){}

    function mint1000tokens() public {
        _mint(msg.sender,1000*10**18);
    }

    function burn1000tokens() public{
        _burn(msg.sender,1000*10**18);
    }

}
```

### 4. Compile Smart Contract

```bash
npm run compile
```

### 5. Deploy Smart Contract

```bash
npm run deploy
```

### 6. Mint Token

```bash
npm run mint
```

### 7. Check Supply

```bash
npm run check-supply
```

### 8. Check Balance

```bash
npm run balance-of
```

### 9. Tranfer Token

```bash
npm run transfer
```

### 10. Finsihed

- Open the deployed-adddress.ts (location in utils folder)
- Copy the address and paste the address in testnet dashboard
