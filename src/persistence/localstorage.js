//Local Storage

export const handleGetProductsLocalStorage = ()=>{

    const products= JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    } else{
        return [];
    }

};

//Guardar local storage

//Recibe producto
export const setInLocalStorage= (productIn)=>{
    //Trae elementos
    let producsInLocal=handleGetProductsLocalStorage();
    
    const existingIndex= producsInLocal.findIndex((productsLocal) =>
        productsLocal.id==productIn.id
    )

    //Verifica si el elemento existe
    if(existingIndex!==-1){
        //debe reemplazarse
        producsInLocal[existingIndex]=productIn;
    } else {
        //no se agrega
        producsInLocal.push(productIn);
    }
    //Set el nuevo array
    localStorage.setItem("products",JSON.stringify(producsInLocal));
};
