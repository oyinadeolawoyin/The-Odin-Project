const userService = require("../services/userService");

async function fetchUsers(req, res) {
    try {
        const users = await userService.fetchUsers();
        res.status(201).json({ users: users });
        
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}


async function deleteUser(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            await userService.deleteUser(Number(req.params.id));
            res.status(201).json({ message: "User deleted." });
        } else {
            res.status(403).json({ message: "Only admin is permitted to delete User" });
        }
    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

module.exports = {
    fetchUsers,
    deleteUser
}