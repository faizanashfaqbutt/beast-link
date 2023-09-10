import styles from './loader-button.module.css';

export interface LoaderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  altText?: string;
  loading?: boolean;
  loadingSpinnerPos?: 'left' | 'right';
  iconPos?: 'left' | 'right';
  keepText?: boolean;
  spinnerStyle?: React.CSSProperties;
  spinnerClassName?: string;
  icon?: HTMLElement | React.ReactNode;
}

export function LoaderButton(props: LoaderButtonProps) {
  const {
    label,
    spinnerClassName,
    altText,
    loading,
    keepText,
    spinnerStyle,
    icon,
    loadingSpinnerPos = 'left',
    iconPos = 'left',
    ...rest
  } = props;

  const Spinner = () => {
    return (
      <span
        className={styles.loader + ' ' + spinnerClassName}
        style={{ ...spinnerStyle }}
      ></span>
    );
  };

  const RenderLabel = () => {
    if (loading && altText) {
      return altText;
    }
    return label;
  };

  const TextWithIcon = () => {
    if (icon && iconPos === 'left') {
      return (
        <>
          {icon} <RenderLabel />
        </>
      );
    }
    if (icon && iconPos === 'right') {
      return (
        <>
          <RenderLabel /> {icon}
        </>
      );
    }
    return <RenderLabel />;
  };

  const renderLabelAndSpinner = () => {
    if (loading) {
      if (keepText && loadingSpinnerPos) {
        if (loadingSpinnerPos === 'left') {
          return (
            <>
              <Spinner />
              <TextWithIcon />
            </>
          );
        }
        if (loadingSpinnerPos === 'right') {
          return (
            <>
              <TextWithIcon />
              <Spinner />
            </>
          );
        }
      }

      return <Spinner />;
    }
    return <TextWithIcon />;
  };

  return (
    <button disabled={loading} {...rest}>
      {renderLabelAndSpinner()}
    </button>
  );
}

export default LoaderButton;
