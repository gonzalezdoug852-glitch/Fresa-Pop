// 1. Configuración de tu Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD-yTbMknmP6PXgF9SjDjtX4ci6CpNqUbs",
    authDomain: "fresa-pop.firebaseapp.com",
    projectId: "fresa-pop",
    storageBucket: "fresa-pop.appspot.com",
    messagingSenderId: "569498732262",
    appId: "1:569498732262:web:48d193e7d4fc5d91131d27",
    measurementId: "G-BCBRJ9KW6J"
};

// 2. Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// 3. Obtener la función de autenticación
const auth = firebase.auth();

// 4. Función para registrar al usuario
function registrarUsuario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Por favor, rellena todos los campos.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Registro exitoso
        alert("¡Bienvenido a Fresa Pop! Cuenta creada con éxito.");
        console.log("Usuario registrado:", userCredential.user);
    })
    .catch((error) => {
        // Si hay un error (ej: contraseña muy corta, email inválido)
        alert("Error al registrarse: " + error.message);
    });
}