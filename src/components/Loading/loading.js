const LoadingComponent = ({children, estadoCarga}) => {
    if(estadoCarga){
        return(
            <div style={{display:"flex",justifyContent:"center", alignItems:"center", height:"100vh"}}>
              <div style={{padding:"1vw"}} className="spinner-border text-primary" role="status"></div>
              <h3 style={{padding:"1vw"}} className="text-primary">Cargando...</h3>
            </div>)
    }else{
        return children
    }
}
export default LoadingComponent;