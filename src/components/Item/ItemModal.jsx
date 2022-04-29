import { Modal } from "react-bootstrap";
import ItemDetailContainer from "./ItemDetailContainer";
import MenuWidget from "../MenuWidget/MenuWidget";

const SearchModal = (props) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <MenuWidget color={'black'} />
            </Modal.Header>
            <Modal.Body>
                <ItemDetailContainer id={props.id} />
            </Modal.Body>
        </Modal>
    );
}
export default SearchModal;

