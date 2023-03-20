/*  Función para pasar de 'Login' a 'Logout' y viceversa */
function login_logout(e){
    switch(e.innerText){
        case 'Login':
            e.innerText = "Logout";
            break;
        default:
            e.innerText = "Login";
            break;
    }
}
/* Función para remover el botón verde */
function remove_button(e){
    e.remove();
}