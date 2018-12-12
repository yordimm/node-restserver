process.env.PORT = process.env.PORT || 3000;


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento de Token  60 seg, 60 min, 24 horas, 3 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//Seed de autenticación 
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.urlDB = urlDB;



