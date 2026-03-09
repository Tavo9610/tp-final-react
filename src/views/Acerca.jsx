
const Acerca = () => {
    return (
    
    <div className="aboutpage">
      <h1 className="title-login">Clon Chats WhatsApp</h1>
      <h3>Acerca del projecto y ecnologias Usadas</h3>
      <p>Es un projecto creado para emular una app de chats web orientado al uso de react, separado en login, register,
         y about como rutas no protegidas, con home mostrando todo el Chat y Aside estando protegido
         por react context y RouteProtected.  Como estructura basica se utilizo HTML y CSS para estilos.</p>
         <h3> Decisiones y vistas sobre el projecto</h3>
         <p>En terminos decisiones de desarrollo opte por familiaridad y utilidad en cuanto a complejidad y visual del projecto refiere.<br></br> 
            El proyecto al no verificar todo de forma server-sided se hace de forma un poco mas sencilla
         </p>
         <a href="/">Volver a inicio de sesion</a>
    </div>
  )
}

export { Acerca }