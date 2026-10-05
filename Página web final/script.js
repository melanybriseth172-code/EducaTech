/* =====================================================
EDUCATTECH - JAVASCRIPT
Inicio de sesión + validaciones + registro
===================================================== */

/* =====================================================
ELEMENTOS DEL DOM
===================================================== */

const pantallaAcceso = document.getElementById("pantallaAcceso");
const sitioPrincipal = document.getElementById("sitioPrincipal");

const formularioLogin = document.getElementById("formularioLogin");
const formularioRegistro = document.getElementById("formularioRegistro");

const loginCorreo = document.getElementById("loginCorreo");
const loginPassword = document.getElementById("loginPassword");

const btnMostrarPassword =
document.getElementById("btnMostrarPassword");

const mensajeLogin =
document.getElementById("mensajeLogin");

const btnInvitado =
document.getElementById("btnInvitado");

/* =====================================================
MOSTRAR / OCULTAR CONTRASEÑA
===================================================== */

if (btnMostrarPassword && loginPassword) {

btnMostrarPassword.addEventListener("click", function () {

    if (loginPassword.type === "password") {

        loginPassword.type = "text";

        btnMostrarPassword.innerHTML =
            '<i class="bi bi-eye-slash"></i>';

        btnMostrarPassword.setAttribute(
            "aria-label",
            "Ocultar contraseña"
        );

    } else {

        loginPassword.type = "password";

        btnMostrarPassword.innerHTML =
            '<i class="bi bi-eye"></i>';

        btnMostrarPassword.setAttribute(
            "aria-label",
            "Mostrar contraseña"
        );

    }

});


}

/* =====================================================
VALIDAR CORREO
===================================================== */

function validarCorreo(correo) {

const formatoCorreo =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return formatoCorreo.test(correo);


}

/* =====================================================
MOSTRAR MENSAJE DE LOGIN
===================================================== */

function mostrarMensajeLogin(mensaje, tipo) {

if (!mensajeLogin) return;

mensajeLogin.textContent = mensaje;

mensajeLogin.className =
    "mensaje-login " + tipo;


}

/* =====================================================
INICIO DE SESIÓN
===================================================== */

if (formularioLogin) {

formularioLogin.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const correo =
            loginCorreo.value.trim();

        const password =
            loginPassword.value;


        /* ---------------------------------------------
           CORREO VACÍO
        --------------------------------------------- */

        if (correo === "") {

            mostrarMensajeLogin(
                "⚠️ Ingresa tu correo electrónico.",
                "error"
            );

            loginCorreo.focus();

            return;
        }


        /* ---------------------------------------------
           CORREO INVÁLIDO
        --------------------------------------------- */

        if (!validarCorreo(correo)) {

            mostrarMensajeLogin(
                "⚠️ Ingresa un correo electrónico válido.",
                "error"
            );

            loginCorreo.focus();

            return;
        }


        /* ---------------------------------------------
           CONTRASEÑA VACÍA
        --------------------------------------------- */

        if (password === "") {

            mostrarMensajeLogin(
                "⚠️ Ingresa tu contraseña.",
                "error"
            );

            loginPassword.focus();

            return;
        }


        /* ---------------------------------------------
           CONTRASEÑA MUY CORTA
        --------------------------------------------- */

        if (password.length < 6) {

            mostrarMensajeLogin(
                "⚠️ La contraseña debe tener al menos 6 caracteres.",
                "error"
            );

            loginPassword.focus();

            return;
        }


        /* ---------------------------------------------
           LOGIN CORRECTO
        --------------------------------------------- */

        mostrarMensajeLogin(
            "✅ Acceso correcto. Bienvenido a EducaTech.",
            "exito"
        );


        /*
            Guardamos la sesión.

            Esto es una simulación para el proyecto.
            No reemplaza un sistema real de usuarios.
        */

        sessionStorage.setItem(
            "educatechSesion",
            "activa"
        );


        /* ---------------------------------------------
           MOSTRAR LA PÁGINA
        --------------------------------------------- */

        setTimeout(function () {

            mostrarSitioPrincipal();

        }, 800);

    }
);


}

/* =====================================================
FUNCIÓN PARA MOSTRAR EL SITIO
===================================================== */

function mostrarSitioPrincipal() {

if (pantallaAcceso) {

    pantallaAcceso.style.display = "none";

}

if (sitioPrincipal) {

    sitioPrincipal.classList.add("activo");

}

document.body.classList.remove("acceso-activo");

window.scrollTo({
    top: 0,
    behavior: "smooth"
});


}

/* =====================================================
COMPROBAR SESIÓN AL CARGAR
===================================================== */

window.addEventListener(
"DOMContentLoaded",
function () {

    const sesion =
        sessionStorage.getItem("educatechSesion");


    if (sesion === "activa") {

        mostrarSitioPrincipal();

    } else {

        if (pantallaAcceso) {

            pantallaAcceso.style.display = "block";

        }

        if (sitioPrincipal) {

            sitioPrincipal.classList.remove("activo");

        }

        document.body.classList.add("acceso-activo");

    }

}


);

/* =====================================================
EXPLORAR COMO VISITANTE
===================================================== */

if (btnInvitado) {

btnInvitado.addEventListener(
    "click",
    function () {

        sessionStorage.setItem(
            "educatechSesion",
            "activa"
        );

        mostrarSitioPrincipal();

    }
);


}

/* =====================================================
FORMULARIO DE REGISTRO
===================================================== */

if (formularioRegistro) {

formularioRegistro.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const nombre =
            document.getElementById("nombre").value.trim();

        const correo =
            document.getElementById("correo").value.trim();

        const telefono =
            document.getElementById("telefono").value.trim();

        const programa =
            document.getElementById("programa").value;

        const modalidad =
            document.getElementById("modalidad").value;

        const mensaje =
            document.getElementById("mensaje").value.trim();

        const terminos =
            document.getElementById("terminos").checked;


        /* ---------------------------------------------
           NOMBRE
        --------------------------------------------- */

        if (nombre === "") {

            alert(
                "⚠️ Ingresa tu nombre completo."
            );

            document.getElementById("nombre").focus();

            return;
        }


        if (nombre.length < 3) {

            alert(
                "⚠️ El nombre debe tener al menos 3 caracteres."
            );

            document.getElementById("nombre").focus();

            return;
        }


        /* ---------------------------------------------
           CORREO
        --------------------------------------------- */

        if (correo === "") {

            alert(
                "⚠️ Ingresa tu correo electrónico."
            );

            document.getElementById("correo").focus();

            return;
        }


        if (!validarCorreo(correo)) {

            alert(
                "⚠️ Ingresa un correo electrónico válido."
            );

            document.getElementById("correo").focus();

            return;
        }


        /* ---------------------------------------------
           TELÉFONO
        --------------------------------------------- */

        if (telefono === "") {

            alert(
                "⚠️ Ingresa tu número de celular."
            );

            document.getElementById("telefono").focus();

            return;
        }


        const formatoTelefono =
            /^[0-9\s+()-]{7,15}$/;


        if (!formatoTelefono.test(telefono)) {

            alert(
                "⚠️ Ingresa un número de celular válido."
            );

            document.getElementById("telefono").focus();

            return;
        }


        /* ---------------------------------------------
           PROGRAMA
        --------------------------------------------- */

        if (programa === "") {

            alert(
                "⚠️ Selecciona un programa de interés."
            );

            document.getElementById("programa").focus();

            return;
        }


        /* ---------------------------------------------
           MODALIDAD
        --------------------------------------------- */

        if (modalidad === "") {

            alert(
                "⚠️ Selecciona una modalidad."
            );

            document.getElementById("modalidad").focus();

            return;
        }


        /* ---------------------------------------------
           TÉRMINOS
        --------------------------------------------- */

        if (!terminos) {

            alert(
                "⚠️ Debes aceptar el registro de tus datos."
            );

            return;
        }


        /* ---------------------------------------------
           REGISTRO CORRECTO
        --------------------------------------------- */

        const datosRegistro = {

            nombre: nombre,
            correo: correo,
            telefono: telefono,
            programa: programa,
            modalidad: modalidad,
            mensaje: mensaje

        };


        console.log(
            "Datos del registro:",
            datosRegistro
        );


        alert(
            "✅ ¡Registro realizado correctamente!\n\n" +
            "Hemos recibido tus datos."
        );


        formularioRegistro.reset();

    }
);


}

/* =====================================================
ANIMACIONES AL HACER SCROLL
===================================================== */

const elementosAnimados =
document.querySelectorAll(
".beneficio, .programa-card, .vida-card, .galeria-item"
);

if ("IntersectionObserver" in window) {

const observador =
    new IntersectionObserver(
        function (elementos) {

            elementos.forEach(
                function (elemento) {

                    if (elemento.isIntersecting) {

                        elemento.target.classList.add(
                            "mostrar"
                        );

                        observador.unobserve(
                            elemento.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


elementosAnimados.forEach(
    function (elemento) {

        observador.observe(elemento);

    }
);


}

/* =====================================================
CERRAR SESIÓN
===================================================== */

/*
Tu HTML actual todavía no tiene un botón
con id="btnCerrarSesion".

Si posteriormente agregamos uno,
este código permitirá cerrar la sesión.
*/

const btnCerrarSesion =
document.getElementById("btnCerrarSesion");

if (btnCerrarSesion) {

btnCerrarSesion.addEventListener(
    "click",
    function () {

        sessionStorage.removeItem(
            "educatechSesion"
        );


        if (sitioPrincipal) {

            sitioPrincipal.classList.remove(
                "activo"
            );

        }


        if (pantallaAcceso) {

            pantallaAcceso.style.display =
                "block";

        }


        if (formularioLogin) {

            formularioLogin.reset();

        }


        document.body.classList.add(
            "acceso-activo"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


}


