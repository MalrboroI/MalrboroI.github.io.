import { Button } from "react-bootstrap";
import Delete from "../../../../../img/cardElements/delete.svg"
 
const ButtonDelete = ({ deleteProduct, id }) => {
	return (
		<Button className="BtnInLiked" type='button' onClick={()=>{deleteProduct(id);}}>
			<img src={Delete} alt='Delete' />
		</Button>
	);
};

export default ButtonDelete;
