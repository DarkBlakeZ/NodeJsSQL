export const querys =  {
    getAllProducts: 'select * from products',
    postProduct: 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductbyId: 'select * from products where id = @id',
    deleteProduct: 'DELETE FROM Products WHERE id = @id'
}