
const dataBaseConnection = require('../../config/database');


const renderHome = (req, res) => {

    dataBaseConnection.query("SELECT * FROM categorias",(error,data)=>{
        if (error) {
            console.log(error)
        } else {
            res.render("./pages/index",{data})
        }
    });
};

const getAllProducts =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM productos",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/productos", {data})
        }
    });
};

const getForm =(req, res)=>{

    res.render("./pages/formulario")      
};


const addnewProduct = (req, res)=>{
    const {producto,categoria,descripcion,precio}= req.body;
  
    dataBaseConnection.query('INSERT INTO productos(producto,categoria,imagen,descripcion,precio)VALUES(?,?,"/imagenes/estilo-madera.png",?,?)',[producto,categoria,descripcion,parseInt(precio)],(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/productos")
        }
    });

}


module.exports = {
    renderHome,
    getAllProducts,
    getForm,
    addnewProduct
};