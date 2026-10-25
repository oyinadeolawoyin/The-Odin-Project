const pool = require("./pool");

async function createProfile(firstname, lastname, username, email, password) {
    await pool.query("INSERT INTO profiles (firstname, lastname, username, email, password) VALUES ($1, $2, $3, $4, $5)", [firstname, lastname, username, email, password]);
};

async function updateProfile(firstname, lastname, username, email, password, id) {
    await pool.query(
        "UPDATE profiles SET firstname = $1, lastname = $2, username = $3, email = $4, password = $5 WHERE id = $6",
        [firstname, lastname, username, email, password, id]
    );
}

async function getUsername(username) {
    const { rows } = await pool.query("SELECT * FROM profiles WHERE username = $1", [username]);
    return rows[0];
};

async function getUser(username) {
    try{
        const { rows } = await pool.query("SELECT * FROM profiles WHERE username = $1", [username]);
        return rows[0] || [];
    } catch (err) {
        console.error(err.message);
        throw err;
    } 
}

async function getUserId(id) {
    const { rows } = await pool.query("SELECT * FROM profiles WHERE id = $1", [id]);
    return rows[0];
}

async function createMember(username, membership) {
   await pool.query("UPDATE profiles SET membership = $2 WHERE username = $1",
    [username, membership]);
}

async function createAdmin(username, admin) {
    await pool.query("UPDATE profiles SET admin = $2 WHERE username = $1",
     [username, admin]);
}

async function createMembers(username, membership, admin) {
    await pool.query("UPDATE profiles SET admin = $3, membership = $2 WHERE username = $1",
     [username, membership, admin]);
}

async function createContent(title, content, date, id) {
    await pool.query("INSERT INTO posts (title, content, date, profile_id ) VALUES ($1, $2, $3, $4)", [title, content, date, id]);
};

async function getPosts() {
    try {
        const { rows } = await pool.query("SELECT posts.title, posts.content, posts.date, posts.id, profiles.username FROM posts JOIN profiles ON posts.profile_id = profiles.id");
        return rows || [];
    }catch (err) {
        console.error(err.message);
        throw err;
    }
}

async function getPost(postId) {
    try {
        const { rows } = await pool.query("SELECT * FROM posts WHERE id =$1", [postId]);
        return rows[0] || [];
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

async function updatePost(title, content, id) {
    await pool.query(
      "UPDATE posts SET title = $1, content = $2 WHERE id = $3",
      [title, content, id]
    );
}

async function deletePost(postId) {
    await pool.query("DELETE FROM posts WHERE id =$1", [postId]);
}

async function postByUser(username) {
    try {
        const { rows } = await pool.query("SELECT posts.title, posts.content, posts.id, posts.date, profiles.username FROM posts JOIN profiles ON posts.profile_id = profiles.id WHERE username = $1", [username]);
        return rows || [];
    } catch (err) {
        console.error(err.message);
        throw err;
    }   
}
 

module.exports = {
    createProfile,
    getUsername,
    getUserId,
    createMember,
    createAdmin,
    createMembers,
    updateProfile,
    getUser,
    createContent,
    getPosts,
    getPost,
    updatePost,
    deletePost,
    postByUser
}