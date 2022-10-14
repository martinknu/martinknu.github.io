
// Contact me form submit
function contactMeSubmit(e) {

    const data = Object.fromEntries(new FormData(e.target).entries());
    const postaddress = "martinknu@gmail.com"
    window.location.href = `mailto:${postaddress}?cc=&body=Hi Martin, ${data.comments} &subject=From: ${data.name}`;
    e.preventDefault();
}

// Contact form submit event listener
contact_form.addEventListener('submit', contactMeSubmit);    