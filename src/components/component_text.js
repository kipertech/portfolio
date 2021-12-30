const Text = (props) => {
    return(
        <p style={Object.assign({ margin: 0 }, props.style)}>
            {props.children}
        </p>
    )
}

export default Text;
