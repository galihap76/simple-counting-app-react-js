export function Button({ operasi, handleClick, checkCount }) {
  if (checkCount == 10 || checkCount < 0) {
    return (
      <button onClick={handleClick} className="btn btn-dark mt-3 mx-3" disabled>
        {operasi}
      </button>
    );
  } else {
    return (
      <button onClick={handleClick} className="btn btn-dark mt-3 mx-3">
        {operasi}
      </button>
    );
  }
}

export function ButtonReset({ handleReset, checkCount }) {
  if (checkCount == 10 || checkCount < 0) {
    return (
      <button onClick={handleReset} className="btn btn-dark mt-3 mx-3">
        Reset
      </button>
    );
  } else {
    return (
      <button onClick={handleReset} className="btn btn-dark mt-3 mx-3" disabled>
        Reset
      </button>
    );
  }
}
