import sql from 'mssql';

const dbSettings = {
    user: 'Darkan',
    password: '8991',
    server: 'localhost',
    database: 'webstore',
    options: {
        encrypt: true,
        trustServerCertificate: true, 
    }
}

export const getConnection = async() => {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch(e){
        console.log(e);
    }
    
};

export { sql };