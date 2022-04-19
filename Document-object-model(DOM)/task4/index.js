export const getTitle = () => {
  const title1 = document.querySelector('.title');
  return title1.textContent;
};

export const getDiscription = () => {
  const about = document.querySelector('.about');
  return about.innerText;
};

export const getPlans = () => {
  const plans = document.querySelector('.plans');
  return plans.innerHTML;
};

export const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
};
// console.log(getTitle());
// console.log(getDiscription());
// console.log(getPlans());
// console.log(getGoal());
