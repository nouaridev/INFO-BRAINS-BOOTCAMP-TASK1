//selecting the cards'
let cards = document.querySelectorAll(".card");


cards.forEach(e => {
  let moins = e.children[0].children[1];
    let plus = e.children[0].children[2];
        let faqRes = e.children[1];

  // hide the moins btn
  moins.classList.add("hiddenbtn");

  //handling clicks on plus btn
  plus.addEventListener("click", (r) => {
    //hidding all the responses : 
    cards.forEach((c) => {
      if (c.children[1] != r.target.parentNode.parentNode.children[1]) {
        c.children[1].classList.remove('show');
        c.children[0].children[1].classList.add("hiddenbtn");
        c.children[0].children[2].classList.remove("hiddenbtn");
      }
    });
    
    //display the curent response
    r.target.classList.toggle("hiddenbtn");
     moins.classList.remove("hiddenbtn");
    faqRes.classList.add("show");
  });

  //handling clicks on moins btn
  moins.addEventListener("click", (r) => {
    r.target.classList.toggle("hiddenbtn");
        plus.classList.remove("hiddenbtn");
            faqRes.classList.remove("show");
      
  });
});


