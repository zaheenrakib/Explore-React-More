export default function Single({single}){
    const {name ,email} = single;
    return (
        <div className="box">
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
        </div>
    )
}