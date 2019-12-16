- [ ] Why would you use class component over function components (removing hooks from the question)?

When lifecycle methods are required.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() called as soon as the component is mounted and ready. place to initiate API calls
componentDidUpdate() updating the DOM in response to prop or state changes.
componentWillUnmount() clearing timers, cancelling api calls, or clearing any caches in storage.

- [ ] What is the purpose of a custom hook?

A way of fully isolating all state and effects within a hook so you can seperate and reuse the functionality

- [ ] Why is it important to test our apps?

For software quality.
To reduce risk when refactoring,
It encourages better (more testable) code,
Identifies bugs faster.
Reduces the risk of regressions.
Allows us to trust the code.
Makes us think about the edge cases.
Acts as a safety net when making changes or refactoring.
Acts as documentation for the code.
