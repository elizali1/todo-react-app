const todosItem = (props) => {
    const {title, details, created_at} = props.todosData
    return(
        <div>
          <h3>{title}</h3>
          <h2>{details}</h2>
          <h4>{created_at}</h4>
        </div> 
    )
}

export default todosItem