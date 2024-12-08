// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HackerMatch {

    // Structure to store user details
    struct User {
        uint256 id;
        string username;
        string[] skills;
        string[] tags;
        string[] history;
        bool exists;
    }

    // Mapping to store users by their wallet address
    mapping(address => User) public users;
    address[] public userAddresses;  // Array to store addresses for iteration
    uint256 public userCount;

    // Event to log when a new user is added
    event UserAdded(address indexed user, uint256 id, string username);

    // Function to add a user
    function addUser(
        address _wallet,
        string memory _username,
        string[] memory _skills,
        string[] memory _tags,
        string[] memory _history
    ) public {
        require(!users[_wallet].exists, "User already exists");

        userCount++;

        // Initialize user without posts
        users[_wallet] = User({
            id: userCount,
            username: _username,
            skills: _skills,
            tags: _tags,
            history: _history,
            exists: true
        });

        // Add the user's address to the list for iteration
        userAddresses.push(_wallet);

        emit UserAdded(_wallet, userCount, _username);
    }

    // Function to get user details
    function getUser(address _wallet) public view returns (
        uint256 id,
        string memory username,
        string[] memory skills,
        string[] memory tags,
        string[] memory history
    ) {
        require(users[_wallet].exists, "User does not exist");

        User storage user = users[_wallet];

        return (
            user.id,
            user.username,
            user.skills,
            user.tags,
            user.history
        );
    }

    // Function to match users based on skills and tags
    function getMatches(address _wallet) public view returns (address[] memory) {
        require(users[_wallet].exists, "User does not exist");

        User storage user = users[_wallet];
        uint256 matchCount;
        address[] memory matches = new address[](userCount);

        // Loop through all users to find matching ones based on skills and tags
        for (uint256 i = 0; i < userAddresses.length; i++) {
            address matchAddr = userAddresses[i];
            if (matchAddr != _wallet && users[matchAddr].exists) {
                User storage matchUser = users[matchAddr];

                bool skillMatch = false;
                bool tagMatch = false;

                // Check for common skills
                for (uint256 j = 0; j < user.skills.length; j++) {
                    for (uint256 k = 0; k < matchUser.skills.length; k++) {
                        if (keccak256(bytes(user.skills[j])) == keccak256(bytes(matchUser.skills[k]))) {
                            skillMatch = true;
                            break;
                        }
                    }
                }

                // Check for common tags
                for (uint256 j = 0; j < user.tags.length; j++) {
                    for (uint256 k = 0; k < matchUser.tags.length; k++) {
                        if (keccak256(bytes(user.tags[j])) == keccak256(bytes(matchUser.tags[k]))) {
                            tagMatch = true;
                            break;
                        }
                    }
                }

                // Add match if both skills and tags match
                if (skillMatch && tagMatch) {
                    matches[matchCount] = matchAddr;
                    matchCount++;
                }
            }
        }

        // Return only the relevant matches
        address[] memory filteredMatches = new address[](matchCount);
        for (uint256 i = 0; i < matchCount; i++) {
            filteredMatches[i] = matches[i];
        }
        return filteredMatches;
    }

    // Function to update user's skills
    function updateSkills(address _wallet, string[] memory _skills) public {
        require(users[_wallet].exists, "User does not exist");

        users[_wallet].skills = _skills;
    }

    // Function to update user's tags
    function updateTags(address _wallet, string[] memory _tags) public {
        require(users[_wallet].exists, "User does not exist");

        users[_wallet].tags = _tags;
    }

    // Function to update user's history
    function updateHistory(address _wallet, string[] memory _history) public {
        require(users[_wallet].exists, "User does not exist");

        users[_wallet].history = _history;
    }
}
