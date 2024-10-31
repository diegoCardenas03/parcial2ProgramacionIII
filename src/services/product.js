/* Producto */

import { productoActivo } from "../../main";
import { handleGetProductsLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../view/MODAL.JS";
import { handleGetProductstoStore, handleRenderList } from "../view/store";
import Swal from "sweetalert2";


//Guardar o cambiar elementos 
const acceptButton=document.getElementById("aceptButton");
acceptButton.addEventListener("click",()=>{
    handleSaveOrModifyElements();

});
//Funcion para guardar
const handleSaveOrModifyElements=()=>{

    const nombre= document.getElementById("name").value ,
    imagen= document.getElementById("img").value ,
    precio= document.getElementById("precio").value ,
    categories= document.getElementById("categoria").value ;
    let object=null;

    if(productoActivo){
        object={
            ...productoActivo,
            nombre,
            imagen,
            precio, 
            categories
        }

    }else{

        object={
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio, 
            categories
        };
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado!",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductstoStore();
    closeModal();

};


//Eliminar elemento
export const handleDeleteProduct=()=>{

    Swal.fire({
        title: "Deseas eliminar el elemento?",
        text: "Si lo eliminas sera permanente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products=handleGetProductsLocalStorage();
            const results=products.filter((el)=>el.id!=productoActivo.id);
             
            //Set nuevo array
            localStorage.setItem("products",JSON.stringify(results));
            const newProducts= handleGetProductsLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
    });


}
