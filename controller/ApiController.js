import { Alert, Component } from 'react';
const url = "https://appdistflix.herokuapp.com/";

const urlLogin="api/auth/login"; //OK
const urlRegistrar="api/auth/signup"; // OK
const urlGetComentariosByUsuario="api/comment/movie/comment/user"; // 
const urlGrabarComentario="api/comment/comment/movie"; // 
const urlgetCommentsById="api/comment/movie/comment"; //


class ApiController extends Component {

    getPeliculas(okPeliculas, nombre) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getPeliculasByKey?key=' + nombre
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => alert("Intentar de nuevo")).
            then(data => {
                okPeliculas(data);
            }).catch((err) => alert("Intentar de nuevo"));
    }

    getDetalle(okDetalle, id) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getPeliculasAndSeriesById?movieId=' + id
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                okDetalle(data);
            }).catch((error) => console.log(error));
    }

    getSeries(okSeries, nombre) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getSeriesByKey?key=' + nombre
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                okSeries(data);
            }).catch((err) => console.log(err));
    }

    getComentarioByPelicula(okComentario, id) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getComentariosByPeliculaId?peliculaId=' + id
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => {
            console.log(err)
        }).
            then(data => {
                okComentario(data);
            }).catch((err => {
                console.log(err);
                alert("No existen Comentarios");
            }));
    }

    // insertUsuario(name, email, password, okCreate) {
    //     let uri = 'http://192.168.43.215:8080/apiAppPeliculas/insertUsuario/Usuario'
    //     fetch(uri, {
    //         method: 'POST',
    //         mode: "cors",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             nombre: name,
    //             email: email,
    //             password: password,
    //         })
    //     }).then((res) => {
    //         return res.json();
    //     }).catch((err) => console.log(err)).then((res) => {
    //         okCreate();
    //     }).catch((err) => console.log(err))

    // }


    login(okLogin,noOkLogin,usuarioBuscado)
    {
        const endpoint = `${url}${urlLogin}`;
        console.log("inciando sesion usuario")
        console.log(usuarioBuscado);
        
        return fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(usuarioBuscado) // data can be `string` or {object}!
        }).then ((response) => {
            return response.json();
        }).then (responseData => {
                console.log(responseData);
                if (responseData.username== usuarioBuscado.username){
                    okLogin();
                    console.log("usuario online");  
                    return AsyncStorage.setItem(USER_STORAGE_KEY, usuarioBuscado.username)
                }else{ 
                    noOkLogin();
                    throw new Error("credenciales ingresadadas invalidas")
                    console.log("credenciales ingresadadas invalidas");  
                    noOkLogin();
                }
        }).catch((err)=>{
            console.log("error captado ", err);
        });
    }

    registrarUsuario(okRegister,noOkRegister, usuarioRegister)
    {
        
        const endpoint = `${url}${urlRegistrar}`;
        console.log(usuarioRegister);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(usuarioRegister) // data can be `string` or {object}!
        }).then ((response) => {
            return response.json();
        }).then (responseData => {
                console.log(responseData);
                
                if (responseData.username== usuarioRegister.username){
                    console.log("usuario registrado");  
                    okRegister();
                }
                else{
                    console.log("El usuario ya existe");  
                    noOkRegister();   
                }
        }).catch((err)=>{
            console.log(err);
        });
    };


    changePassword(user, pass, okChange) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/updateUsuarioByPassword/Usuario'
        fetch(uri, {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuarioId: user, password: pass }),
        }).then((res) => {
            return res.json();
        }).catch((err) => console.log(err)).then((res) => {
            okChange();
        }).catch((err) => console.log(err));
    }

    getUsuario(okUsuario, username) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getUsuarioByIdOne?usuarioId=' + username
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => {
            console.log(err)

        }).
            then(data => {
                okUsuario(data);
            }).catch((err => {
                console.log(err);
                alert("No existe el usuario");
            }));
    }

    createComment(idUsuario, idPelicula, descripcion, title, okComentario) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/insertComentario/Comentario'
        fetch(uri, {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                descripcion: descripcion,
                usuarioId: idUsuario,
                peliculaId: idPelicula,
                peliculaNombre: title,
            }),
        }).then((res) => {
            return res.json();
        }).catch((err) => console.log(err)).then((res) => {
            okComentario();
        }).catch((err) => console.log(err));
    }

    getCommentByIdUser(userId, okComentario) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getComentariosByUsuario?usuarioId=' + userId
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => {
            console.log(err)
        }).
            then(data => {
                okComentario(data);
            }).catch((err => {
                console.log(err);
                alert("No existen Comentarios");
            }));
    }

}

export default new ApiController();