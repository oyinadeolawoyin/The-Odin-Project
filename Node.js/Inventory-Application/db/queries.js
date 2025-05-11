const pool = require("./pool");

async function getCategories() {
    try {
        const { rows } = await pool.query("SELECT * FROM categories");
        console.log(rows);
        if (rows.length === 0) {
            throw new Error("Categories not found");
        }
        return rows;
    }catch (err) {
        console.error(err.message);
        throw err;
    }
}

async function getCategoryItems(categoryId) {
    try {
        const { rows } = await pool.query(
            `SELECT categories.name AS category_name, items.id, items.name, items.description, items.price, items.quantity
             FROM categories 
             JOIN items ON categories.id = items.category_id
             WHERE categories.id = $1`,
            [categoryId]
        );
        console.log(rows);
        if (rows.length === 0) {
            throw new Error("Items not found");
        }
        return rows;
    }catch (err) {
        console.error(err.message);
        throw err;
    }
}


async function getItem(itemId) {
    try {
        const { rows } = await pool.query("SELECT * FROM items WHERE id =$1", [itemId]);
        if (rows.length === 0) {
            throw new Error("Item not found");
        }
        return rows[0];
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

async function getCategory(categoryId) {
    try {
        const { rows } = await pool.query("SELECT * FROM categories WHERE id =$1", [categoryId]);
        if (rows.length === 0) {
            throw new Error("Item not found");
        }
        return rows[0];
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

async function addCategory(name, description) {
    await pool.query("INSERT INTO categories (name, description) VALUES ($1, $2)", [name, description]);
};

async function getCategoryId(name) {
    try {
        const result = await pool.query("SELECT id FROM categories WHERE name = $1", [name]);
        if (result.rows.length === 0) {
            return null; 
        }
        return result.rows[0].id;
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

async function addItem(name, description, price, quantity, category_id) {
    await pool.query(
        "INSERT INTO items (name, description, price, quantity, category_id) VALUES ($1, $2, $3, $4, $5)",
        [name, description, price, quantity, category_id]
    );
}

async function deleteItem(itemId) {
    await pool.query("DELETE FROM items WHERE id =$1", [itemId]);
}

async function deleteCategory(categoryId) {
    await pool.query("DELETE FROM items WHERE category_id = $1", [categoryId]);
    await pool.query("DELETE FROM categories WHERE id =$1", [categoryId]);
}

async function updateItem(id, name, description, price, quantity) {
    await pool.query(
      "UPDATE items SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5",
      [name, description, price, quantity, id]
    );
}

async function updateCategory(id, name, description) {
    await pool.query(
      "UPDATE categories SET name = $1, description = $2 WHERE id = $3",
      [name, description, id]
    );
}

  

module.exports = {
    getCategories,
    getCategoryItems,
    getItem,
    getCategory,
    addCategory,
    getCategoryId,
    addItem,
    deleteItem,
    deleteCategory,
    updateItem,
    updateCategory
}