import IconClose from "./IconClose/IconClose";
import classes from './CustomCloseButton.module.scss';

export const CustomCloseButton = ({ closeToast }: { closeToast?: () => void }) => (
  <button onClick={closeToast} className={classes['custom-close-button']}>
    <IconClose width={36} height={36}/>
  </button>
);