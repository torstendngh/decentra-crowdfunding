//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Project {

  string title;
  string description;
  string creatorID; // payment adress inside
  string imgSrc; // path/source of project image

  uint256 backers;
  string startDate;
  uint16 totalHours;

  constructor (
    string memory _title,
    string memory _description,
    string memory _creatorID,
    string memory _imgSrc
  ) {
    title = _title;
    description = _description;
    creatorID = _creatorID;
    imgSrc = _imgSrc;
  }

  // Getter

  function getTitle() public view returns (string memory) {
    return title;
  }

  function getDescription() public view returns (string memory) {
    return description;
  }

  function getCreatorID() public view returns (string memory) {
    return creatorID;
  }

  function getImgSrc() public view returns (string memory) {
    return imgSrc;
  }

  // Setter

  function setTitle(string memory _title) public {
    title = _title;
  }

  function setDescription(string memory _description) public {
    description = _description;
  }

  function setImgSrc(string memory _imgSrc) public {
    imgSrc = _imgSrc;
  }

}
