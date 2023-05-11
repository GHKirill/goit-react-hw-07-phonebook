import { RotatingLines } from 'react-loader-spinner';

export const SpinnerButton = () => {
  return (
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="15"
      visible={true}
    />
  );
};
