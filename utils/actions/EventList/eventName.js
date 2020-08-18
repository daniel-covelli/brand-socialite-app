const eventName = (name) => {
  const length = name.length;
  if (length > 50) {
    return <>{`${name.substring(0, 50)}...`}</>;
  }
  return <>{name}</>;
};

export default eventName;
