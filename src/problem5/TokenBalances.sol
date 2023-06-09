// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IToken {
  function balanceOf(address holder) external view returns (uint);
}

contract TokenBalances {

    struct Balance {
        address token;
        uint256 balance;
    }

    function getBalances(address holder, address[] calldata tokens) external view returns (Balance[] memory) {
        Balance[] memory balances = new Balance[](tokens.length);

        for (uint256 i = 0; i < tokens.length; i++) {
            address tokenAddr = tokens[i];
            uint256 bal = IToken(tokenAddr).balanceOf(holder);
            balances[i] = Balance(tokenAddr, bal);
        }
        return balances;
    }

}

