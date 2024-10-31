/* Popup */

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";



const cancelButton=document.getElementById("cancelButton");
cancelButton.addEventListener("click", ()=>{
    closeModal();

}); 


//Abrir y cerrar el modal
export const openModal = ()=>{

    const modal= document.getElementById("modalPopUp");
    modal.style.display="flex";

    if(productoActivo){
        deleteButton.style.display="block";
    }else{
        deleteButton.style.display="none";

    }

    if(productoActivo){
        const nombre= document.getElementById("name"),
        imagen= document.getElementById("img") ,
        precio= document.getElementById("precio") ,
        categories= document.getElementById("categoria");
        nombre.value=productoActivo.nombre;
        imagen.value=productoActivo.imagen;
        precio.value=productoActivo.precio;
        categories.value=productoActivo.categories;
    }

};

export const closeModal = ()=>{

    const modal= document.getElementById("modalPopUp");
    modal.style.display="none";
    setProductoActivo (null);
    resetModal();
};

const resetModal=()=>{
    const nombre= document.getElementById("name"),
    imagen= document.getElementById("img") ,
    precio= document.getElementById("precio") ,
    categories= document.getElementById("categoria");
    nombre.value="";
    imagen.value="";
    precio.value=0;
    categories.value="";

}

const deleteButton=document.getElementById("deleteButton");
deleteButton.addEventListener("click",()=>{
    handleButtonDelete();
});

const handleButtonDelete=()=>{
    handleDeleteProduct();
};

