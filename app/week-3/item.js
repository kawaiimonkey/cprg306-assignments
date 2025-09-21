export default function Item(props){
    return(
        <ul className = "bg-slate-800 my-4 p-2 w-96">
        <li className = "font-bold text-2xl">{props.name}</li>
        <li className = "text-lg">Buy {props.quantity} in {props.category}</li>
    </ul>
    );
    
}