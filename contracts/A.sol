// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

contract A {
    uint256 public someValue;

    function a() external {
        someValue++;
    }

    function a(uint256 _x) external {
        someValue += _x;
    }
}
