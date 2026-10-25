const prisma = require("../config/prismaClient");

async function findUserByEmail(email) {
    return await prisma.user.findUnique({
      where: { email }
    });
}

async function findUserByUsername(username) {
    return await prisma.user.findUnique({
        where: { username }
    });
}

async function createUser({ username, password,  email, country, gender, newsletter, role }) {
    return await prisma.user.create({
      data: {
        username,
        password,
        email,
        country,
        gender,
        newsletter,
        role
      },
    });
}

module.exports = {
    findUserByEmail,
    findUserByUsername,
    createUser,
}