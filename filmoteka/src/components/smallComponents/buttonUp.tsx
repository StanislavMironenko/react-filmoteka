import '../../sass/components/_scrolling-up-button.scss';

export function ButtonUp(): JSX.Element {
    return <button
      id="back-to-top"
      className="back-to-top"
      title="Return to top"
      type="button"
    >
      <span className="material-icons">keyboard_double_arrow_up</span>
    </button>

}