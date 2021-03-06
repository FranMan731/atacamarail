//============================
//  PUERTO
//============================
process.env.PORT = process.env.PORT || 3000;

//============================
//  ENTORNO
//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//============================
//  Base de Datos
//============================

let urlDB;

if(process.env.NODE_ENV === 'dev') {
	urlDB = 'mongodb://localhost:27017/fullrailservices_bbdd';
} else {
	urlDB = 'mongodb://admin:admin123456@ds035907.mlab.com:35907/fullrailservices';
}

process.env.URLDB = urlDB;

//============================
//  Secret Token
//============================
process.env.SECRET_TOKEN = process.env.SECRET_TOKEN || "clave_secreta_para_full_rail_services_531dfds14";