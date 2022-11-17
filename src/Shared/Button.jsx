
import PropTypes from 'prop-types'

function MakeButton(children, disable, type) {
  return (
    <button
      type={children.type}
      disable={children.disable}
      className={`btn btn-${children.version}`}
    >{children.children}</button>
  )

  }
  MakeButton.defaultProps ={
    type:'button',
    version: 'primary',
    disable:'false'
}
MakeButton.propTypes={
children: PropTypes.node.isRequired,
version: PropTypes.string,
type: PropTypes.string,
disable: PropTypes.string

}
export default MakeButton;
