function defer(func, ms) {
  return function () {
    setTimeout(() => func(...arguments), ms);
  };
}
