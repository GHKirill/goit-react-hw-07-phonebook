import React from 'react';
import PropTypes from 'prop-types';
import css from './IconButton.module.css';
import { ReactComponent as DeleteIcon } from 'components/Icons/bin.svg';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { SpinnerButton } from 'components/Spinner/SpinnerButton';
export default function IconButton({
  children,
  onClick,
  loading,
  ...allyProps
}) {
  const isLoading = useSelector(selectIsLoading);
  return (
    <button
      type="button"
      className={css.iconButton}
      disabled={isLoading}
      onClick={onClick}
      {...allyProps}
    >
      {isLoading && loading ? (
        <SpinnerButton />
      ) : (
        <DeleteIcon width="15" height="15" fill="blue" />
      )}
    </button>
  );
}
IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
