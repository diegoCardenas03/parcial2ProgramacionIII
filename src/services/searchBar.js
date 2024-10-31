//Barra de busqueda

import { handleGetProductsLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../view/store";

export const handleSearchProductByName= ()=>{
    const inputHeader=document.getElementById("inputHeader");
    const products= handleGetProductsLocalStorage();

    const result= products.filter((el)=>
    el.nombre.toLowerCase().includes(inputHeader.value));
    handleRenderList(result);
}