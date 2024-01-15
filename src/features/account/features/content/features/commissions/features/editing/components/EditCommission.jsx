import PencilEditSVG from "../../../../../../../../../shared/assets/media/svg/PencilEditSVG/PencilEditSVG";

const EditCommission = ({onClick}) => {
    return (
        <PencilEditSVG
            onClick={onClick}
            className={'pencil-edit'}
            title={'Edytuj dane zlecenia.'}
        />
    )
}

export default EditCommission;
