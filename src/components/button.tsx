
 

 interface props {
    children: string;
    color ? : 'primary' | 'secondary' | 'danger' | 'success';
    onclick: () => void; 
 }
const Button = ({children,color ='danger',onclick}: props) => {
    return(
        <button className ={'btn btn-'+color} onClick={onclick}>{children}</button>
    );
}

export default Button;