// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

contract B {
    uint256 private _someValue;

    function someValue() external pure returns (uint256) {
        return 34;
    }

    function a() external payable {
        _someValue += msg.value;
    }
}
