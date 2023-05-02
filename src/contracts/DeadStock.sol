// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <=0.9.0;

contract DeadStock {
  struct Role {
    uint256 number;
    string role;
    string name;
  }

  struct User{
    string Member_Name;
    string role;
    address id;
    uint256 number;
  }

  struct Transaction {
    string id;
    string TranHash;
    string ItemName;
    string Description;
    uint256 Amount;
    string Date;
    string Location;
    address creator;
    uint256 timestamp;  
  }

  struct Approval {
    string TranHash;
    User[] approvalList;
  }

  address public creator;
  address public transaction;
  address[] public userList;
  
  uint256 userCount;
  uint256 transactionCount;
  uint256 roleCount;

  Role[] public roleList;
  Transaction[] public transactionList;

  mapping(string => Role) public roleMap;
  mapping(address => User) public userMap;
  mapping(string => Transaction) public transactionMap;
  mapping(string => Approval) public approvalMap;
  
  constructor(address owner) {
    creator = owner;
    createUser("Owner", owner, "Admin");
  }

  modifier creatorOnly() {
    require(msg.sender == creator);
    _;
  }
    
  modifier memberOnly() {
    require(msg.sender == userMap[msg.sender].id);
    _;
  }

  function authMember() public view memberOnly returns (bool) {
    return true;
  }
    
  function authCreator() public view creatorOnly returns (bool) {
    return true;
  }

  function createUser(string memory _role, address _id, string memory _name) public {
    User storage u = userMap[_id];
    u.role = _role;
    u.id = _id;
    u.Member_Name = _name;
    u.number = userCount++;
    userList.push(_id);
  }

  function createRole(string memory _role, string memory _name) public {
    Role storage r = roleMap[_role];
    r.number = roleCount++;
    r.role = _role;
    r.name = _name;
    roleList.push(r);
  }

  function listUsers() public view returns(address[] memory) {
      return userList;
  }
    
  function listRoles() public view returns(Role[] memory) {
    return roleList;
  }
  
}
