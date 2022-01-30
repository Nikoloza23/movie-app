import "./theme.css";
import PropTypes from "prop-types"

function Theme({children, mode = "light"}) {
    return (
        <div className={`p-3 bg-${mode}`}>{children}</div>
    )
};

Theme.protoTypes = {
    mode: PropTypes.oneOf(['classCounter','homePage','notesPage']).isRequired
}

export default Theme;