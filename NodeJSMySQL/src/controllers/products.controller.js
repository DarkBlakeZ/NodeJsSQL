import { getConnection, sql, querys } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool.request().query(querys.getAllProducts);

    res.json(result.recordset);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createNewProduct = async (req, res) => {
  const { name, description } = req.body;

  let { quantity } = req.body;

  if (name == null || description == null) {
    return res.status(400).json({
      msg: "Bad Request. Llene todos los campos",
    });
  }
  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .query(querys.postProduct);

    res.status(200).json({
      msg: "New Product",
      name,
      description,
      quantity,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", id)
    .query(querys.getProductbyId);

  res.json(result.recordset[0]);
};

export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", id)
      .query(querys.deleteProduct);

    res.json({
      msg: "Producto eliminado con exito!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
