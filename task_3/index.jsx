import { useState, Fragment, memo, useMemo } from 'react';

const MainComponent = ({ name, age }) => {
  const [ _, updateComponent ] = useState(); // change state for force component updating

  const user = useMemo(() => {
    return {name, age}
  }, [name, age])

  return (
      <Fragment>
          <button onClick={updateComponent}>update MainComponent</button>
          <ChildComponent user={user} />
      </Fragment>
  );
};

MainComponent.defaultProps = {
  name: 'unknown',
  age: null,
}

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
  return (
      <div>user name: {name}, user age: {age}{console.log('Child component updated')}</div>
  );
});
