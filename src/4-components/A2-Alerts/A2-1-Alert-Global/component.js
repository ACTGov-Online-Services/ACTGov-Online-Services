export const createA21 = ({
	backgroundColor,
	label,
	type,
	onClick,
	primary = false,
	size = "medium",
}) => {
	return `
<div class="act-alert-global act-alert-global`+type+`" role="alert">
  <div class="act-alert-global__container">
    <div class="act-alert-global__content">
      <h1>`+label+`</h1>
      <h1 class="large">`+label+`</h1>
      <h2>`+label+`</h2>
      <h3>`+label+`</h3>
      <h4>`+label+`</h4>
      <h5>`+label+`</h5>
      <h6>`+label+`</h6>
      <p>`+label+`</p>
      <p class="bold">`+label+`</p>
    </div>
  </div>
</div>
	`;
};
